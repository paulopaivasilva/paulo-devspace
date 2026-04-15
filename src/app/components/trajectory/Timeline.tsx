import { cn } from "@/lib/utils";

interface TimelineProps {
  items: { period: string }[];
  activeIndex: number;
  isMobile?: boolean;
}

export function Timeline({
  items,
  activeIndex,
  isMobile = false,
}: TimelineProps) {
  return (
    <div className={cn("relative", isMobile ? "min-w-max" : "w-max")}>
      <div className="absolute top-1.5 left-0 right-0 h-0.5 bg-gray-300 z-0" />

      <div className={cn("flex", isMobile ? "gap-4" : "gap-10")}>
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col",
              isMobile
                ? "min-w-70 items-start"
                : "min-w-90 items-start"
            )}>
            <div
              className={cn(
                "relative z-10 w-3 h-3 rounded-full mb-2 transition-all duration-300",
                index === activeIndex
                  ? "bg-blue-600 scale-125"
                  : index < activeIndex
                    ? "bg-gray-500"
                    : "bg-gray-300"
              )}
            />

            <span
              className={cn(
                "text-xs transition-colors whitespace-nowrap",
                index === activeIndex
                  ? "text-gray-900 font-medium"
                  : "text-gray-400"
              )}
            >
              {item.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}