import { useState } from "react";

const bars = [32, 44, 38, 56, 49, 68, 61, 74, 70, 86, 81, 94];

const rows = [
  { channel: "Meta Ads", leads: "412", cpl: "1.850 Kz", conv: "18%" },
  { channel: "Google Ads", leads: "136", cpl: "2.400 Kz", conv: "24%" },
  { channel: "Orgânico", leads: "88", cpl: "—", conv: "15%" },
  { channel: "Indicação", leads: "41", cpl: "—", conv: "37%" },
];

// Mockup ilustrativo do tipo de painel que a Raise monta; não são dados de clientes.
const DashboardPreview = () => {
  const [tab, setTab] = useState<"leads" | "vendas">("leads");

  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-5 md:p-6 animate-fade-up w-full max-w-[460px] lg:justify-self-end" style={{ animationDelay: "120ms" }}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Painel de crescimento</p>
          <p className="mt-1 text-sm text-muted-foreground">Últimos 12 meses</p>
        </div>
        <div className="flex rounded-full border border-border p-0.5 text-xs font-medium">
          {(["leads", "vendas"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1 rounded-full capitalize transition-smooth ${
                tab === t ? "bg-secondary text-foreground" : "text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 h-32 flex items-end gap-1.5 border-b border-white/15">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`dash-bar flex-1 rounded-t-sm transition-all duration-500 ${i === bars.length - 1 ? "bg-primary" : "bg-white/20"}`}
            style={{ height: `${tab === "leads" ? h : Math.max(12, h - 18 + (i % 3) * 6)}%`, ["--i" as string]: i }}
          />
        ))}
      </div>

      <table className="mt-5 w-full text-sm">
        <thead>
          <tr className="text-left">
            <th className="eyebrow font-normal pb-2">Canal</th>
            <th className="eyebrow font-normal pb-2 text-right">Leads</th>
            <th className="eyebrow font-normal pb-2 text-right">CPL</th>
            <th className="eyebrow font-normal pb-2 text-right">Conv.</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.channel} className="border-t border-white/10">
              <td className="py-2.5">{r.channel}</td>
              <td className="py-2.5 text-right tabular-nums">{r.leads}</td>
              <td className="py-2.5 text-right tabular-nums text-muted-foreground">{r.cpl}</td>
              <td className="py-2.5 text-right tabular-nums">{r.conv}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-foreground/50">Exemplo ilustrativo do painel que entregamos.</p>
    </div>
  );
};

export default DashboardPreview;
