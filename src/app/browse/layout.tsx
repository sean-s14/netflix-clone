import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed z-10 w-full">
        <Navigation />
      </div>
      {children}
      <Footer />
    </>
  );
}
