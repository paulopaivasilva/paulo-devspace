import Link from "next/link";

interface Props {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  reverse?: boolean;
}

export function MainProject({
  title,
  description,
  tags,
  image,
  link,
  reverse = false,
}: Props) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? "md:flex-row-reverse" : ""
        }`}
    >
      <div className="w-full md:w-1/2 relative group">
        <div className="absolute inset-0 bg-[#3B82F6]/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

        <img
          src={image}
          alt={title}
          className="rounded-2xl border border-white/10 shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h3 className="text-3xl font-semibold">{title}</h3>

        <p className="text-gray-400 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <Link
            href={link}
            target="_blank"
            className="px-5 py-2 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] transition inline-block"
          >
            Ver projeto
          </Link>
        </div>
      </div>
    </div>
  );
}