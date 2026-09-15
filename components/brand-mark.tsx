export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-mark brand-mark--compact" : "brand-mark"} aria-label="ÓRIA Fine China">
      <span className="brand-mark__name">ÓRIA</span>
      {!compact && <span className="brand-mark__sub">Fine China</span>}
    </span>
  );
}

export function Emblem() {
  return (
    <svg className="emblem" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30.5" stroke="currentColor" strokeWidth="1" />
      <path d="M32 13 35 26l13 3-13 3-3 13-3-13-13-3 13-3 3-13Z" fill="currentColor" opacity=".86" />
      <circle cx="32" cy="29" r="2.2" fill="currentColor" />
    </svg>
  );
}
