"use client";

import { useEffect, useRef, useState } from "react";
import { TrajectoryCard } from "../../trajectory/TrajectoryCard";
import { Timeline } from "../../trajectory/Timeline";
import { dataTrajectory } from "@/data/trajectory";
import Image from "next/image";

export function Trajectory() {
  const [activeIndex, setActiveIndex] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let smoothProgress = 0;
    let targetProgress = 0;
    let rafId: number;

    const update = () => {
      const section = document.getElementById("trajetoria");
      const track = trackRef.current;

      if (!section || !track) {
        rafId = requestAnimationFrame(update);
        return;
      }

      const rect = section.getBoundingClientRect();

      const start = rect.top;
      const end = rect.bottom - window.innerHeight;

      const rawProgress = -start / (end - start);

      targetProgress = Math.min(Math.max(rawProgress, 0), 1);

      smoothProgress += (targetProgress - smoothProgress) * 0.08;

      const container = track.parentElement;
      if (!container) return;

      const BUFFER = 200;

      const maxTranslate =
        track.scrollWidth - container.clientWidth + BUFFER;

      const translateX = smoothProgress * maxTranslate;

      track.style.transform = `translateX(-${translateX}px)`;

      const index = Math.floor(targetProgress * dataTrajectory.length);
      setActiveIndex(Math.min(index, dataTrajectory.length - 1));

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="trajetoria" className="relative bg-linear-to-b from-[#F5F5F5] to-[#EEF2F7] md:px-10 p-8">

      <div
        className="relative"
        style={{ height: `${dataTrajectory.length * 100}vh` }}
      >

        <div className="sticky top-0 h-screen flex items-start md:items-center overflow-hidden pt-16 md:pt-0">

          <div className="w-full max-w-7xl mx-auto">

            <div className="flex flex-col gap-4 mt-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Trajetória que{" "}
                <span className="text-[#3B82F6]">constrói experiência</span>
              </h2>

              <p className="text-gray-600 max-w-2xl">
                Uma jornada marcada por evolução constante, desafios reais e construção de soluções digitais.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center">

              <div className="w-full flex">
                <Image
                  src="/images/trajectory.svg"
                  alt="Ilustração trajetória profissional"
                  width={300}
                  height={300}
                  className="w-64 md:w-full max-w-75 opacity-80"
                />
              </div>

              <div className="w-full md:w-2/3">

                <div className="overflow-hidden p-2">
                  <div ref={trackRef} className="will-change-transform">

                    <div className="mb-10 w-max">
                      <Timeline items={dataTrajectory} activeIndex={activeIndex} />
                    </div>

                    <div className="flex gap-6">
                      {dataTrajectory.map((item, index) => (
                        <TrajectoryCard key={index} {...item} />
                      ))}
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}