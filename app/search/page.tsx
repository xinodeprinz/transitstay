"use client";

import React, { useEffect, useState } from "react";
import { Block, Button, SearchInput, Skeleton, Suggestion } from "@/components";
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
import { motion, AnimatePresence } from "framer-motion";

export default function SearchPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Threshold for moving search
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-500 from-20% to-orange-300 overflow-y-auto">
      {/* Fixed header when scrolled */}
      <div
        className={`w-full z-50 transition-all duration-300 ${
          scrolled ? "fixed top-0 bg-zinc-500 shadow" : ""
        }`}
      >
        <div className="w-11/12 max-w-7xl mx-auto py-4 flex justify-between items-center">
          <Image width={100} height={100} alt="Logo" src={"/images/logo.png"} />

          {/* Animated search input when scrolled */}
          <AnimatePresence>
            {scrolled && showSearch && (
              <motion.div
                layoutId="search"
                className="flex-1 px-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <SearchInput />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-3">
            <Button text="Sign in" type="black" />
            <Button text="Register" type="gray" />
          </div>
        </div>
      </div>

      {/* Default layout for search input */}
      {!scrolled && showSearch && (
        <motion.div
          layoutId="search"
          className="w-11/12 max-w-7xl mx-auto pt-10 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SearchInput />
        </motion.div>
      )}

      {/* Page content */}
      <div className={`w-11/12 max-w-7xl mx-auto ${scrolled ? "pt-36" : ""}`}>
        {loading ? (
          <Skeleton />
        ) : (
          <div className="lg:w-5/6 mx-auto mt-10">
            <div className="flex items-center justify-center flex-wrap gap-3">
              <Button text="Delete all" type="black" />
              {suggestions.map((suggestion, index) => (
                <Suggestion key={index} text={suggestion} />
              ))}
              {!showSearch && (
                <Button
                  text="Add new"
                  type="white"
                  icon={<PlusIcon size={16} className="mt-1" />}
                  onClick={() => setShowSearch(true)}
                />
              )}
              <Button text="Generate Gallery" type="black" />
            </div>

            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-0 space-x-3 space-y-5 mt-10">
              {Array.from({ length: 300 }, (_, index) => (
                <Block key={index} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Social sidebar */}
      <div className="fixed right-10 top-1/2 space-y-6 -translate-y-1/2 z-40">
        <Instagram fillOpacity={0.6} className="cursor-pointer" />
        <Facebook className="cursor-pointer" />
        <LinkedInSquare className="cursor-pointer" />
        <TikTok className="cursor-pointer" />
        <Settings className="!mt-16 cursor-pointer" />
      </div>
    </div>
  );
}
