"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#020617] text-gray-400 px-6 py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT */}
          <div className="text-sm text-center md:text-left">
            <p className="text-gray-300 font-medium">
              © {new Date().getFullYear()} Kyoris Tech | Paulo Henrique Paiva da Silva
            </p>
            <span className="text-xs text-gray-500">
              Construindo experiências digitais com propósito.
            </span>
          </div>

          {/* NAV */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="#inicio" className="hover:text-white transition">
              Início
            </Link>
            <Link href="#trajetoria" className="hover:text-white transition">
              Trajetória
            </Link>
            <Link href="#projetos" className="hover:text-white transition">
              Projetos
            </Link>
            <Link href="#metodo" className="hover:text-white transition">
              Método
            </Link>
            <Link href="#contato" className="hover:text-white transition">
              Contato
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">

          <span>
            Desenvolvido com{" "}
            <span className="text-gray-300 font-medium">Next.js</span>
          </span>

          <span>
            Ilustrações por{" "}
            <a
              href="https://undraw.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              unDraw
            </a>
          </span>

        </div>
      </div>
    </footer>
  );
}