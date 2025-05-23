import { XIcon } from "lucide-react";
import React from "react";

interface Props {
  text: string;
}

const Suggestion = ({ text }: Props) => {
  return (
    <div className="text-nowrap flex gap-2 items-center justify-between rounded-full border text-sm border-white/50 py-2 px-5 text-white bg-transparent">
      <span>{text}</span>
      <XIcon
        size={16}
        className="mt-1 hover:bg-white cursor-pointer hover:text-zinc-700 hover:size-5 hover:rounded-full hover:p-1"
      />
    </div>
  );
};

export default Suggestion;
