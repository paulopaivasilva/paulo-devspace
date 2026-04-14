import { cn } from "@/lib/utils";

interface TimelineProps {
  items: { period: string }[];
  activeIndex: number;
}

export function Timeline({ items, activeIndex }: TimelineProps) {
  return (
    <div className="relative">

      <div className="absolute top-1.5 left-0 h-0.5 bg-gray-300 z-0 w-full" />

      <div className="flex gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-75 md:min-w-90 flex flex-col items-start"
          >
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
                "text-xs transition-colors",
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