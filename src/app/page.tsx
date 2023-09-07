import Image from "next/image";
import { supabase } from "@/utils/supabase";

const mainBucket = supabase.storage.from("main");

export default function Home() {
  return (
    <main className="min-h-screen h-screen min-w-full flex flex-col items-center">
      {/* Container div */}
      <div className="relative w-screen h-2/4 sm:h-3/5 lg:h-3/4 p-8 flex flex-col items-center">
        {/* Background Image */}
        <Image
          src={
            mainBucket.getPublicUrl("home/unauthenticated/img/main-2.jpg").data
              .publicUrl
          }
          alt="Home Background Image"
          fill
          priority
          className="object-cover"
          style={{ zIndex: -2 }}
        />
        {/* Overlay for background image */}
        <div
          className="absolute top-0 left-0 z-0 min-w-full min-h-full"
          style={{
            zIndex: -1,
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        ></div>

        {/* Container for Netflix Logo and Signin Button */}
        <div className="min-w-full flex justify-between">
          {/* Netflix Logo */}
          <Image
            src="/netflix.svg"
            alt="Netflix Logo"
            width={100}
            height={24}
            priority
            className="w-24 lg:w-40"
          />
          <button className="bg-red-600 rounded py-1 px-4">Sign In</button>
        </div>

        {/* Container for Text and Get Started */}
        <div className="h-full flex flex-col items-center justify-center gap-4 lg:gap-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Unlimited films, TV programmes and more
          </h2>

          <p className="lg:text-2xl">Watch anywhere. Cancel at any time.</p>

          <p className="lg:text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          {/* Get Started (email input + 'get started' button) */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Email address"
              className="w-full sm:w-96 h-14 p-4 rounded border border-neutral-400 text-neutral-100"
              style={{
                backgroundColor: "rgba(23, 23, 23, 0.7)",
              }}
            />
            <button className="w-full sm:w-40 bg-red-600 text-white p-2 rounded font-semibold text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
