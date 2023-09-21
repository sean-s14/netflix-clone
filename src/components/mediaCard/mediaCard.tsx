import Image from "next/image";
import { tmdbImageBaseUrl } from "@/constants/tmdb";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import RoundButton from "@/components/button/roundButton";

export default function MediaCard({ media }: { media: any }) {
  return (
    <div
      id={`media-card-${media.id}`}
      className="transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:flex flex-col bg-neutral-950 rounded h-fit w-full z-50 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100"
    >
      {/* Poster */}
      <Image
        src={tmdbImageBaseUrl + "w780" + media.backdrop_path}
        alt="Movie Poster"
        width={250}
        height={140}
        priority
        className={`w-full h-fit`}
      />

      <div className="flex flex-col gap-4 w-full p-3 py-6 text-sm">
        {/* Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Play */}
            <RoundButton
              icon={<FaPlay size={16} className="fill-black" />}
              onClick={() => {}}
              bgColor="bg-neutral-100 hover:bg-neutral-200"
            />

            {/* Add/Remove from List */}
            <RoundButton
              icon={<AiOutlinePlus size={16} className="fill-neutral-100" />}
              onClick={() => {}}
              bgColor="bg-neutral-700 hover:bg-neutral-600"
              border="border-2 border-neutral-500 hover:border-neutral-100"
            />

            {/* Like */}
            <RoundButton
              icon={<AiFillLike size={16} className="fill-neutral-100" />}
              onClick={() => {}}
              bgColor="bg-neutral-700 hover:bg-neutral-600"
              border="border-2 border-neutral-500 hover:border-neutral-100"
            />
          </div>

          <div>
            {/* More Info */}
            <RoundButton
              icon={<BsChevronDown size={16} className="fill-neutral-100" />}
              onClick={() => {}}
              bgColor="bg-neutral-700 hover:bg-neutral-600"
              border="border-2 border-neutral-500 hover:border-neutral-100"
            />
          </div>
        </div>

        {/* Media Info */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Match Percentage */}
          <div className="text-green-600">
            {Math.floor(Math.random() * 20) + 80}% Match
          </div>

          {/* HD */}
          <div className="text-xs border border-neutral-100 px-2 rounded w-fit">
            HD
          </div>

          {/* Genres */}
        </div>
      </div>
    </div>
  );
}
