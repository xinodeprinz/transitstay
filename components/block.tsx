import { PlusIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { GradientCircle, Instagram, LinkedIn } from "./icons";

const Block = () => {
  const heights = ["h-40", "h-48", "h-60"];
  const height = heights[Math.floor(Math.random() * heights.length)];
  const isTallest = height === "h-60"; // Only this height shows extra UI

  const icons = [
    <LinkedIn
      key="linkedin"
      className="absolute top-3 right-3 z-20 cursor-pointer"
    />,
    <Instagram
      key="instagram"
      className="absolute top-3 right-3 z-20 cursor-pointer"
    />,
    isTallest && (
      <GradientCircle
        key="gradient"
        className="absolute top-3 right-3 z-20 cursor-pointer"
      />
    ),
  ].filter(Boolean); // Remove false entries

  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  return (
    <div className="mb-0 break-inside-avoid overflow-hidden">
      <div
        className={`relative rounded-2xl ${
          isTallest ? "p-1 bg-gradient-to-b from-violet-400 to-orange-100" : ""
        }`}
      >
        <div
          className={`w-full ${height} relative rounded-xl overflow-hidden ${
            isTallest ? "rounded-[10px]" : ""
          }`}
        >
          <Image
            fill
            alt="Gallery item"
            src={`/images/blocks/${Math.floor(Math.random() * 7) + 1}.jpg`}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors duration-300 z-10" />

          <PlusIcon className="absolute bottom-3 right-3 bg-black text-white p-1 rounded-full size-6 z-20 cursor-pointer" />

          {randomIcon}

          {isTallest && (
            <div className="absolute text-sm font-medium text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white z-20">
              <span className="text-balance text-lg">10</span> <br />{" "}
              places-to-be at night in London
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-2">
          <Image
            src={"/images/blocks/profile.png"}
            width={100}
            height={100}
            alt="Person"
            className="rounded-full size-7 object-cover"
          />
          <div className="text-black/60 text-xs font-medium">AlicaJoy_203</div>
        </div>
        <ArrowUpRight className="bg-black/40 text-white p-1 rounded-full" />
      </div>
    </div>
  );
};

export default Block;
