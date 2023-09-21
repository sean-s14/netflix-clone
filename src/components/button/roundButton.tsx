import React from "react";

export default function RoundButton({
  icon,
  onClick,
  bgColor = "bg-neutral-800 hover:bg-neutral-700",
  border = "border-none",
}: {
  icon: React.ReactNode;
  onClick: () => void;
  bgColor?: string;
  border?: string;
}) {
  return (
    <button
      className={
        "flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200" +
        " " +
        bgColor +
        " " +
        border
      }
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
