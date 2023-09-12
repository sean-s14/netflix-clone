import MobileNav from "@/components/navigation/mobile/mobileNav";

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MobileNav />
      {children}
    </>
  );
}
