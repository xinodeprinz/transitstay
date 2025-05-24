import React, { useState } from "react";
import Button from "./button";
import { X } from "lucide-react";

const suggestionsList = [
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Laravel",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
];

interface AddInputProps {
  onClose: () => void;
}

const AddInput: React.FC<AddInputProps> = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      const filtered = suggestionsList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100);
  };

  return (
    <div className="fixed inset-0 z-40 h-screen bg-gradient-to-b from-zinc-500 from-20% to-orange-300/20">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 z-50 p-2 rounded-full bg-white/90 hover:bg-white transition shadow-md"
        aria-label="Close"
      >
        <X className="h-5 w-5 text-zinc-800" />
      </button>

      <form className="relative w-full max-w-xl top-[20%] mx-auto px-4 sm:px-0">
        <div className="flex w-full bg-white/90 rounded-full shadow-lg backdrop-blur-md overflow-hidden">
          <input
            type="text"
            placeholder="Type here..."
            className="flex-grow px-5 py-2 bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
            value={query}
            onChange={handleChange}
            onFocus={() => query && setShowSuggestions(true)}
            onBlur={handleBlur}
          />
          <Button
            text="Add"
            type="black"
            className="!bg-zinc-700 !border-0 !outline-none"
          />
        </div>

        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white shadow-md rounded-b-xl max-h-60 overflow-y-auto mt-1 text-sm">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-5 py-2 hover:bg-zinc-100 cursor-pointer"
                onMouseDown={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default AddInput;
