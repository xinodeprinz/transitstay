import { PlusIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Facebook, Instagram, LinkedIn, TikTok } from "../icons";
import { Social } from "@/lib/interface";

interface Props {
  social: Social;
}

const SocialBlock = ({ social }: Props) => {
  const heights = ["h-40", "h-48"];
  const height = heights[Math.floor(Math.random() * heights.length)];

  const Icon = () => {
    const iconClass = "absolute top-3 right-3 z-20 cursor-pointer";

    switch (social.platform) {
      case "linkedin":
        return <LinkedIn key="linkedin" className={iconClass} />;
      case "instagram":
        return <Instagram key="instagram" className={iconClass} />;
      case "facebook":
        return <Facebook key="facebook" className={iconClass} />;
      case "tiktok":
        return <TikTok key="tiktok" className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-0 break-inside-avoid overflow-hidden">
      <div className="relative rounded-2xl">
        <div className={`w-full ${height} relative rounded-xl overflow-hidden`}>
          <Image
            fill
            alt={social.type}
            src={social.photo}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors duration-300 z-10" />
          <PlusIcon className="absolute bottom-3 right-3 bg-black text-white p-1 rounded-full size-6 z-20 cursor-pointer" />

          <Icon />
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-2">
          {social.user.photo && (
            <Image
              src={social.user.photo}
              width={100}
              height={100}
              alt={social.user.name}
              className="rounded-full size-7 object-cover"
            />
          )}
          <div className="text-black/60 text-xs font-medium">
            {social.user.name}
          </div>
        </div>
        <ArrowUpRight className="bg-black/40 text-white p-1 rounded-full" />
      </div>
    </div>
  );
};

export default SocialBlock;
