import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg text-base font-bold transition-all duration-200";

  const variants = {
    primary: "bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white",
    secondary: "bg-[#E8D8B0] hover:bg-[#E8D8B0]/90 text-[#0F172A]",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}