"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { tmdbImageBaseUrl } from "@/constants/tmdb";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import MediaCard from "@/components/mediaCard/mediaCard";

const breakpoints = {
  // 2
  xs: 480, // 3
  sm: 640, // 3
  md: 768, // 4
  lg: 1024, // 5
  xl: 1280, // 6
  "2xl": 1536, // 7
};

function getVisibleImageCount() {
  let windowWidth = 0;
  if (typeof window !== "undefined") {
    windowWidth = window.innerWidth;
  }
  if (windowWidth > breakpoints["2xl"]) {
    return 7;
  } else if (windowWidth > breakpoints.xl) {
    return 6;
  } else if (windowWidth > breakpoints.lg) {
    return 5;
  } else if (windowWidth > breakpoints.md) {
    return 4;
  } else if (windowWidth > breakpoints.sm) {
    return 3;
  } else if (windowWidth > breakpoints.xs) {
    return 3;
  } else {
    return 2;
  }
}

// TODO: If slider is at one end, pressing the shift button should shift the slider to the other end
export default function MediaSlider({ data }: { data: any[] }) {
  const [translateX, setTranslateX] = useState(0);
  const [shifted, setShifted] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const firstImage = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const visibleImageCount = getVisibleImageCount();
    const newSlideCount = Math.ceil(data.length / visibleImageCount);
    setSlideCount(newSlideCount);
  }, [data]);

  function handleLeftShift() {
    const firstImageWidth =
      firstImage.current?.getBoundingClientRect().width || 0;

    const visibleImageCount = getVisibleImageCount();
    const totalWidth =
      firstImageWidth * visibleImageCount + 8 * visibleImageCount;

    setTranslateX((prev) => {
      const next = prev + totalWidth;
      if (prev === 0) {
        return 0;
      }
      setSlideNumber((prev) => prev - 1);
      if (next > 0) {
        return 0;
      }
      return next;
    });
    if (!shifted) setShifted(true);
  }

  function handleRightShift() {
    const firstImageWidth =
      firstImage.current?.getBoundingClientRect().width || 0;

    const imageCount = data.length;
    const sliderGaps = (imageCount - 1) * 8;
    const sliderWidth = firstImageWidth * imageCount + sliderGaps;

    const visibleImageCount = getVisibleImageCount();
    const totalWidth =
      firstImageWidth * visibleImageCount + 8 * visibleImageCount;

    setTranslateX((prev) => {
      const next = prev - totalWidth;
      if (next === -sliderWidth) {
        return -sliderWidth + totalWidth;
      }
      setSlideNumber((prev) => prev + 1);
      if (next < -sliderWidth + totalWidth) {
        return -sliderWidth + totalWidth;
      }
      return next;
    });

    if (!shifted) setShifted(true);
  }

  return (
    <div className="flex relative [&>#slide-count]:hover:flex">
      <div
        className={`flex w-full no-scrollbar overflow-y-visible overflow-x-clip select-none [&>#slide-count]:hover:flex [&>#right-shift]:hover:flex ${
          translateX < 0 && "[&>#left-shift]:hover:flex"
        }`}
      >
        {/* Left Shift */}
        <div
          id="left-shift"
          className={`hidden absolute left-0 h-full items-center justify-center cursor-pointer bg-neutral-950/50 z-10`}
          onClick={handleLeftShift}
        >
          <BsChevronCompactLeft size={50} className="fill-neutral-50" />
        </div>

        {/* Slider */}
        <div
          // TODO: Change to gap-2
          className={`flex gap-2 transition-transform duration-500 relative`}
          style={{
            transform: `translateX(${translateX}px)`,
            transitionTimingFunction: "cubic-bezier(0, 0, 0.58, 1)",
          }}
        >
          {data?.map((media, index) => (
            <div
              key={media.id}
              className={`group relative min-w-[45%] xs:min-w-[30%] md:min-w-[23%] lg:min-w-[18.5%] xl:min-w-[15.5%] 2xl:min-w-[13.3%]`}
            >
              <MediaCard media={media} />
              <Image
                ref={index === 0 ? firstImage : null}
                src={tmdbImageBaseUrl + "w780" + media.backdrop_path}
                alt="Movie Poster"
                width={250}
                height={140}
                priority
                className={`w-full [&+#media-card-${media.id}]:hover:flex`}
              />
            </div>
          ))}
        </div>

        {/* Right Shift */}
        <div
          id="right-shift"
          className="z-10 hidden absolute right-0 h-full items-center justify-center cursor-pointer bg-neutral-950/50"
          onClick={handleRightShift}
        >
          <BsChevronCompactRight size={50} className="fill-neutral-50" />
        </div>
      </div>

      {/* Slide Count */}
      <div
        id="slide-count"
        className="hidden absolute -top-4 right-20 items-center gap-0.5"
      >
        {Array.from(Array(slideCount).keys()).map((i) => (
          <div
            key={i}
            className={`w-3 h-0.5  ${
              slideNumber === i ? "bg-neutral-100" : "bg-neutral-100/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
