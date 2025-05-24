import { XIcon } from "lucide-react";
import React, { useState } from "react";

interface Props {
  text: string;
  active?: boolean;
  updateQueries: (text: string, isActive: boolean) => void;
  onDelete: (text: string) => void;
}

const Suggestion = ({
  text,
  active = false,
  updateQueries,
  onDelete,
}: Props) => {
  const [isActive, setIsActive] = useState<boolean>(active);

  const handleActive = () => {
    const newVal = !isActive;
    setIsActive(newVal);
    updateQueries(text, newVal);
  };

  return (
    <div
      className={`text-nowrap cursor-pointer flex gap-2 items-center justify-between rounded-full border text-sm py-2 px-5 transition-all
        ${
          isActive
            ? "bg-white/50 text-white border-white"
            : "bg-transparent text-white border-white/50"
        }`}
      onClick={handleActive}
    >
      <span>{text}</span>
      <XIcon
        size={16}
        className={`mt-1 cursor-pointer transition-all
          ${
            isActive
              ? "hover:bg-zinc-200 hover:rounded-full hover:p-1"
              : "hover:bg-white hover:text-zinc-700 hover:rounded-full hover:p-1"
          }`}
        onClick={() => onDelete(text)}
      />
    </div>
  );
};

export default Suggestion;
