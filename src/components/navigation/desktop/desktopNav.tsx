"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  MdNotificationsNone,
  MdOutlineSwapHorizontalCircle,
} from "react-icons/md";
import { AiFillCaretDown, AiOutlineUser } from "react-icons/ai";
import { FiEdit2, FiHelpCircle } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { IconType } from "react-icons";

import getAssetURL from "@/utils/getAssetURL";
import DesktopDropdown from "@/components/dropdown/desktopDropdown";

const navLinks = [
  { title: "Home", href: "/browse" },
  { title: "Series", href: "/browse/genre/83" },
  { title: "Films", href: "/browse/genre/34399" },
  { title: "New & Popular", href: "/browse/genre/6548" },
  { title: "My List", href: "/browse/my-list" },
  { title: "Browse by Languages", href: "/browse/languages" },
];

// TODO: Update this for production
const devProfiles = [
  {
    name: "John",
    avatar: "profile/yellow.png",
  },
  {
    name: "Lily",
    avatar: "profile/red.png",
  },
  {
    name: "Children",
    avatar: "profile/children.png",
  },
];

type ProfileOption = {
  title: string;
  icon: IconType | null;
  href: string;
};

const devProfileOptions: ProfileOption[] = [
  {
    title: "Children",
    icon: null,
    href: "/browse",
  },
  {
    title: "Manage Profiles",
    icon: FiEdit2,
    href: "/browse",
  },
  {
    title: "Transfer Profile",
    icon: MdOutlineSwapHorizontalCircle,
    href: "/browse",
  },
  {
    title: "Account",
    icon: AiOutlineUser,
    href: "/browse",
  },
  {
    title: "Help Center",
    icon: FiHelpCircle,
    href: "/browse",
  },
];

export default function DesktopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  // Sticky Nav
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

  function toggleSearchBar() {
    setSearchBarOpen((val) => !val);
  }

  function logOut(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/");
  }

  const navBgColor = isSticky
    ? "bg-gradient-to-b from-neutral-950 to-neutral-950/50"
    : "bg-neutral-950";

  return (
    <nav
      ref={stickyRef}
      className={
        navBgColor +
        " w-full sticky top-0 py-2 px-6 z-10 flex items-center justify-between"
      }
    >
      {/* Logo & Nav Links */}
      <div className="flex items-center gap-4">
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

        {/* Nav Links (< 1024px) */}
        <div className="relative flex lg:hidden items-center gap-2 cursor-pointer [&>div]:hover:opacity-100 [&>div]:hover:pointer-events-auto">
          <Link href="/browse">Browse</Link>
          <AiFillCaretDown />

          {/* Browse Dropdown (< 1024px) */}
          <DesktopDropdown direction="-left-20">
            <ul className="flex-col items-center text-sm min-w-fit whitespace-nowrap text-neutral-400">
              {navLinks.map(({ title, href }) => (
                <li
                  key={title}
                  className="py-3 px-10 hover:bg-neutral-100/10 w-full text-center transition-colors duration-300"
                >
                  <Link
                    href={href}
                    className={`${pathname === href && "text-neutral-100"}`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </DesktopDropdown>
        </div>

        {/* TODO: Update Links */}
        {/* Nav Links (> 1024px) */}
        <div className="hidden lg:flex items-center gap-2 cursor-pointer">
          <ul className="flex items-center gap-5 text-sm">
            {navLinks.map(({ title, href }) => (
              <li key={title}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Search Bar & Notifications & Profile Management */}
      <div className="flex items-center gap-3 relative">
        {/* Search Bar */}
        <div
          className={
            `transition-all duration-500 ease-in-out ${
              searchBarOpen ? "w-80 lg:w-52 xl:w-96" : "w-10"
            } h-full border border-neutral-100 border-opacity-0 rounded-none hidden xs:flex items-center justify-center gap-2 py-1 ` +
            (searchBarOpen && "border-opacity-100 px-2 bg-neutral-950/90")
          }
        >
          {/* Search Icon */}
          <BiSearch
            size="26"
            className="cursor-pointer"
            onClick={toggleSearchBar}
          />

          {/* Search Input */}
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Titles, people, genres"
            className={`${
              searchBarOpen ? "w-80 lg:w-40 xl:w-96" : "w-0"
            } text-base lg:text-sm xl:text-base transition-all duration-500 ease-in-out bg-transparent border-none h-full text-neutral-100 outline-none z-10 `}
          />
        </div>

        {/* Link to Children Page */}
        <div className="hidden lg:flex">
          <Link href="/browse">Children</Link>
        </div>

        {/* Notifications */}
        <div className="cursor-pointer [&>div]:hover:opacity-100 [&>div]:hover:pointer-events-auto">
          <MdNotificationsNone size="30" />
          <DesktopDropdown direction="-right-3">
            {/* TODO: Update this */}
            <div className="p-2 whitespace-nowrap">Notifications here</div>
          </DesktopDropdown>
        </div>

        {/* Profile Management */}
        <div className="cursor-pointer [&>div]:hover:opacity-100 [&>div]:hover:pointer-events-auto">
          <div className="flex items-center gap-2 [&>svg]:hover:rotate-180">
            <Image
              src={getAssetURL("profile/blue.png")}
              alt="Profile Image"
              width={30}
              height={30}
              priority
              className="rounded"
            />
            <AiFillCaretDown className="hidden lg:flex transition-transform duration-300" />
          </div>
          <DesktopDropdown
            direction="right-0"
            topBorder={false}
            arrowPosition="right"
            arrowSpace={3}
          >
            <>
              <ul className="whitespace-nowrap min-w-[220px] text-neutral-50 flex flex-col gap-3 py-4">
                {/* Profile Selection */}
                {devProfiles.map(({ name, avatar }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 px-3 [&>span]:hover:underline"
                  >
                    <Image
                      src={getAssetURL(avatar)}
                      alt="Profile Image"
                      width={30}
                      height={30}
                      priority
                      className="rounded"
                    />
                    <span className="text-sm font-light">{name}</span>
                  </li>
                ))}

                <hr className="w-full border-neutral-400" />

                {/* Profile Options */}
                {devProfileOptions.map(({ title, icon: Icon, href }) => (
                  <li
                    key={title}
                    className="flex items-center gap-2 w-full px-3 [&>a]:hover:underline"
                  >
                    {Icon && <Icon size="28" className="" />}
                    <Link href={href} className="text-sm font-light">
                      {title}
                    </Link>
                  </li>
                ))}

                <hr className="w-full border-neutral-400" />

                {/* Sign Out */}
                <li className="w-full">
                  <button
                    className="text-sm font-light w-full h-full flex items-center justify-center hover:underline"
                    onClick={logOut}
                  >
                    Sign out of Netflix
                  </button>
                </li>
              </ul>
            </>
          </DesktopDropdown>
        </div>
      </div>
    </nav>
  );
}
