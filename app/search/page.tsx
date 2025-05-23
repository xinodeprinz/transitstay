import { Block, Button, Suggestion } from "@/components";
import Image from "next/image";
import { suggestions } from "./data";
import { PlusIcon } from "lucide-react";
import {
  Facebook,
  Instagram,
  LinkedInSquare,
  Settings,
  TikTok,
} from "@/components/icons";

export default function SearchPage() {
  return (
    <div className="h-screen relative overflow-y-auto w-full bg-gradient-to-b from-zinc-500 from-20% to-orange-300">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center pt-10">
          <Image width={100} height={100} alt="Logo" src={"/images/logo.png"} />
          <div className="flex items-center gap-3">
            <Button text="Sign in" type="black" />
            <Button text="Register" type="gray" />
          </div>
        </div>

        <div className="w-5/6 mx-auto mt-10">
          {/* Suggestions section */}
          <div className="flex items-center flex-wrap gap-3">
            <Button text="Delete all" type="black" />
            {suggestions.map((suggestion, index) => (
              <Suggestion key={index} text={suggestion} />
            ))}
            <Button
              text="Add new"
              type="white"
              icon={<PlusIcon size={16} className="mt-1" />}
            />
            <Button text="Generate Gallery" type="black" />
          </div>

          {/* Blocks - Masonry Layout */}
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-0 space-x-3 space-y-5 mt-10">
            {Array.from({ length: 300 }, (_, index) => (
              <Block key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Social media icons */}
      <div className="fixed right-10 top-1/2 space-y-6 -translate-y-1/2">
        <Instagram fillOpacity={0.6} className="cursor-pointer" />
        <Facebook className="cursor-pointer" />
        <LinkedInSquare className="cursor-pointer" />
        <TikTok className="cursor-pointer" />
        <Settings className="!mt-16 cursor-pointer" />
      </div>
    </div>
  );
}
