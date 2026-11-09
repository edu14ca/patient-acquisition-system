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
    <div className="rounded-lg border border-border bg-card p-5 md:p-6 animate-fade-up" style={{ animationDelay: "120ms" }}>
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

      <div className="mt-6 h-36 flex items-end gap-1.5 border-b border-border">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t-sm transition-all duration-500 ${i === bars.length - 1 ? "bg-primary" : "bg-[#313131]"}`}
            style={{ height: `${tab === "leads" ? h : Math.max(12, h - 18 + (i % 3) * 6)}%` }}
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
            <tr key={r.channel} className="border-t border-border">
              <td className="py-2.5">{r.channel}</td>
              <td className="py-2.5 text-right tabular-nums">{r.leads}</td>
              <td className="py-2.5 text-right tabular-nums text-muted-foreground">{r.cpl}</td>
              <td className="py-2.5 text-right tabular-nums">{r.conv}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-[#7c7c7c]">Exemplo ilustrativo do painel que entregamos.</p>
    </div>
  );
};

export default DashboardPreview;
