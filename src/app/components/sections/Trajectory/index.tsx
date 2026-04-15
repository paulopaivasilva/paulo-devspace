"use client";

import { useEffect, useRef, useState } from "react";
import { TrajectoryCard } from "../../trajectory/TrajectoryCard";
import { Timeline } from "../../trajectory/Timeline";
import { dataTrajectory } from "@/data/trajectory";
import Image from "next/image";

export function Trajectory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timelineScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const cardsContainer = scrollRef.current;
    const timelineContainer = timelineScrollRef.current;
    if (!cardsContainer) return;

    const handleScroll = () => {
      const firstCard = cardsContainer.children[0] as HTMLElement | undefined;
      if (!firstCard) return;

      const styles = window.getComputedStyle(cardsContainer);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      const cardWidth = firstCard.offsetWidth + gap;

      const index = Math.round(cardsContainer.scrollLeft / (cardWidth || 1));
      setActiveIndex(Math.min(index, dataTrajectory.length - 1));

      if (timelineContainer) {
        const cardsMaxScroll =
          cardsContainer.scrollWidth - cardsContainer.clientWidth;

        const timelineMaxScroll =
          timelineContainer.scrollWidth - timelineContainer.clientWidth;

        const progress =
          cardsMaxScroll > 0 ? cardsContainer.scrollLeft / cardsMaxScroll : 0;

        timelineContainer.scrollLeft = progress * timelineMaxScroll;
      }
    };

    handleScroll();
    cardsContainer.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cardsContainer.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    let smoothProgress = 0;
    let targetProgress = 0;
    let rafId: number;

    const update = () => {
      const track = trackRef.current;

      if (isMobile) {
        if (track) {
          track.style.transform = "translateX(0px)";
        }
        return;
      }

      const section = document.getElementById("trajetoria");

      if (!section || !track) {
        rafId = requestAnimationFrame(update);
        return;
      }

      const rect = section.getBoundingClientRect();

      const start = rect.top;
      const end = rect.bottom - window.innerHeight;
      const rawProgress = -start / (end - start || 1);

      targetProgress = Math.min(Math.max(rawProgress, 0), 1);
      smoothProgress += (targetProgress - smoothProgress) * 0.08;

      const container = track.parentElement;
      if (!container) {
        rafId = requestAnimationFrame(update);
        return;
      }

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
  }, [isMobile]);

  return (
    <section
      id="trajetoria"
      className="relative bg-linear-to-b from-[#F5F5F5] to-[#EEF2F7] md:px-10 p-8"
    >
      <div
        className="relative"
        style={{ height: isMobile ? "auto" : `${dataTrajectory.length * 100}vh` }}
      >
        <div
          className={`
            ${isMobile ? "relative" : "sticky top-0"}
            md:h-screen min-h-screen
            flex items-start md:items-center
            overflow-hidden pt-14 md:pt-0
          `}
        >
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
              <div className="w-full flex mt-10 justify-center md:justify-start">
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
                    <div
                      ref={timelineScrollRef}
                      className={`
                        mb-6 md:mb-10
                        ${isMobile ? "overflow-x-auto pb-2 pointer-events-none scrollbar-hide" : "w-max"}
                      `}
                    >
                      <Timeline
                        items={dataTrajectory}
                        activeIndex={activeIndex}
                        isMobile={isMobile}
                      />
                    </div>

                    <div
                      ref={scrollRef}
                      className={`
                        flex w-full
                        ${isMobile ? "gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" : "gap-10"}
                      `}
                    >
                      {dataTrajectory.map((item, index) => (
                        <div
                          key={index}
                          className={`
                            ${isMobile ? "min-w-70 snap-start shrink-0" : ""}
                          `}
                        >
                          <TrajectoryCard {...item} />
                        </div>
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