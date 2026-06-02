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
            Aumente sua renda em 30 dias{" "}
            <span className="block text-[#d4145a]">
              com um método simples para profissionais da estética
            </span>
          </h1>
          <p className="text-center text-sm md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Aprenda a organizar, divulgar e valorizar o seu trabalho para transformar os serviços que já faz numa fonte de renda mais clara, mais profissional e menos dependente de indicação.
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
                Quero começar o Método R.E.N.D.A. →
              </a>
              <p className="text-xs text-neutral-500">Ebook + Mentoria · 10.000 Kz · Acesso imediato</p>
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

        {/* PROVA SOCIAL */}
        <section className="bg-neutral-900 text-white py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-[#ff3d7f] text-sm font-bold uppercase tracking-wider mb-4 text-center">
              Prova social
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8 text-center">
              Outras profissionais também sentiam que trabalhavam muito e viam pouco dinheiro
            </h2>
            <p className="text-lg md:text-xl text-neutral-200 leading-relaxed mb-12 text-center">
              Muitas chegam ao Método R.E.N.D.A. com a mesma sensação: atendem, respondem clientes, compram material, postam no Instagram, fazem orçamento, cobram — mas no fim do mês não sabem quanto realmente sobrou. O método existe para organizar essa confusão.
            </p>

            <div className="space-y-5">
              {[
                "Eu achava que o meu problema era só falta de clientes. Depois percebi que não tinha controlo da agenda, não sabia responder bem no WhatsApp e cobrava com medo. O método ajudou-me a ver onde o dinheiro estava a fugir.",
                "Já tinha feito cursos de estética, mas nenhum me ensinou a tratar o meu trabalho como negócio. Com o Método R.E.N.D.A., comecei a olhar para preço, retorno, divulgação e organização com mais clareza.",
                "Eu tinha vergonha de cobrar melhor. Quando entendi que a cliente não paga só pelo procedimento, mas também pela confiança, comecei a apresentar melhor o meu serviço.",
              ].map((t, i) => (
                <div key={i} className="bg-neutral-800/60 rounded-2xl p-6 border border-neutral-700">
                  <p className="font-serif italic text-neutral-100 leading-relaxed">“{t}”</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-10 text-sm text-neutral-300">
              {[
                "Criado para profissionais da estética",
                "Funciona em casa ou a domicílio",
                "Linguagem simples, sem termos complicados",
                "Ebook + Mentoria para ajudar na aplicação",
              ].map((s) => (
                <div key={s} className="flex gap-2 items-start">
                  <Check className="w-5 h-5 text-[#ff3d7f] shrink-0 mt-0.5" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOR */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-[#d4145a] text-sm font-bold uppercase tracking-wider mb-4">
              A dor
            </p>
            <SectionTitle>
              Você trabalha muito, mas sente que o dinheiro nunca sobra?
            </SectionTitle>
            <ul className="space-y-3 text-lg text-neutral-700 mb-8">
              {[
                "Tens clientes, mas não sabes quanto lucraste.",
                "Dependes muito de indicação.",
                "Tens medo de cobrar melhor.",
                "Postas no Instagram, mas quase ninguém chama.",
                "Respondes WhatsApp, mas as conversas não viram marcação.",
                "Compras material, atendes, recebes — e não sabes onde o dinheiro foi parar.",
                "Aceitas descontos por medo de perder clientes.",
                "Vês concorrentes a cobrar mais, enquanto continuas insegura.",
              ].map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="text-[#d4145a] font-bold">·</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Muitas profissionais foram ensinadas a fazer o procedimento, mas não foram ensinadas a vender, organizar, divulgar, cobrar e fazer a cliente voltar. Isso não significa que não tens talento. Significa que o teu negócio precisa de método.
            </p>
            <p className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
              Renda nasce quando o teu trabalho tem{" "}
              <span className="text-[#d4145a]">organização, valor percebido, divulgação e retorno.</span>
            </p>
          </div>
        </section>

        {/* DIAGNÓSTICO */}
        <section className="py-20 md:py-28 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-[#d4145a] text-sm font-bold uppercase tracking-wider mb-4">
              Diagnóstico
            </p>
            <SectionTitle>
              É falta de clientes, preço baixo ou falta de organização?
            </SectionTitle>
            <p className="text-lg text-neutral-700 mb-8">
              Na maioria das vezes, não é apenas uma coisa. É a soma de pequenos problemas que fazem a renda ficar instável.
            </p>

            <div className="space-y-5">
              {[
                {
                  t: "Se tens clientes, mas não vês dinheiro",
                  d: "O problema pode estar na falta de controlo. Entra dinheiro, mas não separas custos, material, transporte, lucro e dinheiro pessoal.",
                },
                {
                  t: "Se as clientes acham caro",
                  d: "O problema pode estar na percepção de valor. A cliente olha para o preço porque ainda não entendeu claramente o resultado, o cuidado e a diferença do teu serviço.",
                },
                {
                  t: "Se dependes só de indicação",
                  d: "O problema pode estar na divulgação. Indicação é boa, mas quando é a única fonte de clientes, a tua renda fica na mão dos outros.",
                },
                {
                  t: "Se as clientes fazem uma vez e somem",
                  d: "O problema pode estar na falta de retorno. Manutenção, pacote, sequência e acompanhamento criam o caminho para a cliente voltar.",
                },
                {
                  t: "Se já tentaste antes e nada mudou",
                  d: "Pode não ser falta de informação. Pode ser falta de uma ordem simples para aplicar. Dica solta não organiza negócio. Método sim.",
                },
              ].map((it) => (
                <div key={it.t} className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 mb-2">{it.t}</h3>
                  <p className="text-neutral-700 leading-relaxed">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-[#d4145a] text-sm font-bold uppercase tracking-wider mb-4">
              Benefícios
            </p>
            <SectionTitle>O que aprendes no Método R.E.N.D.A.</SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {[
                {
                  t: "Clareza para organizar a tua renda",
                  d: "Olhar para o dinheiro que entra e entender o que sobra, o que sai e o que precisa de ser controlado.",
                },
                {
                  t: "Segurança para cobrar melhor",
                  d: "Apresentar o teu serviço, explicar o resultado e fazer a cliente perceber valor antes de comparar preço.",
                },
                {
                  t: "Divulgação com intenção",
                  d: "Parar de postar por postar. Saber o que mostrar no Instagram e no WhatsApp para gerar marcações.",
                },
                {
                  t: "Controlo de agenda e clientes",
                  d: "Sair da bagunça de mensagens soltas e encaixes confusos, criando uma rotina mais simples.",
                },
                {
                  t: "Mais oportunidades de retorno",
                  d: "Pensar em manutenção, pacotes, clientes antigas e lembretes para a cliente voltar.",
                },
                {
                  t: "Postura de negócio",
                  d: "Deixar de olhar para o teu trabalho como “biscato” e enxergar a estética como negócio.",
                },
              ].map((b) => (
                <div
                  key={b.t}
                  className="bg-neutral-50 rounded-xl p-6 border-l-4 border-[#d4145a]"
                >
                  <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">{b.t}</h3>
                  <p className="text-base text-neutral-700 leading-relaxed">{b.d}</p>
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
              Ebook + Mentoria<br/>Método R.E.N.D.A.
            </h2>
            <p className="text-center text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-14 leading-relaxed">
              Um plano prático para profissionais independentes da estética que querem organizar, divulgar e valorizar o seu trabalho para aumentar as oportunidades de renda em 30 dias.
            </p>

            <div className="space-y-6">
              {[
                {
                  letter: "R",
                  title: "Reconhecimento",
                  desc: "Deixa de parecer “mais uma” e começa a construir uma imagem mais profissional, mesmo atendendo em casa ou a domicílio.",
                },
                {
                  letter: "E",
                  title: "Estrutura",
                  desc: "Organiza agenda, clientes, dinheiro e WhatsApp para parar de viver no improviso.",
                },
                {
                  letter: "N",
                  title: "Nome",
                  desc: "Fortalece a tua reputação para ser lembrada, indicada e escolhida com mais confiança.",
                },
                {
                  letter: "D",
                  title: "Divulgação",
                  desc: "Divulga com intenção, mostrando o teu trabalho de forma simples e mais estratégica.",
                },
                {
                  letter: "A",
                  title: "Aumento",
                  desc: "Cria oportunidades de aumento com pacotes, retorno, clientes antigas e valorização do atendimento.",
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
              Não é mais uma técnica. É o que falta para ganhares com a técnica que já tens.
            </SectionTitle>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-4">
              Um curso técnico ensina-te a fazer melhor um procedimento.
            </p>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
              O Método R.E.N.D.A. ensina-te a organizar, divulgar, vender e fazer o procedimento gerar mais renda.
            </p>
            <p className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
              Não precisas de mais informação. <span className="text-[#d4145a]">Precisas de uma ordem clara.</span>
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
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-4 leading-tight">
                Ebook + Mentoria por 10.000 Kz
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Tudo o que está incluído:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Ebook prático do Método R.E.N.D.A. (5 pilares)",
                  "Mentoria para ajudar na aplicação passo a passo",
                  "Organização de agenda, clientes e dinheiro",
                  "Estratégias práticas de WhatsApp e Instagram",
                  "Como cobrar com segurança e criar valor percebido",
                  "Plano de acção simples para os primeiros 30 dias",
                ].map((b) => (
                  <li key={b} className="flex gap-3 text-lg text-neutral-800">
                    <Check className="w-6 h-6 text-[#d4145a] shrink-0 mt-1" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <CTA label="Quero entrar no Método R.E.N.D.A." className="w-full md:w-auto" />
                <p className="mt-4 text-sm text-neutral-500">
                  Acesso imediato após pagamento · 10.000 Kz
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AUTORIDADE / GARANTIA */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-[#d4145a] text-sm font-bold uppercase tracking-wider mb-4">
              Autoridade
            </p>
            <SectionTitle>
              Um método simples para quem quer parar de improvisar
            </SectionTitle>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              O Método R.E.N.D.A. nasceu para ajudar profissionais da estética em Angola que já trabalham, já atendem e já se esforçam, mas ainda sentem que o dinheiro não acompanha o esforço.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              A proposta é educativa e prática: explicar de forma simples o que precisa mudar para organizar melhor o negócio, comunicar valor, atrair clientes e criar mais oportunidades de renda.
            </p>
            <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200">
              <p className="font-bold text-neutral-900 mb-3">Sem promessas mágicas.</p>
              <p className="text-neutral-700 leading-relaxed">
                Os resultados dependem da tua aplicação, rotina, serviço, região e consistência. O método não garante um valor fixo de facturamento, mas entrega uma direcção clara para aumentar as tuas oportunidades de renda.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 md:py-28 bg-neutral-900 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              Daqui a 30 dias podes continuar no improviso…{" "}
              <span className="text-[#ff3d7f]">ou seguir um método.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              O teu talento já existe. Agora ele precisa de método.
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
              <div className="bg-neutral-800/60 rounded-xl p-6 border border-neutral-700">
                <p className="font-bold text-[#ff3d7f] mb-3">Com método</p>
                <ul className="space-y-1 text-neutral-200 text-sm">
                  <li>· Agenda organizada</li>
                  <li>· Cobras com segurança</li>
                  <li>· Sabes quanto ganhas</li>
                  <li>· Clientes voltam</li>
                </ul>
              </div>
              <div className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-800">
                <p className="font-bold text-neutral-400 mb-3">Sem método</p>
                <ul className="space-y-1 text-neutral-400 text-sm">
                  <li>· Mensagens sem ordem</li>
                  <li>· Aceitas descontos por medo</li>
                  <li>· Dependes de indicação</li>
                  <li>· Mês começa do zero</li>
                </ul>
              </div>
            </div>

            <CTA label="Quero começar o Método R.E.N.D.A. agora" />
            <p className="mt-6 text-sm text-neutral-400">
              Ebook + Mentoria · 10.000 Kz · Acesso imediato
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
                  q: "Para quem é o Método R.E.N.D.A.?",
                  a: "Para profissionais independentes da estética que já atendem ou já têm alguma experiência, mas sentem falta de organização, clientes constantes, segurança para cobrar e clareza para transformar atendimento em renda.",
                },
                {
                  q: "Serve para quem atende em casa?",
                  a: "Sim. Serve para quem atende em casa, a domicílio, em espaço alugado, pequeno studio ou espaço próprio.",
                },
                {
                  q: "Preciso de ter muitos clientes?",
                  a: "Não. Precisas de vontade de organizar e aplicar. O método ajuda tanto quem já tem clientes mas vive sem controlo, quanto quem tem poucos e precisa melhorar divulgação e retorno.",
                },
                {
                  q: "Preciso de saber marketing?",
                  a: "Não. A linguagem é simples e feita para leigos. O foco é explicar o que fazer na prática, usando situações reais da rotina da estética.",
                },
                {
                  q: "Vou aprender a fazer anúncios pagos?",
                  a: "Esse não é o foco principal. Antes de pensar em anúncios, o método ajuda-te a organizar a base: oferta, preço, agenda, WhatsApp, divulgação e retorno.",
                },
                {
                  q: "Vou precisar de aparecer todos os dias?",
                  a: "Não. O método mostra formas simples de divulgar com conteúdos, resultados, explicações e atendimento melhor conduzido. Aparecer pode ajudar, mas não é a única forma de criar confiança.",
                },
                {
                  q: "O resultado é garantido?",
                  a: "Não existe garantia de facturamento fixo. O método entrega um plano prático para criar mais oportunidades de renda. O resultado depende da aplicação.",
                },
                {
                  q: "Por que custa 10.000 Kz?",
                  a: "Porque não recebes apenas um ebook. Recebes um método organizado e uma mentoria para ajudar na aplicação. É uma opção mais acessível do que contratar agência, social media, tráfego pago ou consultoria individual.",
                },
                {
                  q: "Como faço para comprar?",
                  a: "Clica no botão da página e segue as instruções de pagamento. Depois recebes o acesso ao material e às orientações da mentoria.",
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
            <p>Método educacional para profissionais da estética em Angola.</p>
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
