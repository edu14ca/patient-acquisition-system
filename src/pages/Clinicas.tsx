import { useEffect } from "react";
import { Check, Plus } from "lucide-react";
import raiseLogo from "@/assets/logo-raise.png";
import raiseLogoWhite from "@/assets/logo-raise-white.png";
import BrandPattern from "@/components/raise/BrandPattern";
import balde480 from "@/assets/balde-480.webp";
import balde900 from "@/assets/balde-900.webp";
import { useReveal } from "@/hooks/useReveal";
import { Eyebrow, RollButton, Tapes, Words } from "@/components/lp/primitives";
import LeadForm from "@/components/lp/LeadForm";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/*
 * Landing page de clínicas (V3). Um único objectivo: o formulário do teste de atendimento.
 * Estrutura inspirada no CTRL+M (título gigante, fitas diagonais, lista numerada /01)
 * e motion do Olyyx (subida palavra a palavra, revelar ao scroll, botão que rola).
 * Tudo em CSS + IntersectionObserver, sem bibliotecas de animação.
 */

// Só entram testemunhos reais e autorizados. Vazio = o bloco não aparece.
const testemunhos: { texto: string; nome: string; clinica: string }[] = [];

const dores = [
  {
    t: "Pacientes que perguntam e desaparecem",
    d: "Alguém pede informações pelo WhatsApp, recebe uma resposta demorada ou incompleta e nunca mais volta a contactar.",
    a: "Identificar este tipo de falha é o primeiro passo para melhorar a forma como a equipa acompanha os interessados.",
  },
  {
    t: "Marcações que ficam pelo caminho",
    d: "O paciente mostra interesse numa consulta, mas a conversa termina sem uma confirmação ou um próximo passo claro.",
    a: "Uma comunicação mais organizada facilita a passagem do primeiro contacto para a marcação.",
  },
  {
    t: "O gestor não sabe quantas oportunidades perde",
    d: "A clínica recebe chamadas e mensagens, mas não consegue perceber quantos pedidos foram atendidos e quantos ficaram sem seguimento.",
    a: "Analisar o percurso de atendimento mostra os pontos que merecem mais atenção.",
  },
];

const beneficios = [
  { t: "Identifique as oportunidades que estão a escapar", d: "Perceba em que momentos os potenciais pacientes abandonam o processo de marcação." },
  { t: "Aproveite melhor os contactos que recebe", d: "Os pedidos vindos do WhatsApp, do telefone ou das campanhas passam a ter o acompanhamento adequado." },
  { t: "Reduza as falhas na comunicação", d: "Encontre as respostas pouco claras, os atrasos e as informações incompletas que travam a decisão do paciente." },
  { t: "Organize a rotina da equipa", d: "Processos claros ajudam cada colaborador a saber o que fazer em cada etapa do atendimento." },
  { t: "Decida com mais clareza", d: "Saiba que áreas precisam de atenção antes de investir em ferramentas, campanhas ou mudanças operacionais." },
  { t: "Valorize cada pedido de marcação", d: "Cada pedido recebido passa a ter melhores condições de chegar a uma consulta." },
];

const observado = [
  "A forma como os pedidos de informação são recebidos.",
  "A clareza das respostas aos potenciais pacientes.",
  "O encaminhamento dos pedidos de marcação.",
  "A continuidade das conversas com os interessados.",
  "Os pontos que dificultam a experiência do paciente.",
];

const garantias = [
  { t: "Avaliação antes de decisões", d: "Conheça primeiro o funcionamento e o alcance do teste antes de considerar mudanças na sua operação." },
  { t: "Foco na realidade da clínica", d: "As prioridades são definidas pelos desafios identificados, não por soluções genéricas." },
  { t: "Sem contratação automática", d: "Pedir o teste não é contratar a Assessoria Modular. As condições ficam claras antes de qualquer compromisso." },
];

const faq = [
  { q: "O que é o teste de atendimento?", a: "É uma avaliação, explicada pela nossa equipa no primeiro contacto, que mostra onde o atendimento da clínica pode estar a perder marcações." },
  { q: "O teste é gratuito?", a: "Sim. O teste de atendimento é gratuito e sem compromisso." },
  { q: "Preciso de contratar a Assessoria Modular?", a: "Não. Pedir o teste não significa contratar a assessoria." },
  { q: "Serve para clínicas pequenas?", a: "A adequação é avaliada de acordo com a estrutura e as necessidades de cada clínica." },
  { q: "O que acontece depois de preencher o formulário?", a: "A equipa recebe o pedido e entra em contacto consigo para explicar os próximos passos." },
];

const clinicas = [
  { nome: "Clínica A", estado: "demora", linhas: ["Boa tarde, queria marcar uma consulta. Ainda têm vaga esta semana?"] },
  { nome: "Clínica B", estado: "incompleta", linhas: ["Boa tarde, queria marcar uma consulta. Ainda têm vaga esta semana?", "Temos. Ligue para a recepção."] },
  {
    nome: "Clínica C",
    estado: "marcou",
    linhas: [
      "Boa tarde, queria marcar uma consulta. Ainda têm vaga esta semana?",
      "Boa tarde! Temos quinta às 10h ou sexta às 15h. Qual prefere?",
      "Quinta às 10h.",
      "Marcado. Enviamos a confirmação e a localização.",
    ],
  },
];

const Clinicas = () => {
  useReveal();
  useEffect(() => {
    document.title = "Raise | Teste de atendimento para clínicas em Angola";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute(
      "content",
      "A sua clínica não precisa de mais pedidos. Precisa de parar de os perder. Solicite um teste de atendimento.",
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Cabeçalho mínimo: um só objectivo */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="container-tight h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={raiseLogo} alt="Raise" width={480} height={128} className="h-7 w-auto" />
          </a>
          <a href="#formulario" className="lp-btn h-10 px-4 text-xs">
            <span className="roll">
              <span>Solicitar teste</span>
              <span aria-hidden>Solicitar teste</span>
            </span>
          </a>
        </div>
      </header>

      <main>
        {/* 1 · HERO */}
        <section className="relative overflow-hidden pt-12 md:pt-20 pb-16">
          <BrandPattern className="-right-20 -top-10 h-[560px] w-auto hidden lg:block" opacity={0.04} />
          <div className="container-tight relative grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-start">
            <div>
              <Eyebrow>Para gestores de clínicas em Angola</Eyebrow>
              <h1 className="lp-display mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.6rem]">
                <Words text="A sua clínica não precisa de mais pedidos." />{" "}
                <span className="text-primary">
                  <Words text="Precisa de parar de os perder." />
                </span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground max-w-xl" data-reveal style={{ ["--d" as string]: "500ms" }}>
                Todos os dias, potenciais pacientes contactam clínicas para marcar consultas. Uma mensagem sem resposta,
                uma chamada perdida ou uma marcação sem acompanhamento chega para os levar à concorrência.
              </p>
              <div className="mt-8 grid sm:grid-cols-[260px_1fr] gap-6 items-center" data-reveal style={{ ["--d" as string]: "650ms" }}>
                <img
                  src={balde480}
                  srcSet={`${balde480} 480w, ${balde900} 900w`}
                  sizes="(min-width: 640px) 260px, 100vw"
                  width={480}
                  height={600}
                  {...{ fetchpriority: "high" }}
                  alt="Balde furado a deixar escapar notas e moedas de kwanza"
                  className="w-full max-w-[340px] sm:max-w-none rounded-xl border border-border"
                />
                <p className="text-foreground/90 border-l-2 border-primary pl-4">
                  Antes de investir mais dinheiro para atrair novos pacientes, descubra se o atendimento da sua clínica está
                  preparado para aproveitar os pedidos que já recebe.
                </p>
              </div>
            </div>

            <div data-reveal style={{ ["--d" as string]: "350ms" }} className="lg:sticky lg:top-24">
              <LeadForm
                id="formulario-topo"
                titulo="Descubra onde pode estar a perder marcações."
                texto="Preencha o formulário e solicite uma avaliação do atendimento da sua clínica."
                compacto
              />
            </div>
          </div>
        </section>

        <Tapes
          red={["Mensagem sem resposta", "Chamada perdida", "Marcação sem seguimento"]}
          white={["Paciente que vai à concorrência", "Dinheiro de anúncios desperdiçado"]}
        />

        {/* 2 · PROVA E CONFIANÇA: três clínicas */}
        <section className="py-20 md:py-28">
          <div className="container-tight">
            <div className="max-w-3xl" data-reveal>
              <Eyebrow>O mesmo paciente, três clínicas</Eyebrow>
              <h2 className="lp-display mt-5 text-3xl md:text-5xl">
                O paciente que não consegue marcar consigo pode acabar por marcar noutra clínica.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                O interesse de um paciente não garante uma marcação. O atendimento faz parte dessa decisão.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-4">
              {clinicas.map((c, i) => (
                <div
                  key={c.nome}
                  data-reveal
                  style={{ ["--d" as string]: `${i * 120}ms` }}
                  className={`rounded-xl border p-5 bg-card flex flex-col ${c.estado === "marcou" ? "border-primary" : "border-border"}`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs uppercase tracking-[0.071em]">{c.nome}</p>
                    <span
                      className={`font-mono text-[11px] uppercase tracking-[0.071em] ${c.estado === "marcou" ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {c.estado === "demora" ? "Sem resposta há 3 h" : c.estado === "incompleta" ? "Resposta incompleta" : "Consulta marcada"}
                    </span>
                  </div>
                  <div className="mt-5 space-y-2 text-sm flex-1">
                    {c.linhas.map((l, k) => (
                      <p
                        key={k}
                        className={`max-w-[85%] rounded-lg px-3 py-2 ${k % 2 === 0 ? "bg-muted" : "ml-auto bg-foreground text-background"}`}
                      >
                        {l}
                      </p>
                    ))}
                    {c.estado === "demora" && (
                      <p className="lp-typing ml-auto w-fit rounded-lg bg-muted px-3 py-3 flex gap-1 text-muted-foreground" aria-label="À espera de resposta">
                        <span /> <span /> <span />
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Conversas ilustrativas.</p>

            <div className="mt-12 grid md:grid-cols-2 gap-8 items-end" data-reveal>
              <p className="text-2xl md:text-3xl font-medium tracking-tight">
                Qual delas tem melhores condições para transformar aquele interesse numa consulta?
              </p>
              <p className="text-muted-foreground">
                A experiência começa muito antes de o paciente chegar à recepção. Mais importante do que prometer resultados
                é mostrar, com exemplos reais, onde o atendimento pode melhorar.
              </p>
            </div>

            {testemunhos.length > 0 && (
              <div className="mt-12 grid md:grid-cols-3 gap-4">
                {testemunhos.map((t, i) => (
                  <figure key={i} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }} className="rounded-xl border border-border bg-card p-6">
                    <blockquote className="text-sm">«{t.texto}»</blockquote>
                    <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.071em] text-muted-foreground">
                      {t.nome} · {t.clinica}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        <div className="lp-stripes" aria-hidden />

        {/* 3 · DOR + ALÍVIO */}
        <section className="py-20 md:py-28">
          <div className="container-tight">
            <div className="max-w-4xl" data-reveal>
              <Eyebrow>Onde o dinheiro escapa</Eyebrow>
              <h2 className="lp-display mt-5 text-3xl md:text-5xl">
                O dinheiro que a sua clínica investe para atrair pacientes pode estar a{" "}
                <span className="text-primary">escapar pelo atendimento.</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                De que adianta gerar mais interesse se parte dos pedidos nunca chega a transformar-se numa marcação?
              </p>
            </div>

            <ol className="mt-14">
              {dores.map((d, i) => (
                <li key={d.t} data-reveal style={{ ["--d" as string]: `${i * 100}ms` }} className="py-8">
                  <div className="lp-rule mb-8" />
                  <div className="grid md:grid-cols-[120px_1fr_1fr] gap-4 md:gap-10">
                    <span className="font-mono text-primary text-sm">/0{i + 1}</span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">{d.t}</h3>
                      <p className="mt-3 text-muted-foreground">{d.d}</p>
                    </div>
                    <p className="text-foreground/90 md:pt-1">
                      <span className="font-mono text-xs uppercase tracking-[0.071em] text-muted-foreground block mb-2">Alívio</span>
                      {d.a}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid md:grid-cols-2 gap-10" data-reveal>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-foreground text-xl font-medium">O problema é que estas falhas não fazem barulho.</p>
                <p>
                  Não aparece uma notificação a dizer que um paciente escolheu outra clínica. Não há um relatório automático
                  com todas as oportunidades que ficaram pelo caminho.
                </p>
                <p>
                  A clínica continua a funcionar, a equipa continua ocupada e o gestor acredita que precisa apenas de mais
                  publicidade.
                </p>
              </div>
              <div className="rounded-xl bg-primary text-white p-8 flex flex-col justify-between gap-8">
                <p className="text-2xl font-semibold tracking-tight">
                  E se o próximo passo não for atrair mais pessoas, mas atender melhor as que já procuram a sua clínica?
                </p>
                <a href="#formulario" className="inline-flex items-center gap-2 font-semibold uppercase text-sm tracking-wide underline underline-offset-4">
                  Solicitar teste de atendimento
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · BENEFÍCIOS */}
        <section className="theme-wine py-20 md:py-28">
          <div className="container-tight">
            <div className="max-w-4xl" data-reveal>
              <Eyebrow>O que o teste mostra</Eyebrow>
              <h2 className="lp-display mt-5 text-3xl md:text-5xl">
                Descubra o que impede a sua clínica de converter mais pedidos em marcações.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Um atendimento eficiente não depende só de simpatia. Depende de processos claros, acompanhamento e
                organização.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {beneficios.map((b, i) => (
                <div
                  key={b.t}
                  data-reveal
                  style={{ ["--d" as string]: `${(i % 3) * 110}ms` }}
                  className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary"
                >
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{b.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-muted-foreground" data-reveal>
              Uma clínica não cresce só com o número de pessoas que entram em contacto. Precisa de transformar esse interesse
              em marcações efectivas.
            </p>
          </div>
        </section>

        {/* 5 · OFERTA */}
        <section className="py-20 md:py-28">
          <div className="container-tight">
            <div className="max-w-4xl" data-reveal>
              <Eyebrow>Assessoria Modular</Eyebrow>
              <h2 className="lp-display mt-5 text-3xl md:text-5xl">
                Antes de investir mais para atrair pacientes, descubra o que acontece com os pedidos que{" "}
                <span className="text-primary">já recebe.</span>
              </h2>
            </div>

            <div className="mt-14 grid lg:grid-cols-2 gap-12">
              <div className="space-y-10" data-reveal>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">O que é a Assessoria Modular?</h3>
                  <p className="mt-3 text-muted-foreground">
                    Um apoio à melhoria de processos, adaptado às necessidades de cada clínica. Em vez de partir de uma
                    solução genérica, o trabalho começa pela compreensão dos desafios de atendimento e das áreas que precisam
                    de atenção.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">Porquê começar pelo teste?</h3>
                  <p className="mt-3 text-muted-foreground">
                    Porque antes de mudar um processo é preciso perceber o que está a funcionar mal. O teste de atendimento é
                    a porta de entrada para avaliar se a Assessoria Modular se ajusta à realidade da sua clínica.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">A diferença de uma abordagem modular</h3>
                  <p className="mt-3 text-muted-foreground">
                    Não se trata de mudar a operação inteira. Trata-se de identificar prioridades e escolher as soluções
                    ajustadas às dificuldades da sua clínica.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-8" data-reveal style={{ ["--d" as string]: "150ms" }}>
                <h3 className="text-xl font-semibold tracking-tight">O que é observado no teste</h3>
                <ul className="mt-6 space-y-4">
                  {observado.map((o) => (
                    <li key={o} className="flex gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  O alcance e a metodologia do teste são apresentados pela nossa equipa.
                </p>
                <RollButton className="mt-8 w-full">Quero solicitar o teste</RollButton>
              </div>
            </div>
          </div>
        </section>

        <Tapes red={["Primeiro o teste", "Depois a decisão"]} white={["Sem contratação automática", "Clínicas em Angola"]} />

        {/* 6 · AUTORIDADE E SEGURANÇA */}
        <section className="py-20 md:py-28">
          <div className="container-tight">
            <div className="max-w-4xl" data-reveal>
              <Eyebrow>Segurança</Eyebrow>
              <h2 className="lp-display mt-5 text-3xl md:text-5xl">
                O seu atendimento deve estar à altura da qualidade dos serviços da sua clínica.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                A confiança de um paciente começa na forma como é recebido, informado e acompanhado.
              </p>
              <p className="mt-4 text-muted-foreground">
                A Raise apoia clínicas em Angola a organizar e melhorar os processos de atendimento. Primeiro compreendemos a
                operação, depois orientamos as decisões, sem assumir que todas as clínicas têm os mesmos problemas.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-4">
              {garantias.map((g, i) => (
                <div key={g.t} data-reveal style={{ ["--d" as string]: `${i * 110}ms` }} className="border-t-2 border-primary pt-6">
                  <h3 className="text-lg font-semibold tracking-tight">{g.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{g.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · CTA FINAL + FORMULÁRIO + FAQ */}
        <section className="theme-dark py-20 md:py-28" id="formulario">
          <div className="container-tight grid lg:grid-cols-2 gap-12 items-start">
            <div data-reveal>
              <Eyebrow>Último passo</Eyebrow>
              <h2 className="lp-display mt-5 text-3xl md:text-5xl">
                A sua clínica pode estar a perder marcações. <span className="text-primary">A questão é: sabe onde?</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Não continue a investir em novos pedidos sem perceber o que acontece depois de um paciente contactar a sua
                equipa. Solicite um teste de atendimento e dê o primeiro passo para encontrar as falhas que travam as suas
                marcações.
              </p>
              <p className="mt-6 border-l-2 border-primary pl-4 text-foreground/90">
                O próximo paciente que contactar a sua clínica merece um atendimento preparado para transformar interesse numa
                marcação. Não espere que as mesmas falhas continuem a acontecer.
              </p>

              <div className="mt-12">
                <p className="eyebrow mb-4">Perguntas frequentes</p>
                <div className="divide-y divide-border border-y border-border">
                  {faq.map((f) => (
                    <details key={f.q} className="lp-faq py-4">
                      <summary className="flex items-center justify-between gap-4 font-medium">
                        {f.q}
                        <Plus className="plus h-4 w-4 shrink-0 text-muted-foreground" />
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <div data-reveal style={{ ["--d" as string]: "150ms" }} className="lg:sticky lg:top-24">
              <LeadForm
                titulo="Solicite o teste de atendimento da sua clínica."
                texto="Preencha os seus dados para que a nossa equipa entre em contacto e apresente o funcionamento do teste."
              />
            </div>
          </div>
        </section>
      </main>

      {/* 8 · RODAPÉ */}
      <footer className="theme-dark py-12">
        <div className="container-tight flex flex-col md:flex-row gap-6 md:items-center justify-between text-sm text-muted-foreground">
          <div>
            <img src={raiseLogoWhite} alt="Raise" width={480} height={128} className="h-7 w-auto" />
            <p className="mt-1">Melhoria dos processos de atendimento para clínicas em Angola.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={buildWhatsAppLink("Olá Raise, tenho uma dúvida sobre o teste de atendimento.")} className="hover:text-foreground">
              WhatsApp: +244 939 636 042
            </a>
            <a href="/politica-de-privacidade/" className="hover:text-foreground">Política de Privacidade</a>
          </div>
          <p>© {new Date().getFullYear()} Raise. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Clinicas;
