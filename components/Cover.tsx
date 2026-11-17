const PALETTE = ["#2a2540", "#1e3a34", "#3b2a2a", "#2b2f3a", "#34302a", "#2a3a44"];
const BARS = [40, 70, 55, 90, 62];

export default function Cover({ index }: { index: number }) {
  return (
    <div className="cover" style={{ background: PALETTE[index % PALETTE.length] }} aria-hidden="true">
      <div className="cover-card">
        {BARS.map((h, n) => (
          <i key={n} style={{ height: `${h}%`, opacity: 1 - n * 0.1 }} />
        ))}
      </div>
    </div>
  );
}
