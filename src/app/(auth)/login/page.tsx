"use client";
import { useState, useReducer } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import footerLinks from "../footer-links.json";
import getAssetURL from "@/utils/getAssetURL";
import { CgSpinnerTwo } from "react-icons/cg";

const inputClassname =
  "rounded p-4 outline-neutral-300 bg-neutral-700 text-neutral-50";

interface FormValues {
  email: string;
  password: string;
}

const defaultFormValues: FormValues = {
  email: "",
  password: "",
};

const formReducer = (
  state: FormValues,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default function LoginPage() {
  const router = useRouter();
  const [formState, formDispatch] = useReducer(formReducer, defaultFormValues);
  const [error, setError] = useState<string | null>(null);
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    formDispatch({ type: event.target.name, payload: event.target.value });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.error) {
          console.error(data.error);
          setError(data.error);
          setErrorFields(data.fields);
        } else {
          router.push("/browse");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
        setLoading(false);
        setError(error.message);
      });
  }

  return (
    <main className="flex flex-col justify-between min-h-screen">
      {/* Background Image */}
      <div className="absolute md:inset-0 pointer-events-none">
        <Image
          src={getAssetURL("home/unauthenticated/img/main-2.jpg")}
          alt="Home Background Image"
          fill
          priority
          className="object-cover"
          style={{ zIndex: -2 }}
        />
        {/* Overlay */}
        <div
          className="absolute left-0 top-0 w-full h-full"
          style={{ zIndex: -1, backgroundColor: "rgba(0,0,0,0.6)" }}
        ></div>
      </div>

      {/* Netflix Logo */}
      <header className="p-4">
        <Link href="/">
          <Image
            src="/netflix.svg"
            alt="Netflix Logo"
            width={100}
            height={24}
            priority
            className="w-20 xs:w-40"
          />
        </Link>
      </header>

      {/* Form */}
      <form
        className="p-8 md:p-14 flex flex-col gap-4 w-full max-w-full md:max-w-[450px] self-center rounded"
        style={{ backgroundColor: "rgba(0,0,0, 0.75)" }}
        onSubmit={onSubmit}
      >
        {/* Title */}
        <h1 className="text-3xl font-semibold mb-4">Sign In</h1>

        {/* Error Message */}
        {error && (
          <div className="bg-amber-600 text-white py-2 px-5 font-normal rounded text-sm text-start">
            {error}
          </div>
        )}

        {/* TODO: This input accepts 'text' but should only accept either 'email' or 'phone' */}

        {/* Email */}
        <input
          required
          type="email"
          name="email"
          placeholder="Email or phone number"
          value={formState.email}
          className={
            inputClassname +
            (errorFields?.includes("email")
              ? " border-b-2 border-amber-600"
              : "")
          }
          onChange={handleInputChange}
          autoComplete="email"
        />

        {/* Password */}
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          value={formState.password}
          className={
            inputClassname +
            (errorFields?.includes("password")
              ? " border-b-2 border-amber-600"
              : "")
          }
          onChange={handleInputChange}
          autoComplete="current-password"
        />

        {/* Sign In Button */}
        <button
          className={`mt-4 w-full ${
            loading ? "bg-red-800" : "bg-red-600"
          } text-white p-3 rounded font-semibold text-base flex justify-center`}
          disabled={loading}
        >
          {loading ? (
            <CgSpinnerTwo fontSize="24" className="animate-spin" />
          ) : (
            "Sign In"
          )}
        </button>

        <div className="flex justify-between">
          {/* "Remember me" checkbox */}
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="bg-neutral-600"
            />
            <label htmlFor="remember-me" className="text-sm text-neutral-300">
              Remember me
            </label>
          </div>

          {/* Need Help? */}
          <p className="text-sm text-neutral-300">Need Help?</p>
        </div>

        {/* Link to Signup page */}
        <div className="mt-4 xs:mt-10">
          <div className="text-base text-neutral-400">
            <span>New to Netflix? </span>
            <Link href="/signup" className="text-neutral-50">
              Sign up now
            </Link>
            <span>.</span>
          </div>
        </div>
      </form>

      <hr className="w-full mt-10 mb-4 flex border-neutral-800 border md:border-none" />

      {/* Footer */}
      <footer
        className="p-4 md:px-12 md:py-8 text-neutral-500"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <p>Questions? Call 0808 196 5391</p>
        <ul className="my-10 flex flex-wrap gap-4 xs:gap-6">
          {footerLinks.map(({ title, url }) => (
            <li key={title} className="text-sm min-w-[160px] md:min-w-[240px]">
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
