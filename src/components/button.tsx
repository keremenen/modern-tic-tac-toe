import React from "react";
import { cn } from "../lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-2xl bg-turquoise-base py-3 font-bold text-navy shadow-[0_8px_#118C87]",
        className,
      )}
    >
      {children}
    </button>
  );
}
