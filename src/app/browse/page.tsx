import Link from "next/link";
import Image from "next/image";

const tempTitles = [
  "Oscar-winning Visually-striking Historical Movies",
  "Trending Now",
  "Continue Watching for Sean",
  "Dark Suspenseful Psychological TV Dramas",
  "Gory US TV Shows",
  "Teen TV Sci-Fi & Fantasy",
  "Binge-worthy European TV Suspense Dramas",
];

export default function BrowsePage() {
  return (
    <main className="flex flex-col bg-neutral-900 text-neutral-400">
      {/* Main Content */}
      <div className="flex flex-col gap-8 text-xl font-semibold py-2 xs:py-10 px-5 xs:px-8">
        {tempTitles.map((title, index) => (
          <div key={index} className="flex flex-col gap-1">
            {/* Title */}
            <h2>{title}</h2>

            {/* Movie Selection */}
            <div className="flex gap-2 overflow-auto no-scrollbar">
              {/* TODO: Replace with movies from TMDB */}
              {Array.from(Array(8).keys()).map((_, index) => (
                <Image
                  key={index}
                  src="/temp/images/1899.jpg"
                  alt="Movie Poster"
                  width={250}
                  height={140}
                  className="min-w-[45%] xs:min-w-[30%] md:min-w-[22%] lg:min-w-[18%] xl:min-w-[15%] 2xl:min-w-[12%]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* TODO: Update links */}
      {/* Footer */}
      <footer className="px-5 xs:px-8 py-5">
        <ul className="flex flex-wrap gap-2 gap-y-3 [&>li]:min-w-[160px]">
          <li>
            <Link href="/browse">Terms of Use</Link>
          </li>
          <li>
            <Link href="/browse">Privacy Statement</Link>
          </li>
          <li>
            <Link href="/browse">Cookie Preferences</Link>
          </li>
          <li>
            <Link href="/browse">Help Centre</Link>
          </li>
        </ul>
      </footer>
    </main>
  );
}
