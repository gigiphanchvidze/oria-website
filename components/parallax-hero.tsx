"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function ParallaxHero({ alt }: { alt: string }) {
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => { frame = 0; if (imageRef.current) imageRef.current.style.transform = `translate3d(0, ${Math.min(window.scrollY * 0.13, 90)}px, 0) scale(1.09)`; };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <div className="hero-media"><Image ref={imageRef} src="/images/oria-hero.webp" alt={alt} fill priority sizes="100vw" /></div>;
}
