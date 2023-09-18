import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// TODO: Update links
const socialMedia = [
  {
    icon: FaFacebookF,
    url: "/browse",
  },
  {
    icon: FaInstagram,
    url: "/browse",
  },
  {
    icon: FaTwitter,
    url: "/browse",
  },
  {
    icon: FaYoutube,
    url: "/browse",
  },
];

// TODO: Update links
const links = [
  {
    title: "Audio Description",
    url: "/browse",
  },
  {
    title: "Help Centre",
    url: "/browse",
  },
  {
    title: "Gift Cards",
    url: "/browse",
  },
  {
    title: "Media Centre",
    url: "/browse",
  },
  {
    title: "Investor Relations",
    url: "/browse",
  },
  {
    title: "Jobs",
    url: "/browse",
  },
  {
    title: "Netflix Shop",
    url: "/browse",
  },
  {
    title: "Terms of Use",
    url: "/browse",
  },
  {
    title: "Privacy",
    url: "/browse",
  },
  {
    title: "Legal Notices",
    url: "/browse",
  },
  {
    title: "Cookie Preferences",
    url: "/browse",
  },
  {
    title: "Corporate Information",
    url: "/browse",
  },
  {
    title: "Contact Us",
    url: "/browse",
  },
  {
    title: "Advert Choices",
    url: "/browse",
  },
];

export default function DesktopFooter() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-6 px-5 xs:px-8 py-5 bg-neutral-900">
      {/* Social Media */}
      <ul className="flex items-center gap-4">
        {socialMedia.map(({ icon: Icon, url }, index) => (
          <li key={index}>
            <Link href={"/browse"}>
              <Icon size={24} className="text-neutral-100" />
            </Link>
          </li>
        ))}
      </ul>

      {/* Links */}
      <ul className="flex flex-col gap-2 xs:flex-row flex-wrap">
        {links.map(({ title, url }, index) => (
          <li key={index} className="min-w-[200px]">
            <Link href={url} className="text-sm hover:underline ">
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Service Code */}
      <button className="px-2 py-1 border border-neutral-500 text-sm w-fit">
        Service Code
      </button>

      {/* Year */}
      <p className="text-xs">© 1997-{currentYear} Netflix, Inc.</p>
    </footer>
  );
}
