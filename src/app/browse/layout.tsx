import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
