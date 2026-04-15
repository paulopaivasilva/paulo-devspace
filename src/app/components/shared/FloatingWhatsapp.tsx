"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export function FloatingWhatsapp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.6;

      if (window.scrollY > trigger) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="https://wa.me/5511948245488"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#25D366] text-[#0F172A]
        shadow-md
        transition-all duration-500 ease-out
        hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.35)]
        
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366]/20 blur-md animate-pulse" />

      <FaWhatsapp size={22} className="relative z-10" />
    </Link>
  );
}