"use client";

import Image from "next/image";
import { useTypingWords } from "@/hooks/useRotatingWords";
import { Button } from "@/app/components/shared/Button"
import Link from "next/link";

export function Hero() {
  const word = useTypingWords();

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-start md:items-center pt-24 md:pt-0"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-start justify-between gap-10">

        <div className="w-full max-w-4xl flex flex-col justify-between h-full gap-5">
          <h1 className="md:text-5xl text-[40px] font-bold leading-tight">
            ENGENHARIA{" "}
            <span className="text-[#D9D9D9]">FRONT-END</span> GUIADA POR{" "}<br className="md:hidden flex" />
            <span className="text-[#D9D9D9]">{word}</span>.
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Transformo estratégia, UX e engenharia em sistemas digitais
            que realmente funcionam.
          </p>

          <div className="flex md:hidden justify-center mt-4">
            <Image
              src="/images/dev.svg"
              alt="Ilustração desenvolvedor"
              width={160}
              height={160}
            />
          </div>

          <div id="hero-cta" className="mt-8 flex gap-4">
            <Link href="#projetos">
              <Button>Explorar Projetos</Button>
            </Link>

            <Link href="#contato">
              <Button variant="secondary">
                Entrar em Contato
              </Button>
            </Link>
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