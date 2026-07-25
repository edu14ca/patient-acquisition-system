const stats = [
  { value: "+312%", label: "Crescimento médio em 6 meses" },
  { value: "4 Pilares", label: "Aquisição · Engajamento · Monetização · Retenção" },
  { value: "0%", label: "Decisões no achismo" },
];

const StatsBand = () => {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          {/* faint bar-chart graphic */}
          <div className="pointer-events-none absolute right-6 bottom-0 flex items-end gap-2 opacity-[0.07]">
            {[40, 70, 55, 95, 120].map((h, i) => (
              <span key={i} className="w-6 rounded-t-sm bg-foreground" style={{ height: h }} />
            ))}
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {stats.map((s) => (
              <div key={s.value} className="px-6 py-6 md:py-8 text-center">
                <p className="font-display text-2xl md:text-3xl font-bold">{s.value}</p>
                <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBand;
