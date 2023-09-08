import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import links from "./footer-links.json";
import FAQ from "@/components/faq";
import getAssetURL from "@/utils/getAssetURL";

// TODO: Change red colors to match netflix red

function Hr() {
  return <hr className="w-full my-14 flex border-neutral-800 border-4" />;
}

function GetStarted() {
  return (
    <div className="w-full flex flex-col items-center justify-center sm:flex-row gap-2">
      <input
        type="text"
        placeholder="Email address"
        className="w-full sm:w-96 h-10 xs:h-14 p-4 rounded border border-neutral-400 text-neutral-100 outline-neutral-300"
        style={{
          backgroundColor: "rgba(23, 23, 23, 0.7)",
        }}
      />
      <button className="flex justify-center items-center gap-1 w-full sm:w-40 h-10 xs:h-14 bg-red-600 text-white p-2 rounded font-semibold text-lg">
        <p>Get Started</p>
        <AiOutlineRight />
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen h-screen min-w-full flex flex-col items-center">
      {/* Container div */}
      <div className="relative w-full min-h-[480px] lg:min-h-[75%] p-6 xs:p-8 flex flex-col items-center">
        {/* Background Image */}
        <Image
          src={getAssetURL("home/unauthenticated/img/main-2.jpg")}
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
          <h2 className="text-2xl xs:text-3xl lg:text-5xl font-bold">
            Unlimited films, TV programmes and more
          </h2>

          <p className="lg:text-2xl">Watch anywhere. Cancel at any time.</p>

          <p className="lg:text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          {/* Get Started (email input + 'get started' button) */}
          <GetStarted />
        </div>
      </div>

      {/* Card with link to Signup */}
      <div className="radial-gradient-1 sm:radial-gradient-2 relative mt-4 lg:-mt-20 w-[90%] h-fit p-6 pt-12 sm:p-6 rounded flex gap-6 sm:justify-center">
        <Image
          src={getAssetURL("home/unauthenticated/img/popcorn-2.png")}
          alt="Popcorn"
          width={100}
          height={100}
          priority
          className="w-20 h-20 sm:w-28 sm:h-28 absolute sm:relative -top-10 sm:top-0"
        />
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">
            The Netflix you love for just £4.99.
          </p>
          <p>Get the Standard with adverts plan.</p>
          <Link
            href="/signup"
            // TODO: Change text color to match netflix blue
            className="flex items-center gap-2 underline text-sky-600 font-semibold"
          >
            <p>Learn More</p>
            <AiOutlineRight />
          </Link>
        </div>
      </div>

      {/* Section 1 (Enjoy on you TV) */}
      <section className="w-[90%] mt-10 flex flex-col lg:flex-row items-center lg:gap-16">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold">Enjoy on your TV</h2>
          <p className="text-base lg:text-xl font-medium">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center">
          {/* TV Image */}
          <Image
            src={getAssetURL("home/unauthenticated/img/tv.png")}
            alt="TV"
            width={640}
            height={480}
            priority
            className="z-0"
          />
          {/* Video */}
          {/* TODO: Uncomment when ready to fix */}
          {/* <video
            src={getAssetURL("home/unauthenticated/vid/video-tv.m4v")}
            // width="460px"
            className="absolute top-[102px] left-[86px] w-[460px] max-w-full"
            style={{
              zIndex: -1,
            }}
            autoPlay
            muted
            loop
          /> */}
        </div>
      </section>

      <Hr />

      {/* Section 2 (Watch Everywhere) */}
      <section className="w-[90%] mt-10 flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-16">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold">Watch everywhere</h2>
          <p className="text-base lg:text-xl font-medium">
            Stream unlimited films and TV programmes on your phone, tablet,
            laptop and TV.
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center">
          {/* Devices Image */}
          <Image
            src={getAssetURL("home/unauthenticated/img/device-pile.png")}
            alt="TV"
            width={640}
            height={480}
            priority
            className="z-0"
          />
          {/* Video */}
          {/* TODO: Uncomment when ready to fix */}
          {/* <video
            src={getAssetURL("home/unauthenticated/vid/video-devices.m4v")}
            // width="460px"
            className="absolute top-[102px] left-[86px] w-[460px] max-w-full"
            style={{
              zIndex: -1,
            }}
            autoPlay
            muted
            loop
          /> */}
        </div>
      </section>

      <Hr />

      {/* Section 3 (Create profiles for children) */}
      <section className="w-[90%] mt-10 flex flex-col lg:flex-row items-center lg:gap-16">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Create profiles for children
          </h2>
          <p className="text-base lg:text-xl font-medium">
            Send children on adventures with their favourite characters in a
            space made just for them - free with your membership.
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center">
          {/* TV Image */}
          <Image
            src={getAssetURL("home/unauthenticated/img/children.png")}
            alt="TV"
            width={640}
            height={480}
            priority
            className="z-0"
          />
        </div>
      </section>

      <Hr />

      {/* Section 4 (Download your programmes to watch offline) */}
      <section className="w-[90%] mt-10 flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-16">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Download your programmes to watch offline
          </h2>
          <p className="text-base lg:text-xl font-medium">
            Only available on advert-free plans.
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center">
          {/* Mobile Image */}
          <Image
            src={getAssetURL("home/unauthenticated/img/mobile.jpg")}
            alt="TV"
            width={640}
            height={480}
            priority
            className="z-0"
          />
          {/* Inner Card */}
          <div className="absolute bottom-4 flex gap-4 rounded-xl border-2 border-neutral-500 h-24 min-w-fit w-72 p-2 bg-black">
            <Image
              src={getAssetURL("home/unauthenticated/img/boxshot.png")}
              alt="Boxshot"
              width={150}
              height={210}
              className="h-auto w-auto"
            />
            <div className="flex flex-col justify-center">
              <p>Stranger Things</p>
              <p className="text-sky-500">Downloading...</p>
            </div>
            <Image
              src={getAssetURL("home/unauthenticated/img/download.gif")}
              alt="Download gif"
              width={100}
              height={100}
              className="h-auto w-auto ml-0 xs:ml-20"
            />
          </div>
        </div>
      </section>

      <Hr />

      {/* Section 5 (Frequently Asked Questions) */}
      <section className="w-full lg:w-[95%] p-4 flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="w-full flex flex-col gap-2 mb-12">
          <FAQ />
        </div>

        <div className="w-fit">
          <p className="text-lg lg:text-xl mb-6 text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <GetStarted />
        </div>
      </section>

      <Hr />

      {/* Footer */}
      <footer className="w-full flex flex-col gap-6 px-6 lg:p-10 items-start text-neutral-400">
        {/* Contact */}
        <p>Questions? Call 0808 196 5391</p>

        {/* Links */}
        <div className="flex flex-col gap-2 xs:flex-row flex-wrap">
          {links.map(({ title, url }, index) => (
            <Link
              key={index}
              href={url}
              className="underline text-sm hover:text-white min-w-[200px]"
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Language */}
        <select
          name=""
          id=""
          className="bg-neutral-950 text-neutral-300 border border-neutral-500 outline-neutral-300 px-3 py-1 rounded w-fit"
        >
          <option value="">English</option>
        </select>

        <p className="mb-10">Netflix United Kingdom</p>
      </footer>
    </main>
  );
}
