import React from "react";

const BlockSkeleton = () => {
  const heights = ["h-40", "h-48", "h-60"];
  const height = heights[Math.floor(Math.random() * heights.length)];
  const isTallest = height === "h-60";

  return (
    <div className="mb-0 break-inside-avoid overflow-hidden">
      <div
        className={`relative rounded-2xl ${
          isTallest ? "p-1 bg-gradient-to-b from-violet-400 to-orange-100" : ""
        }`}
      >
        <div
          className={`w-full ${height} relative rounded-xl overflow-hidden bg-zinc-800 animate-pulse ${
            isTallest ? "rounded-[10px]" : ""
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute bottom-3 right-3 bg-zinc-600 p-1 rounded-full size-6 z-20" />
          {isTallest && (
            <div className="absolute text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-20">
              <div className="h-4 w-24 bg-zinc-700 rounded mb-1" />
              <div className="h-3 w-32 bg-zinc-700 rounded" />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-2">
          {isTallest && (
            <div className="rounded-full size-7 bg-zinc-700 animate-pulse" />
          )}
          <div className="h-4 w-20 bg-zinc-600 rounded animate-pulse" />
        </div>
        <div className="size-6 bg-zinc-700 p-1 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default BlockSkeleton;
