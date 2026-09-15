import Image from "next/image";

export function EditorialImage({ src, alt, className = "", priority = false, sizes = "(max-width: 900px) 100vw, 50vw" }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  return <div className={`editorial-image ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="editorial-image__asset" /><span className="editorial-image__wash" aria-hidden="true" /></div>;
}
