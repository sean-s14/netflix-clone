import { tmdbBaseUrl } from "@/constants/tmdb";
import MediaSlider from "@/components/mediaSlider";

type Response = {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN}`,
  },
  next: { revalidate: 60 * 60 * 24 * 7 },
};

async function getBackdropPosterUrl(
  movieId: number,
  mediaType: string
): Promise<string | null> {
  const res = await fetch(
    `${tmdbBaseUrl}${mediaType}/${movieId}/images?include_image_language=en%2C&language=en`,
    options
  );
  const data = await res.json();
  return data.backdrops[0]?.file_path || null;
}

export async function getMedia(url: string, mediaType?: "tv" | "movie") {
  try {
    const res = await fetch(url, options);
    const data: Response = await res.json();

    const dataWithPosterBackrops = await Promise.all(
      data.results.map(async (media: any) => {
        const backdrop_path = await getBackdropPosterUrl(
          media.id,
          media.media_type || mediaType
        );
        return { ...media, backdrop_path };
      })
    );

    const data2 = await Promise.resolve(
      dataWithPosterBackrops.filter((media: any) => media.backdrop_path)
    );

    return { data: data2, error: null };
  } catch (error) {
    console.error(error);
    return { data: [], error };
  }
}

export default async function MediaList({
  title,
  url,
  mediaType,
}: {
  title: string;
  url: string;
  mediaType?: "tv" | "movie";
}) {
  const { data, error } = await getMedia(url, mediaType);

  if (error) return <div>Error</div>;

  return (
    <div className="flex flex-col gap-1">
      {/* Title */}
      <h2 className="text-neutral-100">{title}</h2>

      {/* Movie Selection */}
      <MediaSlider data={data} />
    </div>
  );
}
