"use client"

import { Hero } from "@/app/components/sections/Hero";
import { FloatingNavbar } from "@/app/components/layout/FloatingNavbar";
import { Trajectory } from "./components/sections/Trajectory";
import { ProjectsSection } from "./components/sections/Projects";
import { MethodSection } from "./components/sections/Method";
import { AboutSection } from "./components/sections/About";
import { ContactSection } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { FloatingWhatsapp } from "./components/shared/FloatingWhatsapp";

export default function Home() {
  return (
    <main className="bg-[#0F172A] text-white">
      <FloatingNavbar />
      <FloatingWhatsapp />

      <Hero />

      <Trajectory />

      <ProjectsSection />
      
      <MethodSection />
      
      <AboutSection />
      
      <ContactSection />

      <Footer />
    </main>
  );
}