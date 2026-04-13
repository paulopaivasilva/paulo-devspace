"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/smoothScroll";

const items = [
  { label: "Início", id: "inicio" },
  { label: "Trajetória", id: "trajetoria" },
  { label: "Projetos", id: "projetos" },
  { label: "Método", id: "metodo" },
  { label: "Sobre", id: "sobre" },
  { label: "Contato", id: "contato" },
];

export function FloatingNavbar() {
  const [active, setActive] = useState("inicio");
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const [highlightStyle, setHighlightStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const cta = document.getElementById("hero-cta");
      const navbar = navbarRef.current;

      if (!cta || !navbar) return;

      const rect = cta.getBoundingClientRect();

      const ctaTop = rect.top + window.scrollY;
      const ctaBottom = ctaTop + rect.height;

      // 🔥 eixo Y (baixo → topo)
      const startY = ctaBottom + 50;
      const endY = 50;

      const progress = Math.min(scrollY / 400, 1);

      const newY = startY - (startY - endY) * progress;
      setOffsetY(newY);

      // 🔥 eixo X (esquerda → centro)
      const startX = rect.left;
      const centerX = window.innerWidth / 2;

      const navbarWidth = navbar.offsetWidth;

      const targetX = centerX - navbarWidth / 2;

      const newX = startX + (targetX - startX) * progress;
      setOffsetX(newX);

      // 🔥 seção ativa
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const sectionRect = section.getBoundingClientRect();

        if (sectionRect.top <= 160 && sectionRect.bottom >= 160) {
          setActive(item.id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // 🔥 highlight correto (X + Y)
  useEffect(() => {
    const index = items.findIndex((i) => i.id === active);
    const el = itemRefs.current[index];
    const container = containerRef.current;

    if (!el || !container) return;

    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    console.log(elRect.width, elRect.height)

    setHighlightStyle({
      width: `${elRect.width - 8}px`,
      height: `${elRect.height - 6}px`,
      left: `${elRect.left - containerRect.left + 4}px`,
      top: `${elRect.top - containerRect.top + 2}px`,
    });
  }, [active]);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.scrollY;

    smoothScrollTo(y, 700);
  };

  return (
    <div
      ref={navbarRef}
      className="fixed z-50 transition-all duration-300"
      style={{
        top: `${offsetY}px`,
        left: `${offsetX}px`,
      }}
    >
      <div
        ref={containerRef}
        className="relative flex items-center gap-2 rounded-full bg-[#1E293B] px-3 py-2 backdrop-blur-xl"
      >
        {/* highlight */}
        <div
          className="absolute rounded-full bg-[#D9D9D9] transition-all duration-300 ease-out"
          style={highlightStyle}
        />

        {items.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            onClick={() => scrollTo(item.id)}
            className={cn(
              "relative z-10 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer",
              active === item.id ? "text-[#1E293B]" : "text-white"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}