import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

export const Button = ({ size = "md", className, ...props }: ButtonProps) => (
  <button
    className={cn(
      "rounded font-inter font-semibold shadow transition focus:outline-none",
      size === "lg" ? "px-6 py-3 text-lg" : size === "md" ? "px-4 py-2 text-base" : "px-2 py-1 text-sm",
      className
    )}
    {...props}
  />
);
