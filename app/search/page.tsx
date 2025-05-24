"use client";

import React, { useEffect, useState } from "react";
import {
  AddInput,
  ArticleBlock,
  Button,
  Skeleton,
  SocialBlock,
  Suggestion,
} from "@/components";
import Image from "next/image";
import { PlusIcon } from "lucide-react";
import {
  Facebook,
  Instagram,
  LinkedInSquare,
  Settings,
  TikTok,
} from "@/components/icons";
import { getData } from "@/lib/data";
import { Article, Social } from "@/lib/interface";

export default function SearchPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [queries, setQueries] = useState<string[]>([]);
  const [data, setData] = useState<(Article | Social)[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);

        const items = await getData(queries);
        setData(items);
      } catch (error) {
        alert("An error occurred! Please refresh the page.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch only if at least one query is present
    if (queries.length > 0) {
      fetchItems();
    }
  }, [queries]);

  const updateQueries = (value: string) => {
    if (!queries.includes(value)) {
      setQueries((prevQueries) => [...prevQueries, value]);
    }
  };

  const updateSuggestions = (values: string[]) => {
    setSuggestions((prevSuggestions) => [...prevSuggestions, ...values]);
  };

  const updateQueriesFromSuggestion = (text: string, isActive: boolean) => {
    if (isActive) {
      setQueries((prevQueries) => [...prevQueries, text]);
    } else {
      const newQueries = queries.filter((q) => q !== text);
      setQueries(newQueries);
    }
  };

  const deleteSuggestion = (text: string) => {
    // Remove from queries
    const newQueries = queries.filter((q) => q !== text);
    setQueries(newQueries);

    // Remove from suggestions
    const newSuggestions = suggestions.filter((s) => s !== text);
    setSuggestions(newSuggestions);
  };

  const deleteAll = () => {
    setQueries([]);
    setSuggestions([]);
    setData([]);
  };

  return (
    <div className="relative h-screen bg-gradient-to-b from-zinc-500 from-20% to-orange-300 overflow-y-auto">
      {/* Fixed header when scrolled */}
      <div className="w-full z-30 transition-all duration-300 fixed top-0 bg-zinc-500">
        <div className="w-11/12 max-w-7xl mx-auto py-4 flex justify-between items-center">
          <Image width={100} height={100} alt="Logo" src={"/images/logo.png"} />

          <div className="flex items-center gap-3">
            <Button text="Sign in" type="black" />
            <Button text="Register" type="gray" />
          </div>
        </div>
      </div>

      <div className="mt-28" />

      {/* Add Input */}
      {showAdd && (
        <AddInput
          onClose={() => setShowAdd(false)}
          updateSuggestions={updateSuggestions}
          setQueries={updateQueries}
        />
      )}

      {/* Page content */}
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="lg:w-5/6 mx-auto mt-10">
          <div className="flex items-center justify-center flex-wrap gap-3">
            {data.length > 0 && (
              <Button
                text="Delete all"
                type="black"
                onClick={deleteAll}
                className="!bg-zinc-700/60 !opacity-60"
              />
            )}
            {suggestions.map((suggestion, index) => (
              <Suggestion
                key={index}
                text={suggestion}
                active={queries.includes(suggestion)}
                updateQueries={updateQueriesFromSuggestion}
                onDelete={deleteSuggestion}
              />
            ))}
            <Button
              text="Add new"
              type="white"
              icon={<PlusIcon size={16} className="mt-1" />}
              onClick={() => setShowAdd(true)}
            />
            {data.length > 0 && (
              <Button
                text="Generate Gallery"
                type="black"
                className="!bg-zinc-700"
              />
            )}
          </div>

          {/* Show when the page is empty */}
          {data.length <= 0 && !loading && (
            <div className="mt-12 text-center">
              <p className="font-serif text-lg italic text-amber-50/90 tracking-wide mb-2">
                "Begin your journey by adding the first entry"
              </p>
              <p className="text-sm text-amber-100/80 font-medium">
                Click{" "}
                <span className="font-bold text-amber-50 underline underline-offset-4">
                  Add new
                </span>{" "}
                above to continue
              </p>
            </div>
          )}
          {loading ? (
            <Skeleton />
          ) : (
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-0 space-x-3 space-y-5 mt-10">
              {data.map((item, key) => {
                if (item.type === "article") {
                  return <ArticleBlock key={key} article={item} />;
                } else {
                  return <SocialBlock key={key} social={item} />;
                }
              })}
            </div>
          )}
        </div>
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
