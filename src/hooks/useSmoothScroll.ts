import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    let current = window.scrollY;
    let target = window.scrollY;

    const ease = 0.08;

    const update = () => {
      current += (target - current) * ease;

      window.scrollTo(0, current);

      requestAnimationFrame(update);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      target += e.deltaY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
}