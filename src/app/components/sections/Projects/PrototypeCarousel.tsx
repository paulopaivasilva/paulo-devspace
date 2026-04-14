import { PrototypeCard } from "./PrototypeCard";

export function PrototypeCarousel() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-semibold">
        Protótipos & Explorações
      </h3>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        <PrototypeCard
          title="Watch Movies"
          image="images/watch.png"
          link="https://watch-movie-front.vercel.app/home"
          tags={["React", "Next.js"]}
        />
      </div>
    </div>
  );
}