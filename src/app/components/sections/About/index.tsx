"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative w-full overflow-hidden bg-linear-to-br from-[#F8FAFC] via-[#EEF5F9] to-[#F5F3FF] px-6 py-32 text-gray-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-40 w-40 rounded-full bg-[#3B82F6]/10 blur-3xl" />
        <div className="absolute right-[10%] top-32 h-52 w-52 rounded-full bg-[#A78BFA]/12 blur-3xl" />
        <div className="absolute bottom-10 left-[20%] h-44 w-44 rounded-full bg-[#F5DEA4]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Mais do que código,{" "}
            <span className="text-[#3B82F6]">construção de experiência</span>
          </h2>

          <p className="max-w-2xl text-gray-600">
            Desenvolvimento guiado por estratégia, produto e sensibilidade visual
            para transformar ideias em soluções digitais com presença, clareza e impacto real.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 m-auto h-80 w-[320px] rounded-full bg-[#3B82F6]/10 blur-3xl md:h-95 md:w-95" />
              <Image
                src="/images/about-undraw.svg"
                alt="Ilustração representando construção de soluções digitais"
                width={520}
                height={420}
                className="h-auto w-full max-w-125"
              />
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-4xl border border-[#DCE7F3] bg-white/70 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-gray-700">
                Acredito que um bom produto digital nasce do equilíbrio entre
                <span className="font-semibold text-gray-900"> tecnologia</span>,
                <span className="font-semibold text-gray-900"> experiência</span> e
                <span className="font-semibold text-gray-900"> intenção</span>.
                Meu foco não está apenas em desenvolver interfaces, mas em construir
                soluções que comuniquem valor, resolvam problemas reais e criem uma experiência mais forte para quem usa.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#DBEAFE] bg-[#EFF6FF] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="mb-3 inline-flex rounded-full bg-[#3B82F6]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                  Estratégia
                </span>
                <p className="text-sm leading-relaxed text-gray-700">
                  Entendimento de contexto, objetivo e direção antes de partir para a execução.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E9D5FF] bg-[#FAF5FF] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="mb-3 inline-flex rounded-full bg-[#A855F7]/10 px-3 py-1 text-xs font-semibold text-[#9333EA]">
                  Experiência
                </span>
                <p className="text-sm leading-relaxed text-gray-700">
                  Interfaces pensadas para ter clareza, fluidez e presença visual.
                </p>
              </div>

              <div className="rounded-2xl border border-[#FDE7B4] bg-[#FFF8E7] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="mb-3 inline-flex rounded-full bg-[#F59E0B]/10 px-3 py-1 text-xs font-semibold text-[#D97706]">
                  Construção
                </span>
                <p className="text-sm leading-relaxed text-gray-700">
                  Desenvolvimento com foco em consistência, performance e solução real.
                </p>
              </div>
            </div>

            <div className="rounded-4xl border border-white/60 bg-linear-to-r from-[#0F172A] to-[#1E293B] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                Ao longo da minha trajetória, participei de projetos que exigem mais do que execução técnica:
                exigem visão, adaptação e cuidado com a experiência final. É essa combinação que busco levar para cada solução que construo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}