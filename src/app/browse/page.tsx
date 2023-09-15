import Link from "next/link";
import MediaList from "@/components/mediaList";
import { tmdbBaseUrl, discoverMovieUrl, discoverTvUrl } from "@/constants/tmdb";

type Section = {
  title: string;
  url: string;
  mediaType?: "tv" | "movie";
};

const sections: Section[] = [
  {
    title: "Trending Now",
    url: "trending/all/week?language=en-US",
    mediaType: undefined,
  },
  {
    title: "Action in Movies",
    url: discoverMovieUrl + "&with_genres=28",
    mediaType: "movie",
  },
  {
    title: "Animation in TV",
    url: discoverTvUrl + "&with_genres=16",
    mediaType: "tv",
  },
  {
    title: "Fantasy in Movies",
    url: discoverMovieUrl + "&with_genres=14",
    mediaType: "movie",
  },
  {
    title: "Crime in TV",
    url: discoverTvUrl + "&with_genres=80",
    mediaType: "tv",
  },
  {
    title: "Science Fiction in Movies",
    url: discoverMovieUrl + "&with_genres=878",
    mediaType: "movie",
  },
  {
    title: "War & Politics in TV",
    url: discoverTvUrl + "&with_genres=10768",
    mediaType: "tv",
  },
];

export default async function BrowsePage() {
  return (
    <main className="flex flex-col bg-neutral-900 text-neutral-400">
      {/* Main Content */}
      <div className="flex flex-col gap-8 text-xl font-semibold py-2 xs:py-10 px-5 xs:px-8">
        {sections.map(({ title, url, mediaType }, index) => (
          <MediaList
            key={index}
            title={title}
            url={tmdbBaseUrl + url}
            mediaType={mediaType}
          />
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
