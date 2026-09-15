"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { copy, type Locale } from "@/lib/i18n";

const images = [
  "/images/process-design.webp",
  "/images/process-sample.webp",
  "/images/process-gold.webp",
  "/images/process-quality.webp",
];

export function ProcessStory({ locale }: { locale: Locale }) {
  const stages = copy[locale].home.stages;
  const [active, setActive] = useState(0);
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(Number((visible.target as HTMLElement).dataset.stage));
    }, { threshold: [0.35, 0.55, 0.75], rootMargin: "-20% 0px -25%" });
    stageRefs.current.forEach((node) => { if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-section" aria-labelledby="process-title">
      <div className="process-heading page-shell">
        <p className="eyebrow">{copy[locale].home.processKicker}</p>
        <h2 id="process-title">{copy[locale].home.processTitle}</h2>
        <p>{copy[locale].home.processIntro}</p>
      </div>
      <div className="process-story page-shell">
        <div className="process-visual" aria-live="polite">
          {images.map((src, index) => <Image key={src} src={src} alt={stages[index].title} fill sizes="(max-width: 900px) 100vw, 58vw" className={index === active ? "is-active" : ""} priority={index === 0} />)}
          <div className="process-progress" aria-hidden="true"><span style={{ height: `${((active + 1) / stages.length) * 100}%` }} /></div>
          <span className="process-counter" aria-hidden="true">0{active + 1} / 04</span>
        </div>
        <div className="process-stages">
          {stages.map((stage, index) => (
            <div className={`process-stage${active === index ? " is-active" : ""}`} data-stage={index} ref={(node) => { stageRefs.current[index] = node; }} key={stage.number}>
              <span>{stage.number}</span><h3>{stage.title}</h3><p>{stage.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
