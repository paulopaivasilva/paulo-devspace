// components/trajectory/TrajectoryCard.tsx
import { cn } from "@/lib/utils";

interface TrajectoryCardProps {
  period: string;
  company: string;
  role: string;
  description: string;
  stack: string[];
  isActive?: boolean;
}

export function TrajectoryCard({
  period,
  company,
  role,
  description,
  stack,
  isActive,
}: TrajectoryCardProps) {
  return (
    <div
      className={cn(
        "min-w-75 md:min-w-90 max-w-90",
        "bg-white rounded-2xl border border-gray-200 p-6",
        "transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        isActive && "bg-blue-500 text-white shadow-xl scale-105",
        isActive ? "text-white" : "text-gray-900"
      )}
    >
      {/* período */}
      <span className="text-sm font-semibold text-gray-800">
        {period}
      </span>

      {/* empresa */}
      <h3 className="mt-3 text-2xl font-bold text-gray-900">
        {company}
      </h3>

      {/* cargo */}
      <p className="mt-1 text-base text-gray-500">
        {role}
      </p>

      {/* descrição */}
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* stack */}
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span
            key={tech}
            className={cn(
              "text-xs px-3 py-1 rounded-md bg-gray-100 text-blue-600 font-medium",
              index % 2 === 0
                ? "bg-blue-100 text-blue-600"
                : "bg-yellow-100 text-yellow-700"
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}