import React from "react";

const SuggestionSkeleton = () => {
  return (
    <div className="text-nowrap flex gap-2 items-center justify-between rounded-full border border-white/20 py-2 px-5 bg-zinc-800 animate-pulse w-48 h-10">
      <div className="h-3 w-24 bg-zinc-600 rounded" />
      <div className="h-4 w-4 bg-zinc-600 rounded-full" />
    </div>
  );
};

export default SuggestionSkeleton;
