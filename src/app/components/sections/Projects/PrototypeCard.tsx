import Link from "next/link";

interface Props {
  title: string;
  description?: string;
  image: string;
  link?: string;
  tags?: string[];
}

export function PrototypeCard({
  title,
  description,
  image,
  link,
  tags = [],
}: Props) {
  return (
    <Link
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="min-w-85 h-55 md:min-w-95 md:h-60 relative group cursor-pointer rounded-2xl overflow-hidden"
    >
      {/* glow sutil */}
      <div className="absolute inset-0 bg-[#3B82F6]/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* imagem */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.06]"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-[2px] flex flex-col justify-end p-5 gap-2">
        
        {/* título */}
        <span className="text-white font-semibold text-base">
          {title}
        </span>

        {/* descrição */}
        {description && (
          <span className="text-gray-300 text-sm leading-snug line-clamp-2">
            {description}
          </span>
        )}

        {/* tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <span className="text-[#3B82F6] text-sm mt-1 opacity-80 group-hover:opacity-100 transition">
          Ver protótipo →
        </span>
      </div>
    </Link>
  );
}