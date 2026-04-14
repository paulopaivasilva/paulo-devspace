"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative w-full overflow-hidden bg-linear-to-b from-[#0F172A] via-[#111827] to-[#020617] px-6 py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-16 h-44 w-44 rounded-full bg-[#3B82F6]/20 blur-3xl" />
        <div className="absolute right-[12%] top-24 h-52 w-52 rounded-full bg-[#1D4ED8]/15 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-[#F5DEA4]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Vamos tirar sua ideia do papel{" "}
            <span className="text-[#3B82F6]">e transformar em algo real</span>
          </h2>

          <p className="max-w-2xl text-gray-300">
            Se você procura alguém para construir uma presença digital mais forte,
            desenvolver um projeto ou simplesmente trocar uma ideia sobre produto,
            tecnologia e experiência, estou por aqui.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="flex flex-col gap-6">
              <div>
                <span className="mb-3 inline-flex rounded-full bg-[#3B82F6]/10 px-3 py-1 text-sm font-medium text-[#93C5FD]">
                  Contato direto
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Aberto para novos projetos, parcerias e oportunidades
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
                Entre em contato pelas redes ou me chame no WhatsApp.
                A ideia é simples: entender seu momento, enxergar o problema com clareza
                e pensar em uma solução digital que faça sentido para você ou para o seu negócio.
              </p>

              <div>
                <Link
                  href="https://wa.me/5511948245488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-[#0F172A] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,211,102,0.35)]"
                >
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-[#111827]/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold text-white">
                Redes e presença digital
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                Você também pode acompanhar meu trabalho, projetos e trajetória
                através das redes.
              </p>

              <div className="mt-2 flex flex-col gap-4">
                <Link
                  href="https://instagram.com/paulopaivasilva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-[#E879F9]/30 hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-[#E1306C]/10 p-3 text-[#F472B6]">
                      <FaInstagram size={20} />
                    </div>
                    <p className="font-medium text-white">Instagram</p>
                  </div>

                  <span className="text-sm text-gray-500 transition group-hover:text-white">
                    Abrir →
                  </span>
                </Link>

                <Link
                  href="https://linkedin.com/in/paulohenriquepaiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-[#60A5FA]/30 hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-[#0A66C2]/10 p-3 text-[#60A5FA]">
                      <FaLinkedin size={20} />
                    </div>
                    <p className="font-medium text-white">LinkedIn</p>
                  </div>

                  <span className="text-sm text-gray-500 transition group-hover:text-white">
                    Abrir →
                  </span>
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php?id=61588619402430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-[#93C5FD]/30 hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-[#1877F2]/10 p-3 text-[#93C5FD]">
                      <FaFacebook size={20} />
                    </div>
                    <p className="font-medium text-white">Facebook</p>
                  </div>

                  <span className="text-sm text-gray-500 transition group-hover:text-white">
                    Abrir →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}