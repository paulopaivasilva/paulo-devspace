"use client";

import { MainProject } from "./MainProject";
import { PrototypeCarousel } from "./PrototypeCarousel";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="w-full py-32 px-6 bg-[#0F172A] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3B82F620,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Projetos que{" "}
            <span className="text-[#3B82F6]">geram resultado</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Experiências digitais criadas com foco em performance, design e impacto real.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          <MainProject
            title="Kyoris Tech"
            description="Plataforma e presença digital focada em conversão e posicionamento estratégico."
            tags={["React", "UX", "Branding"]}
            image="images/kyoris.png"
            link="https://kyoristech.com.br"
            reverse={false}
          />

          <MainProject
            title="Orm Intelligence"
            description="Sistema inteligente para análise de currículos com foco em performance e escala."
            tags={["AI", "React", "FastAPI"]}
            image="images/orm.png"
            link="https://orm-mvp.vercel.app"
            reverse={true}
          />

          <MainProject
            title="MEI Digital"
            description="Site estratégico para captação de clientes locais com foco em autoridade."
            tags={["Landing Page", "SEO", "Conversão"]}
            image="images/mei.png"
            link="https://meiportaldoempreendedor.com.br/"
            reverse={false}
          />
        </div>

        <PrototypeCarousel />
      </div>
    </section>
  );
}