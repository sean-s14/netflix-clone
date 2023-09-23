"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import getAssetURL from "@/utils/getAssetURL";

const tempGenres = [
  {
    title: "Home",
    href: "/browse",
  },
  {
    title: "My List",
    href: "/browse",
  },
  {
    title: "Thrillers",
    href: "/browse",
  },
  {
    title: "Crime",
    href: "/browse",
  },
  {
    title: "Kids & Family",
    href: "/browse",
  },
  {
    title: "International Films & TV",
    href: "/browse",
  },
  {
    title: "Reality TV",
    href: "/browse",
  },
  {
    title: "Action",
    href: "/browse",
  },
  {
    title: "Anime",
    href: "/browse",
  },
  {
    title: "Comedies",
    href: "/browse",
  },
  {
    title: "Fantasy",
    href: "/browse",
  },
  {
    title: "Sci-Fi",
    href: "/browse",
  },
  {
    title: "Horror",
    href: "/browse",
  },
  {
    title: "Stand-up Comedy",
    href: "/browse",
  },
  {
    title: "Documentaries",
    href: "/browse",
  },
  {
    title: "European Films & TV",
    href: "/browse",
  },
  {
    title: "Music & Musicals",
    href: "/browse",
  },
  {
    title: "Romance",
    href: "/browse",
  },
  {
    title: "Dramas",
    href: "/browse",
  },
  {
    title: "British Movies & TV",
    href: "/browse",
  },
];

export default function MobileNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        // User is at the top
        setIsSticky(true);
      } else {
        // User is not at the top
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setMenuOpen((val) => !val);
  }

  function toggleProfileDropdown() {
    setProfileDropdownOpen((val) => !val);
  }

  function logOut(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/");
  }

  const navBgColor = menuOpen
    ? "bg-neutral-950"
    : isSticky
    ? "bg-gradient-to-b from-neutral-950 to-neutral-900"
    : "bg-neutral-950/50";

  return (
    <>
      {/* Main Navigation */}
      <nav
        ref={stickyRef}
        className={`w-full flex sticky top-0 items-center justify-between px-8 py-3 md:py-4 h-14 text-neutral-200 ${navBgColor}`}
      >
        <div className="flex items-center gap-10">
          {/* Side Menu Toggle and Netflix Logo */}
          <div className="flex items-center">
            {/* Side Menu Toggle */}
            <button
              className="flex md:hidden text-white text-2xl mr-4"
              onClick={toggleMenu}
            >
              <RxHamburgerMenu size="30" />
            </button>

            {/* Netflix Logo */}
            <Link href="/">
              <Image
                src="/netflix.svg"
                alt="Netflix Logo"
                width={100}
                height={24}
                priority
                className="w-20 md:w-28"
              />
            </Link>
          </div>

          {/* Browse and Children */}
          <div className="hidden md:flex">
            <ul className="flex gap-10 text-base font-semibold">
              <li
                className={`${
                  pathname === "/browse" && "text-red-500 text-base"
                }`}
              >
                <Link href="/browse">Browse</Link>
              </li>
              <li>
                <Link href="/browse">Children</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Search Input & Profile Management */}
        <div className="flex gap-6 items-center">
          {/* Search Input */}
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="bg-neutral-800 border border-neutral-200 w-32 xs:w-44 lg:w-60 py-0.5 px-2"
          />

          {/* Profile Management */}
          <div
            role="button"
            className="hidden md:flex relative gap-4 items-center"
            onClick={toggleProfileDropdown}
          >
            <Image
              src={getAssetURL("profile/blue.png")}
              alt="Profile Picture"
              width={35}
              height={35}
              priority
            />
            <span className="text-neutral-300">Sean</span>

            {/* Dropdown */}
            <div
              className={`${
                profileDropdownOpen ? "flex" : "hidden"
              } absolute inset-y-full mt-6 right-0 min-w-[150px] min-h-fit`}
            >
              {/* Square */}
              <div className="w-8 h-8 bg-neutral-100 absolute z-0 -top-2 left-1/2 rotate-45 -translate-x-2/4"></div>

              {/* TODO: Update links */}
              {/* List */}
              <ul className="text-sm flex flex-col gap-1 items-start py-2 px-3 bg-neutral-950 border-t-4 border-neutral-100 z-10">
                <li>Switch Profiles</li>
                <hr className="w-full self-center my-1" />
                <li>Account</li>
                <li>Help Centre</li>
                <li>
                  <button onClick={logOut}>Sign out of Netflix</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Navigation */}
      <nav
        className={`z-10 flex md:hidden fixed ${
          menuOpen ? "" : "-translate-x-full"
        } transition-all duration-100 ease-linear flex-col gap-2 bg-neutral-950 text-neutral-400 font-semibold overflow-y-scroll no-scrollbar`}
        style={{
          minHeight: "calc(100vh - 3.5rem)",
          maxHeight: "calc(100vh - 3.5rem)",
        }}
      >
        {/* Profile */}
        <div className="flex gap-2 pt-2 px-5 xs:px-8">
          <Image
            src={getAssetURL("profile/blue.png")}
            alt="Profile Picture"
            width={35}
            height={35}
            priority
          />

          {/* Name & option to switch profiles */}
          <div>
            {/* TODO: Replace 'Sean' with current profile name */}
            <p className="text-neutral-300 text-sm">Sean</p>
            <p className="text-xs font-normal">Switch Profiles</p>
          </div>
        </div>

        <ul className="px-5 xs:px-8 pb-2 [&>li]:py-0.5">
          <li>Account</li>
          <li>Help Centre</li>
          <li>
            <button onClick={logOut}>Sign out of Netflix</button>
          </li>
        </ul>

        <hr className="w-full border-neutral-700" />

        <ul className="[&>li]:px-5 [&>li]:xs:px-8 [&>li]:py-1">
          {tempGenres.map(({ title, href }, index) => (
            <li
              key={index}
              className={`${
                pathname === href &&
                "text-neutral-100 border-l-4 border-red-600"
              }`}
            >
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      <div
        onClick={toggleMenu}
        className={`${
          menuOpen ? "flex" : "hidden"
        } fixed w-full z-0 min-h-screen h-screen bg-neutral-950/50`}
      ></div>
    </>
  );
}
