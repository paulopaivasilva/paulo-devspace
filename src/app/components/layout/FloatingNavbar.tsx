"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { Menu } from "lucide-react";

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
  const [highlightStyle, setHighlightStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const cta = document.getElementById("hero-cta");
      const navbar = navbarRef.current;

      if (!cta || !navbar) return;

      const rect = cta.getBoundingClientRect();

      const ctaTop = rect.top + window.scrollY;
      const ctaBottom = ctaTop + rect.height;

      const startY = ctaBottom + 50;
      const endY = 20;

      const progress = Math.min(scrollY / 400, 1);

      const newY = startY - (startY - endY) * progress;
      setOffsetY(newY);

      const startX = rect.left;
      const centerX = window.innerWidth / 2;

      const navbarWidth = navbar.offsetWidth;

      const targetX = centerX - navbarWidth / 2;

      const newX = startX + (targetX - startX) * progress;
      setOffsetX(newX);

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

  useEffect(() => {
    const index = items.findIndex((i) => i.id === active);
    const el = itemRefs.current[index];
    const container = containerRef.current;

    if (!el || !container) return;

    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    if (isMobile && isOpen) {
      const itemHeight = el.offsetHeight;
      const gap = 8;

      setHighlightStyle({
        width: `${containerRect.width - 12}px`,
        height: `${itemHeight - 6}px`,
        left: `6px`,
        top: `${index * (itemHeight + gap) + 15}px`,
      });

      return;
    }

    setHighlightStyle({
      width: `${elRect.width - 8}px`,
      height: `${elRect.height - 6}px`,
      left: `${elRect.left - containerRect.left + 4}px`,
      top: `${elRect.top - containerRect.top + 2}px`,
    });
  }, [active, isMobile, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;

      const target = event.target as Node;

      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.scrollY;

    smoothScrollTo(y, 40);
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
        className={cn(
          "relative flex items-center bg-[#1E293B] backdrop-blur-xl md:rounded-full rounded-3xl transition-all duration-300 overflow-hidden",
          isMobile
            ? isOpen
              ? "flex-col px-4 py-3 gap-2 items-center rounded-3xl"
              : "px-4 py-2 justify-center"
            : "px-3 py-2 gap-2"
        )}
      >
        {(!isMobile || isOpen) && (
          <div
            className="absolute rounded-full bg-[#D9D9D9] transition-all duration-300 ease-out"
            style={highlightStyle}
          />
        )}

        {isMobile && !isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-white text-base font-medium px-3 py-2"
          >
            <span>{items.find((i) => i.id === active)?.label}</span>
            <Menu size={18} />
          </button>
        )}

        {(!isMobile || isOpen) &&
          items.map((item, index) => (
            <button
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onClick={() => {
                scrollTo(item.id);
                if (isMobile) setIsOpen(false);
              }}
              className={cn(
                "relative z-10 px-4 py-2 text-base font-medium whitespace-nowrap transition-all duration-300 cursor-pointer",
                isMobile && isOpen && "w-full text-center",
                active === item.id
                  ? "text-[#1E293B]"
                  : "text-white"
              )}
            >
              {item.label}
            </button>
          ))}
      </div>
    </div>
  );
}