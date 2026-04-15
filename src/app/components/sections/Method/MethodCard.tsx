interface Props {
  number: string;
  title: string;
  description: string;
}

export function MethodCard({ number, title, description }: Props) {
  return (
    <div className="relative group rounded-2xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition duration-300">

      <span className="absolute top-4 right-4 text-5xl font-bold text-[#3B82F6]/20 group-hover:text-[#3B82F6]/40 transition blur-[0.2px]">
        {number}
      </span>

      <div className="flex flex-col gap-3 relative z-10">

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

      </div>
    </div>
  );
}