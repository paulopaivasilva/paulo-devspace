"use client"

import { Hero } from "@/app/components/sections/Hero";
import { FloatingNavbar } from "@/app/components/layout/FloatingNavbar";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();

  return (
    <main className="bg-[#0F172A] text-white">
      <FloatingNavbar />

      <Hero />

      {/* próximas seções */}
      <section id="trajetoria" className="h-screen">Trajetória</section>
      <section id="projetos" className="h-screen">Projetos</section>
      <section id="metodo" className="h-screen">Método</section>
      <section id="sobre" className="h-screen">Sobre</section>
      <section id="contato" className="h-screen">Contato</section>
    </main>
  );
}