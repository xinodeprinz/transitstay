import React from "react";
import Button from "./button";

const SearchInput = () => {
  return (
    <form className="w-full max-w-xl mx-auto flex items-center justify-center px-4 sm:px-0">
      <div className="flex w-full bg-white/90 rounded-full shadow-lg backdrop-blur-md overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 py-2 bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
        />
        <Button
          text="Add"
          type="black"
          className="!bg-zinc-700 !border-0 !outline-none"
        />
      </div>
    </form>
  );
};

export default SearchInput;
