"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiRestartLine } from "react-icons/ri";
import getAssetURL from "@/utils/getAssetURL";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  function toggleMute() {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  }

  function onEnded() {
    if (videoRef.current) {
      setIsPlaying(false);
    }
  }

  function togglePlay() {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }

  return (
    <div className="relative w-full h-fit max-h-screen">
      {/* Movie Details */}
      {!isPlaying && (
        <div className="z-20 flex flex-col gap-4 absolute left-10 bottom-20">
          {/* Logo */}
          <Image
            src={getAssetURL("browse/justice-league-logo.png")}
            alt="Logo"
            width={300}
            height={50}
            className="w-40 sm:w-52 md:w-64 lg:w-80"
          />

          {/* Description */}
          <p className="w-[500px] md:w-[700px] text-sm sm:text-base text-neutral-100">
            Determined to ensure Superman&#39;s ultimate sacrifice was not in
            vain, Bruce Wayne aligns forces with Diana Prince with plans to
            recruit a team of metahumans to protect the world from an
            approaching threat of catastrophic proportions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            {/* Play */}
            <button className="flex items-center justify-center gap-2 w-32 h-12 bg-neutral-100 hover:bg-neutral-100/80 rounded-md text-neutral-950 font-semibold text-lg">
              <FaPlay size={24} />
              <span>Play</span>
            </button>

            {/* More Info */}
            <button className="flex items-center justify-center gap-2 w-40 h-12 bg-neutral-500/80 hover:bg-neutral-500/50 rounded-md text-neutral-100 font-semibold text-lg">
              <AiOutlineInfoCircle size={30} />
              <span>More Info</span>
            </button>
          </div>
        </div>
      )}

      {/* TODO: Trim length of video and remove black bars */}
      {/* Video */}
      <video
        ref={videoRef}
        src={getAssetURL("browse/justice_league_trailer_1080.mp4")}
        width="460px"
        className="w-full z-0"
        autoPlay
        muted
        onEnded={onEnded}
      />

      {/* Mute/Unmute */}
      <div className="flex items-center z-20 absolute bottom-20 right-0 gap-4">
        <button
          className="bg-neutral-100/0 hover:bg-neutral-100/40 border-neutral-100 border rounded-full p-2 text-neutral-100"
          onClick={isPlaying ? toggleMute : togglePlay}
        >
          {isPlaying ? (
            isMuted ? (
              <VscMute className="text-2xl" />
            ) : (
              <VscUnmute className="text-2xl" />
            )
          ) : (
            <RiRestartLine className="text-2xl" />
          )}
        </button>

        {/* Age Rating */}
        <div className="flex items-center w-20 h-8 p-0.5 pl-2 border-l-2 border-neutral-100 bg-neutral-400/50">
          {/* Number */}
          <div className="flex items-center justify-center w-6 h-6 text-sm text-neutral-100 rounded-full bg-red-400 border border-neutral-100">
            15
          </div>
        </div>
      </div>
    </div>
  );
}
