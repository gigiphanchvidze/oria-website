type VisualKind = "table" | "dinner" | "tea" | "gift" | "detail";

export function ConceptVisual({ kind, label }: { kind: VisualKind; label: string }) {
  return (
    <figure className={`concept-visual concept-visual--${kind}`} aria-label={`${label} — საკონცეფციო ვიზუალი`}>
      <div className="visual-grain" aria-hidden="true" />
      <div className="visual-shadow" aria-hidden="true" />
      <div className="plate plate--large" aria-hidden="true"><i /></div>
      <div className="plate plate--small" aria-hidden="true"><i /></div>
      <div className="cup" aria-hidden="true"><i /></div>
      <div className="leaf leaf--one" aria-hidden="true" />
      <div className="leaf leaf--two" aria-hidden="true" />
      <figcaption>{label}<span>საკონცეფციო ვიზუალი</span></figcaption>
    </figure>
  );
}
