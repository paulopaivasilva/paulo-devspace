"use client";

import Image from "next/image";
import { useTypingWords } from "@/hooks/useRotatingWords";
import { Button } from "@/app/components/shared/Button"

export function Hero() {
  const word = useTypingWords();

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center px-10"
    >
      <div className="w-full max-w-7xl mx-auto flex items-start justify-between gap-10">

        <div className="max-w-4xl flex flex-col justify-between h-full gap-5">
          <h1 className="text-5xl font-bold leading-tight">
            ENGENHARIA{" "}
            <span className="text-[#D9D9D9]">FRONT-END</span> GUIADA POR{" "}
            <span className="text-[#D9D9D9]">{word}</span>.
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Transformo estratégia, UX e engenharia em sistemas digitais
            que realmente funcionam.
          </p>

          <div id="hero-cta" className="mt-8 flex gap-4">
            <Button>Explorar Projetos</Button>

            <Button variant="secondary">
              Entrar em Contato
            </Button>
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-end mt-16">
          <Image
            src="/images/dev.svg"
            alt="Ilustração desenvolvedor"
            width={420}
            height={420}
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}