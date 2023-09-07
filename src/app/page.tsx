import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/netflix.svg"
        alt="Netflix Logo"
        width={100}
        height={24}
        priority
        unoptimized
      />
    </main>
  );
}
