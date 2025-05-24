import { PlusIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { GradientCircle } from "../icons";
import { Article } from "@/lib/interface";

interface Props {
  article: Article;
}

const ArticleBlock = ({ article }: Props) => {
  return (
    <div className="mb-0 break-inside-avoid overflow-hidden">
      <div className="relative rounded-2xl p-1 bg-gradient-to-b from-violet-400 to-orange-100">
        <div className="w-full h-60 relative rounded-xl overflow-hidden">
          <Image
            fill
            alt={article.title}
            src={article.photo}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors duration-300 z-10" />
          <PlusIcon className="absolute bottom-3 right-3 bg-black text-white p-1 rounded-full size-6 z-20 cursor-pointer" />

          <GradientCircle
            key="gradient"
            className="absolute top-3 right-3 z-20 cursor-pointer"
          />

          <div className="absolute text-xs font-medium w-4/5 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white z-20">
            {article.title.substring(0, 60)}...
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-2">
          {article.user.photo && (
            <Image
              src={article.user.photo}
              width={100}
              height={100}
              alt={article.user.name}
              className="rounded-full size-7 object-cover"
            />
          )}
          <div className="text-black/60 text-xs font-medium">
            {article.user.name}
          </div>
        </div>
        <ArrowUpRight className="bg-black/40 text-white p-1 rounded-full" />
      </div>
    </div>
  );
};

export default ArticleBlock;
