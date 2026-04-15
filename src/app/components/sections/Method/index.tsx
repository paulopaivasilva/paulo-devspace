"use client";

import { MethodCard } from "./MethodCard";

export function MethodSection() {
  return (
    <section
      id="metodo"
      className="w-full py-32 px-6 bg-linear-to-b from-[#EEF2F7] to-[#F8FAFC] text-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3B82F610,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Método que{" "}
            <span className="text-[#3B82F6]">
              transforma ideias em experiência
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl">
            Um processo pensado para entender, estruturar e construir soluções digitais com clareza, propósito e impacto real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <MethodCard
            number="01"
            title="Imersão"
            description="Compreensão do contexto, objetivos e necessidades reais antes de qualquer decisão."
          />

          <MethodCard
            number="02"
            title="Direção"
            description="Definição da estrutura, fluxo e experiência que guiarão o projeto."
          />

          <MethodCard
            number="03"
            title="Construção"
            description="Desenvolvimento com foco em design, performance e consistência."
          />

          <MethodCard
            number="04"
            title="Refinamento"
            description="Ajustes, validações e polimento para garantir clareza e impacto."
          />

        </div>
      </div>
    </section>
  );
}