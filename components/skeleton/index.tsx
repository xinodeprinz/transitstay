import { BlockSkeleton, SuggestionSkeleton } from "@/components";

export default function Skeleton() {
  return (
    <div className="w-5/6 mx-auto mt-10">
      {/* Suggestions section */}
      {/* <div className="flex items-center justify-center flex-wrap gap-3">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
          <SuggestionSkeleton key={i} />
        ))}
      </div> */}

      {/* Blocks - Masonry Layout */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-0 space-x-3 space-y-5 mt-10">
        {Array.from({ length: 60 }, (_, index) => (
          <BlockSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
