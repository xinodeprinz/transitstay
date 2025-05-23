import React, { JSX } from "react";

interface Props {
  type: "black" | "gray" | "white";
  text: string;
  icon?: JSX.Element;
}

const Button = ({ text, type, icon }: Props) => {
  const baseClasses =
    "rounded-full border text-sm border-white/50 py-2 px-5 flex gap-2 items-center justify-between transition-all duration-200 ease-in-out";

  const typeClasses =
    type === "black"
      ? "bg-zinc-700/30 text-zinc-100 hover:bg-zinc-800/60 hover:scale-105"
      : type === "gray"
      ? "bg-[rgb(255_255_255_/_0.06)] text-white hover:bg-[rgb(255_255_255_/_0.1)] hover:scale-105"
      : "bg-white/80 text-zinc-500 hover:bg-white hover:text-zinc-700 hover:scale-105";

  return (
    <button className={`${baseClasses} ${typeClasses}`}>
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default Button;
