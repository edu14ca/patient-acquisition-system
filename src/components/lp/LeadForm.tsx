import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { trackLead } from "@/lib/fbpixel";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export const DIFICULDADES = [
  "Demora nas respostas aos pacientes.",
  "Pedidos de marcação que não avançam.",
  "Falta de organização no atendimento.",
  "Não sei onde estamos a perder oportunidades.",
];

const inputCls =
  "w-full h-12 rounded-lg bg-background border border-input px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-white transition-colors";

/** Número angolano: 9 dígitos a começar por 9, com ou sem +244. */
const normalizarWhatsApp = (v: string) => {
  const d = v.replace(/\D/g, "").replace(/^00/, "");
  const local = d.startsWith("244") ? d.slice(3) : d;
  return /^9\d{8}$/.test(local) ? local : null;
};

type Props = { id?: string; titulo: string; texto: string; compacto?: boolean };

const LeadForm = ({ id, titulo, texto, compacto = false }: Props) => {
  const [erro, setErro] = useState<string | null>(null);
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") || "").trim();
    const clinica = String(f.get("clinica") || "").trim();
    const whatsapp = normalizarWhatsApp(String(f.get("whatsapp") || ""));
    const dificuldade = String(f.get("dificuldade") || "");
    if (!nome || !clinica || !dificuldade) return setErro("Preencha os quatro campos.");
    if (!whatsapp) return setErro("Indique um número de WhatsApp angolano válido (9 dígitos, começa por 9).");
    setErro(null);
    trackLead();
    const msg =
      `Olá Raise, quero solicitar o teste de atendimento.\n\n` +
      `Responsável: ${nome}\nClínica: ${clinica}\nWhatsApp: +244 ${whatsapp}\nMaior dificuldade: ${dificuldade}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setEnviado(true);
  };

  return (
    <div id={id} className="rounded-xl border border-border bg-card p-6 md:p-8 scroll-mt-24">
      <h3 className={`font-semibold tracking-tight ${compacto ? "text-xl" : "text-2xl"}`}>{titulo}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{texto}</p>

      {enviado ? (
        <div className="mt-6 rounded-lg border border-border p-5 text-sm">
          <p className="flex items-center gap-2 font-medium">
            <Check className="h-4 w-4 text-primary" /> Pedido preparado.
          </p>
          <p className="mt-2 text-muted-foreground">
            Abrimos o WhatsApp com os seus dados. Carregue em <strong className="text-foreground">Enviar</strong> para o pedido
            chegar à nossa equipa. Se a janela não abriu,{" "}
            <button type="button" className="underline" onClick={() => setEnviado(false)}>tente de novo</button>.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-6 space-y-3">
          <label className="block">
            <span className="sr-only">Nome do responsável</span>
            <input name="nome" autoComplete="name" placeholder="Nome do responsável" className={inputCls} />
          </label>
          <label className="block">
            <span className="sr-only">Nome da clínica</span>
            <input name="clinica" autoComplete="organization" placeholder="Nome da clínica" className={inputCls} />
          </label>
          <label className="block">
            <span className="sr-only">Número de WhatsApp</span>
            <input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="Número de WhatsApp (9XX XXX XXX)" className={inputCls} />
          </label>
          <label className="block">
            <span className="sr-only">Qual é a maior dificuldade no atendimento?</span>
            <select name="dificuldade" defaultValue="" required className={`${inputCls} appearance-none invalid:text-muted-foreground/70`}>
              <option value="" disabled>Qual é a maior dificuldade no atendimento?</option>
              {DIFICULDADES.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
          {erro && <p className="text-sm text-primary" role="alert">{erro}</p>}
          <button type="submit" className="lp-btn w-full">
            <span className="roll">
              <span>Solicitar o meu teste de atendimento</span>
              <span aria-hidden>Solicitar o meu teste de atendimento</span>
            </span>
          </button>
          <p className="text-xs text-muted-foreground">
            Teste gratuito e sem compromisso. O envio do formulário não representa uma contratação.
          </p>
        </form>
      )}
    </div>
  );
};

export default LeadForm;
