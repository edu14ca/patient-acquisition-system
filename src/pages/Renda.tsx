import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import VSLPlayer from "@/components/raise/VSLPlayer";

const CHECKOUT_URL = "https://pay.kursinha.com/c/6a04dbae59995e700cb427c0";
const VSL_URL =
  "https://lrrgcweneerjnfdczfim.supabase.co/storage/v1/object/sign/VSL/IMG_0312vsl.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNzU5ZWVmYy1lMmJiLTQ3ZWEtYWU0Ni0wMjZmOTgxMzkxZGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWU0wvSU1HXzAzMTJ2c2wubXA0IiwiaWF0IjoxNzc5MDYxMDE3LCJleHAiOjE4MTA1OTcwMTd9.vIDa-UYA6qnSUfWxHUotj7YN4Qs2QNiYoCJD5xzDnhM";
const REVEAL_DELAY_MS = 60_000;

const CTA = ({
  label = "Quero começar o Método R.E.N.D.A.",
  className = "",
}: {
  label?: string;
  className?: string;
}) => (
  <a
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-[#d4145a] text-white font-bold px-8 py-5 rounded-xl hover:bg-[#b30f4d] transition-all hover:-translate-y-0.5 shadow-lg text-base md:text-lg text-center ${className}`}
  >
    {label} <ArrowRight className="w-5 h-5 shrink-0" />
  </a>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 mb-6">
    {children}
  </h2>
);

const Renda = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), REVEAL_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* HERO - VSL */}
      <section className="bg-gradient-to-b from-neutral-50 to-white pt-10 md:pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#d4145a] mb-4">
            Método R.E.N.D.A. · Estética · Angola
          </p>
          <h1 className="font-serif text-2xl md:text-5xl lg:text-6xl font-bold text-center leading-[1.1] tracking-tight mb-4">
            Você já sabe fazer.{" "}
            <span className="block text-[#d4145a]">
              Mas ainda não sabe transformar isso em dinheiro.
            </span>
          </h1>
          <p className="text-center text-sm md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Assista o vídeo abaixo até ao fim. Vais perceber porque é que algumas profissionais lotam a agenda — e outras continuam a recomeçar do zero todas as semanas.
          </p>

          <VSLPlayer src={VSL_URL} />

          <p className="text-center text-sm text-neutral-500 mt-4">
            ▶ Vê o vídeo com som. A oferta aparece em baixo após alguns minutos.
          </p>

          {revealed && (
            <div className="mt-8 flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full max-w-[400px] px-6 py-4 bg-[#d4145a] hover:bg-[#b01049] text-white font-bold text-base md:text-lg rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              >
                Quero garantir o meu acesso agora →
              </a>
              <p className="text-xs text-neutral-500">Acesso imediato · Pagamento único</p>
            </div>
          )}
        </div>
      </section>

      {/* SCROLL REVEAL CONTENT */}
      <div
        className={`transition-all duration-700 ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none max-h-[40vh] overflow-hidden"
        }`}
      >
        {!revealed && (
          <div className="text-center py-16">
            <p className="text-neutral-400 text-sm animate-pulse">
              Continua a ver o vídeo...
            </p>
          </div>
        )}

        {/* PARE DE TRABALHAR NO VAZIO */}
        <section className="bg-neutral-900 text-white py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-[#ff3d7f] text-sm font-bold uppercase tracking-wider mb-4">
              ❌ Pare agora
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8">
              Pare de trabalhar no vazio.
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-neutral-200 leading-relaxed">
              <p>Pare de fazer maquilhagem, cabelo, unhas ou estética…</p>
              <p>e no fim do mês continuar sem dinheiro previsível.</p>
              <p>Pare de depender de indicação.</p>
              <p>Pare de baixar preço para não perder cliente.</p>
              <p>Pare de postar no Instagram e esperar milagres.</p>
            </div>
          </div>
        </section>

        {/* O ERRO Nº1 */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-[#d4145a] text-sm font-bold uppercase tracking-wider mb-4">
              O erro nº1
            </p>
            <SectionTitle>
              A diferença não é talento. É estrutura.
            </SectionTitle>
            <div className="space-y-5 text-lg text-neutral-700 leading-relaxed">
              <p>Enquanto algumas conseguem lotar a agenda…</p>
              <p>outras estão sempre a recomeçar do zero.</p>
              <p className="font-bold text-neutral-900">
                A diferença não é talento. Não é sorte. E não é o curso que fizeram.
              </p>
              <p className="text-2xl md:text-3xl font-serif font-bold text-[#d4145a]">
                É estrutura.
              </p>
            </div>
          </div>
        </section>

        {/* RECONHECIMENTO */}
        <section className="py-20 md:py-28 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-[#d4145a] text-sm font-bold uppercase tracking-wider mb-4">
              Identificação
            </p>
            <SectionTitle>Se isto é a tua realidade, presta atenção</SectionTitle>

            <div className="bg-white rounded-2xl p-8 md:p-10 mb-6 border border-neutral-200">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Você sabe fazer. Já praticou. Já treinou. Mas clientes reais — que pagam, voltam e indicam — ainda não são consistentes.
              </p>
              <p className="text-xl font-serif italic mt-4 text-neutral-900">
                E você começa a pensar: <span className="text-[#d4145a]">“Será que o problema sou eu?”</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 border border-neutral-200">
              <p className="text-lg text-neutral-700 leading-relaxed mb-3">
                Você até trabalha. Mas o dinheiro não acompanha o esforço.
              </p>
              <ul className="space-y-2 text-neutral-700 text-lg">
                <li>· Baixas preço para não perder cliente.</li>
                <li>· Dependes de indicação.</li>
                <li>· Postas no Instagram sem resultado.</li>
                <li>· Sentes que recomeças do zero toda semana.</li>
              </ul>
              <p className="mt-6 text-xl font-bold text-neutral-900">
                O problema não é esforço. <span className="text-[#d4145a]">É falta de estrutura.</span>
              </p>
            </div>
          </div>
        </section>

        {/* MESMO QUE - QUALIFICAÇÃO */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <SectionTitle>
              Este método foi criado para o teu ponto de partida
            </SectionTitle>
            <p className="text-lg text-neutral-700 mb-8">Mesmo que:</p>
            <ul className="space-y-4 text-lg text-neutral-700">
              {[
                "tenhas poucos seguidores nas redes sociais",
                "nunca tenhas tido nenhum cliente",
                "aches que ainda não estás pronta para atender mais clientes",
                "aches que o mercado está demasiado competitivo",
                "acredites que aumentar o preço vai te fazer perder os poucos clientes",
                "sintas que não há mercado para os teus serviços",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="w-6 h-6 text-[#d4145a] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-2xl md:text-3xl font-serif font-bold text-neutral-900">
              O problema não és tu. <span className="text-[#d4145a]">É o sistema que nunca te ensinaram.</span>
            </p>
          </div>
        </section>

        {/* DOR + VERDADE */}
        <section className="py-20 md:py-28 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-[#d4145a] text-sm font-bold uppercase tracking-wider mb-4">
              A verdade
            </p>
            <SectionTitle>
              Não precisas de mais técnica. Precisas de um sistema.
            </SectionTitle>
            <p className="text-lg text-neutral-700 mb-6">
              Deixa-me mostrar-te o que ninguém te explicou:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Como conseguir clientes sem depender de sorte",
                "Como fazer uma cliente voltar sem implorar",
                "Como cobrar sem medo de perder pessoas",
                "Como transformar WhatsApp em agenda cheia",
                "Como usar Instagram para gerar procura real",
                "Como saber quanto realmente estás a ganhar no mês",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-lg text-neutral-800">
                  <Check className="w-6 h-6 text-[#d4145a] shrink-0 mt-1" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-2xl font-serif font-bold text-neutral-900">
              Não é falta de talento. <span className="text-[#d4145a]">É falta de sistema.</span>
            </p>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <SectionTitle>O que muda quando tens um método</SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {[
                "Sais da dependência de indicação e passas a ter clientes consistentes",
                "Cobras com segurança sem medo de perder clientes",
                "Crias clientes que voltam com frequência",
                "Transformas WhatsApp num sistema de agendamento",
                "Sabes exactamente quanto entrou e quanto saiu no mês",
                "Passas a tratar o teu trabalho como um negócio real",
              ].map((b) => (
                <div
                  key={b}
                  className="bg-neutral-50 rounded-xl p-6 border-l-4 border-[#d4145a]"
                >
                  <p className="text-base md:text-lg text-neutral-800 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUTO - R.E.N.D.A. */}
        <section className="py-20 md:py-28 bg-neutral-900 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-[#ff3d7f] text-sm font-bold uppercase tracking-wider mb-4 text-center">
              O método
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-6 leading-tight">
              Método R.E.N.D.A.
            </h2>
            <p className="text-center text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-14 leading-relaxed">
              Um sistema simples para profissionais da estética em Angola saírem do improviso e começarem a organizar, atrair e monetizar os seus serviços.
            </p>

            <div className="space-y-6">
              {[
                {
                  letter: "R",
                  title: "Reconhecimento",
                  desc: "Deixas de ser “mais uma” e passas a ser percebida como profissional de valor.",
                },
                {
                  letter: "E",
                  title: "Estrutura",
                  desc: "Organizas clientes, agenda, dinheiro e rotina para parar de perder vendas sem perceber.",
                },
                {
                  letter: "N",
                  title: "Nome",
                  desc: "Constróis autoridade e reputação mesmo sem salão ou grande estrutura.",
                },
                {
                  letter: "D",
                  title: "Divulgação",
                  desc: "Transformas Instagram e WhatsApp em ferramentas reais de atracção de clientes.",
                },
                {
                  letter: "A",
                  title: "Aumento",
                  desc: "Aprendes a cobrar melhor e aumentar o valor por cliente sem depender de volume.",
                },
              ].map((it) => (
                <div
                  key={it.letter}
                  className="flex gap-6 items-start bg-neutral-800/60 rounded-2xl p-6 md:p-8 border border-neutral-700"
                >
                  <div className="font-serif text-5xl md:text-6xl font-bold text-[#ff3d7f] leading-none shrink-0 w-14 text-center">
                    {it.letter}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">{it.title}</h3>
                    <p className="text-neutral-300 text-base md:text-lg leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POSICIONAMENTO */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <SectionTitle>
              Feito para quem já sabe fazer — mas ainda não sabe ganhar com isso
            </SectionTitle>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-4">
              O Método R.E.N.D.A. não ensina técnica.
            </p>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
              Ele organiza a parte que transforma talento em dinheiro.
            </p>
            <p className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
              Não precisas de mais informação. <span className="text-[#d4145a]">Precisas de direcção.</span>
            </p>
          </div>
        </section>

        {/* OFERTA */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#d4145a] shadow-2xl">
              <p className="text-[#d4145a] text-sm font-bold uppercase tracking-wider mb-4 text-center">
                A oferta
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-8 leading-tight">
                Tudo o que está incluído
              </h2>
              <ul className="space-y-4 mb-10">
                {[
                  "Ebook prático do Método R.E.N.D.A.",
                  "Estrutura de negócio para estética",
                  "Sistema de captação e fidelização de clientes",
                  "Organização de agenda e gestão de dinheiro",
                  "Estratégias práticas de WhatsApp e Instagram",
                  "Plano de acção simples para os primeiros 30 dias",
                ].map((b) => (
                  <li key={b} className="flex gap-3 text-lg text-neutral-800">
                    <Check className="w-6 h-6 text-[#d4145a] shrink-0 mt-1" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <CTA className="w-full md:w-auto" />
                <p className="mt-4 text-sm text-neutral-500">
                  Acesso imediato após pagamento
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 md:py-28 bg-neutral-900 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              Daqui a 30 dias, vais estar no mesmo lugar…{" "}
              <span className="text-[#ff3d7f]">ou num lugar diferente.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              O tempo vai passar de qualquer forma. A diferença não é talento. É método.
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
              <div className="bg-neutral-800/60 rounded-xl p-6 border border-neutral-700">
                <p className="font-bold text-[#ff3d7f] mb-3">Com método</p>
                <ul className="space-y-1 text-neutral-200 text-sm">
                  <li>· Clientes previsíveis</li>
                  <li>· Cobras com segurança</li>
                  <li>· Sabes quanto ganhas</li>
                  <li>· Não recomeças toda semana</li>
                </ul>
              </div>
              <div className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-800">
                <p className="font-bold text-neutral-400 mb-3">Sem método</p>
                <ul className="space-y-1 text-neutral-400 text-sm">
                  <li>· Continuas no improviso</li>
                  <li>· Dependes de sorte</li>
                  <li>· Baixas preço por medo</li>
                  <li>· Recomeças do zero</li>
                </ul>
              </div>
            </div>

            <CTA label="Quero começar o meu Método R.E.N.D.A. agora" />
            <p className="mt-6 text-sm text-neutral-400">
              Não é sobre trabalhar mais. É sobre ganhar melhor com o que já sabes fazer.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <SectionTitle>Perguntas frequentes</SectionTitle>
            <Accordion type="single" collapsible className="space-y-3 mt-8">
              {[
                {
                  q: "Isto serve para quem nunca teve clientes?",
                  a: "Sim. O método foi criado exactamente para isso: sair do zero e começar a criar procura real.",
                },
                {
                  q: "Preciso de salão?",
                  a: "Não. Funciona para quem atende em casa, a domicílio ou em espaço próprio.",
                },
                {
                  q: "Vou aprender técnica?",
                  a: "Não. Tu já precisas de saber fazer. Aqui aprendes a ganhar com isso.",
                },
                {
                  q: "E se eu tiver medo de aumentar preços?",
                  a: "O método inclui exactamente como cobrar com segurança e sem perder clientes.",
                },
                {
                  q: "Resultados em 30 dias são garantidos?",
                  a: "Não existe garantia de resultado individual. Mas existe um sistema claro que te mostra o caminho certo a seguir.",
                },
              ].map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-neutral-200 px-6 bg-neutral-50"
                >
                  <AccordionTrigger className="font-serif text-lg md:text-xl font-bold text-left hover:no-underline text-neutral-900">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-700 leading-relaxed text-base pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* RODAPÉ */}
        <footer className="py-12 bg-neutral-100 border-t border-neutral-200">
          <div className="max-w-3xl mx-auto px-4 text-center text-sm text-neutral-600 space-y-2">
            <p>
              Os resultados dependem da aplicação individual, consistência, mercado e rotina.
            </p>
            <p>Método educacional para profissionais da estética.</p>
            <p className="pt-4 text-neutral-500">
              © {new Date().getFullYear()} Método R.E.N.D.A. · Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Renda;
