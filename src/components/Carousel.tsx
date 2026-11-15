import { Children, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  children: React.ReactNode;
  /** Classes da grade usada a partir do breakpoint md (tablet/desktop) */
  gridClassName?: string;
  label: string;
};

/**
 * Celular (< md): carrossel com arraste lateral (scroll-snap), setas e indicadores.
 * Tablet/Desktop (>= md): grade normal.
 */
export default function Carousel({
  children,
  gridClassName = "md:grid-cols-2 lg:grid-cols-3",
  label,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);
  const total = items.length;

  // Descobre qual card está mais próximo do centro
  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateActive]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.max(0, Math.min(total - 1, index));
    const el = track.children[i] as HTMLElement | undefined;
    if (!el) return;
    track.scrollTo({
      left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  const arrowClass =
    "flex items-center justify-center w-11 h-11 rounded-full border transition-all " +
    "bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-violet-600 dark:text-violet-400 shadow-sm " +
    "active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed";

  return (
    <div role="region" aria-roledescription="carrossel" aria-label={label}>
      <div
        ref={trackRef}
        className={`relative flex md:grid ${gridClassName} gap-4 md:gap-6 lg:gap-8
          overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar
          -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 py-2 md:py-0`}
      >
        {items.map((child, i) => (
          <div
            key={i}
            className="shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center flex"
            aria-label={`${i + 1} de ${total}`}
          >
            <div className="w-full flex flex-col [&>*]:flex-1">{child}</div>
          </div>
        ))}
      </div>

      {/* Controles (só no celular) */}
      <div className="md:hidden flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          className={arrowClass}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para o item ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-violet-600" : "w-2 bg-gray-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === total - 1}
          className={arrowClass}
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
