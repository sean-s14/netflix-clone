import Image from "next/image";
import Link from "next/link";
import footerLinks from "./footer-links.json";
import getAssetURL from "@/utils/getAssetURL";

const inputClassname =
  "rounded p-4 outline-neutral-300 bg-neutral-700 text-neutral-50";

export default function LoginPage() {
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

      <header className="p-4">
        <Image
          src="/netflix.svg"
          alt="Netflix Logo"
          width={100}
          height={24}
          priority
          className="w-20 xs:w-40"
        />
      </header>

      {/* Card */}
      <div
        className="p-8 md:p-14 flex flex-col gap-4 w-full max-w-full md:max-w-[450px] self-center rounded"
        style={{ backgroundColor: "rgba(0,0,0, 0.75)" }}
      >
        <h1 className="text-3xl font-semibold mb-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email or phone number"
          className={inputClassname}
        />
        <input type="text" placeholder="Password" className={inputClassname} />
        <button className="mt-4 w-full bg-red-600 text-white p-3 rounded font-semibold text-base">
          Sign In
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

        <div className="mt-4 xs:mt-10">
          <div className="text-base text-neutral-400">
            <span>New to Netflix? </span>
            <Link href="/signup" className="text-neutral-50">
              Sign up now
            </Link>
            <span>.</span>
          </div>
        </div>
      </div>

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
