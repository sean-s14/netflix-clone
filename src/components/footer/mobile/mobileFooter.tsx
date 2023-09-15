import Link from "next/link";

// TODO: Update links
const links = [
  {
    title: "Terms of Use",
    url: "/browse",
  },
  {
    title: "Privacy Statement",
    url: "/browse",
  },
  {
    title: "Cookie Preferences",
    url: "/browse",
  },
  {
    title: "Help Centre",
    url: "/browse",
  },
];

export default function MobileFooter() {
  return (
    <footer className="px-5 xs:px-8 py-5 bg-neutral-900">
      <ul className="flex flex-wrap gap-2 gap-y-3 [&>li]:min-w-[160px]">
        {links.map(({ title, url }, index) => (
          <li key={index}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
