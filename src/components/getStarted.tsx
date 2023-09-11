"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineRight } from "react-icons/ai";

export default function GetStarted() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem("email", email);
    router.push("/signup");
  }

  return (
    <form
      className="w-full flex flex-col items-center justify-center sm:flex-row gap-2"
      onSubmit={handleSubmit}
    >
      <input
        required
        type="email"
        placeholder="Email address"
        value={email}
        className="w-full sm:w-96 h-10 xs:h-14 p-4 rounded border border-neutral-400 text-neutral-100 outline-neutral-300"
        style={{
          backgroundColor: "rgba(23, 23, 23, 0.7)",
        }}
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="flex justify-center items-center gap-1 w-full sm:w-40 h-10 xs:h-14 bg-red-600 text-white p-2 rounded font-semibold text-lg"
      >
        <p>Get Started</p>
        <AiOutlineRight />
      </button>
    </form>
  );
}
