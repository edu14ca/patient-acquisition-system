import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Sparkles,
  Calendar,
  TrendingUp,
  MessageCircle,
  Heart,
  Award,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CHECKOUT_URL = "https://pay.kursinha.com/c/6a04dbae59995e700cb427c0";

const CTA = ({ label = "Quero começar o Método R.E.N.D.A.", className = "" }: { label?: string; className?: string }) => (
  <a
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-neutral-800 transition-colors text-base md:text-lg ${className}`}
  >
    {label} <ArrowRight className="w-5 h-5" />
  </a>
);

const Renda = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <header className="border-b border-neutral-200 sticky top-0 bg-white/90 backdrop-blur z-30">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link to="/" className="font-bold tracking-tight">Método R.E.N.D.A.</Link>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-800"
          >
            Quero entrar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-5 pt-14 pb-20 md:pt-24 md:pb-28">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Para profissionais da estética
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
          Transforme sua habilidade na estética em{" "}
          <span className="underline decoration-4 decoration-neutral-900 underline-offset-4">
            Renda
          </span>{" "}
          nos próximos 30 dias.
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6 max-w-3xl">
          Aprenda a organizar, divulgar e valorizar o seu trabalho para ganhar mais com os serviços
          que você já sabe fazer — sem depender apenas de indicação, descontos ou mais horas de
          atendimento.
        </p>
        <p className="text-base text-neutral-600 leading-relaxed mb-8 max-w-3xl">
          Se você é manicure, lash designer, designer de sobrancelhas, esteticista, cabeleireira,
          depiladora, trancista ou trabalha com estética de forma independente, o Método R.E.N.D.A.
          foi criado para você parar de viver no improviso e começar a tratar sua profissão como
          um negócio.
        </p>
        <CTA />
        <p className="text-xs text-neutral-500 mt-4">Acesso imediato • Ebook + mentoria</p>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-neutral-50 border-y border-neutral-200 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12 text-center">
            Profissionais da estética não precisam trabalhar mais.
            <br />
            <span className="text-neutral-500">Precisam ganhar melhor.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <blockquote className="bg-white p-7 rounded-2xl border border-neutral-200">
              <p className="text-neutral-700 leading-relaxed mb-4">
                "Eu achava que o meu problema era falta de clientes. Depois percebi que eu não sabia
                organizar minha agenda, responder melhor no WhatsApp, cobrar com segurança e fazer
                as clientes voltarem. O método me ajudou a olhar para o meu trabalho como negócio."
              </p>
              <footer className="text-sm text-neutral-500 font-semibold">— Aluna do método</footer>
            </blockquote>
            <blockquote className="bg-white p-7 rounded-2xl border border-neutral-200">
              <p className="text-neutral-700 leading-relaxed mb-4">
                "Eu atendia bem, mas sempre tinha medo de aumentar o preço. Quando comecei a
                melhorar minha apresentação e explicar melhor o valor do meu serviço, as clientes
                passaram a respeitar mais o meu trabalho."
              </p>
              <footer className="text-sm text-neutral-500 font-semibold">— Aluna do método</footer>
            </blockquote>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            {[
              "Método prático para estética",
              "Funciona em casa ou a domicílio",
              "Organização + divulgação + renda",
              "Ebook + mentoria",
            ].map((s) => (
              <span key={s} className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 px-4 py-2 rounded-full text-neutral-700">
                <Check className="w-4 h-4 text-neutral-900" /> {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10">
          Você trabalha muito, mas sente que o dinheiro nunca sobra?
        </h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-10">
          {[
            "Você atende clientes, mas não sabe quanto lucrou no fim do mês.",
            "Você depende demais de indicação para conseguir novos atendimentos.",
            "Você tem medo de cobrar mais caro e perder clientes.",
            "Você posta no Instagram, mas quase ninguém chama no WhatsApp.",
            "Você aceita desconto porque tem receio de ficar sem atendimento.",
            "Você mistura dinheiro pessoal com dinheiro do negócio.",
            "Você sente que toda semana precisa começar do zero.",
            "Você vê concorrentes cobrando mais e aparecendo melhor.",
          ].map((d) => (
            <div key={d} className="flex gap-3 py-2 border-b border-neutral-100">
              <span className="text-neutral-400">✕</span>
              <span className="text-neutral-700">{d}</span>
            </div>
          ))}
        </div>
        <p className="text-lg text-neutral-700 leading-relaxed mb-6">
          Muitas profissionais da estética foram ensinadas a fazer o procedimento, mas nunca foram
          ensinadas a vender, organizar, divulgar e aumentar o valor do próprio trabalho. Por isso,
          mesmo sendo boas no que fazem, acabam presas numa rotina cansativa.
        </p>
        <p className="text-xl md:text-2xl font-bold leading-tight">
          O problema não é falta de talento. O problema é tentar construir renda sem método.
        </p>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-neutral-900 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12 max-w-3xl">
            O que o Método R.E.N.D.A. ajuda você a conquistar
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, t: "Mais clareza para ganhar dinheiro", d: "Entenda onde está perdendo dinheiro, como organizar sua rotina e quais ações precisam ser feitas primeiro para criar oportunidades em 30 dias." },
              { icon: Award, t: "Mais segurança para cobrar", d: "Melhore a percepção de valor do seu serviço, pare de se sentir culpada ao cobrar e comunique melhor o resultado que entrega." },
              { icon: Calendar, t: "Mais organização no dia a dia", d: "Deixe de depender da cabeça e do improviso para controlar agenda, clientes, pagamentos e retorno." },
              { icon: MessageCircle, t: "Mais clientes com divulgação simples", d: "Entenda o que publicar e como usar Instagram e WhatsApp para transformar atenção em conversa e conversa em agendamento." },
              { icon: Heart, t: "Mais retorno das clientes", d: "Crie pacotes, incentive manutenção, recupere clientes antigas e faça cada atendimento gerar novos ganhos." },
              { icon: Sparkles, t: "Mais postura profissional", d: "Passe a se enxergar como uma profissional que tem um negócio, e não apenas alguém que faz um serviço." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="p-6 rounded-2xl bg-neutral-800/50 border border-neutral-800">
                <Icon className="w-7 h-7 mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">{t}</h3>
                <p className="text-neutral-400 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-neutral-500">A Oferta</span>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] mt-3 mb-4">
            Renda em 30 dias
          </h2>
          <p className="text-xl text-neutral-700">Método R.E.N.D.A. — Ebook + Mentoria</p>
        </div>

        <p className="text-lg text-neutral-700 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
          Uma mentoria com ebook criada para profissionais independentes da estética que querem
          organizar o negócio, atrair clientes, cobrar melhor e aumentar a renda com os serviços que
          já oferecem. Você já tem a habilidade. Agora vai aprender a transformá-la em renda.
        </p>

        <div className="space-y-4 mb-12">
          {[
            { l: "R", t: "Reconhecimento", d: "Deixe de parecer \"mais uma\" e construa uma imagem profissional — mesmo atendendo em casa ou a domicílio." },
            { l: "E", t: "Estrutura", d: "Organize agenda, clientes, WhatsApp, dinheiro e rotina. Pare de viver apagando incêndio." },
            { l: "N", t: "Nome", d: "Fortaleça sua reputação, seja lembrada e faça as pessoas reconhecerem seu trabalho." },
            { l: "D", t: "Divulgação", d: "O que publicar e como usar Instagram e WhatsApp para atrair clientes com consistência." },
            { l: "A", t: "Aumento", d: "Aumente ticket, crie retorno, venda pacotes e faça clientes voltarem. Ganhe melhor, não mais horas." },
          ].map(({ l, t, d }) => (
            <div key={l} className="flex gap-5 p-5 rounded-2xl border border-neutral-200 hover:border-neutral-900 transition-colors">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-neutral-900 text-white font-bold text-2xl flex items-center justify-center">
                {l}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{t}</h3>
                <p className="text-neutral-600 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            Acesso completo
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Método R.E.N.D.A.</h3>
          <ul className="text-neutral-700 space-y-2 mb-8 max-w-md mx-auto text-left">
            {[
              "Ebook completo com o método R.E.N.D.A.",
              "Mentoria para aplicação prática",
              "Plano de 30 dias passo a passo",
              "Templates de WhatsApp e Instagram",
              "Acesso imediato após a compra",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <Check className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5" />
                {i}
              </li>
            ))}
          </ul>
          <CTA />
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="bg-neutral-50 border-y border-neutral-200 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Um método criado para a realidade da profissional da estética.
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-5">
            O Método R.E.N.D.A. nasceu para ajudar profissionais da estética em Angola que já
            trabalham, já atendem clientes, mas ainda sentem que o negócio não está organizado como
            deveria. A proposta é simples: mostrar, passo a passo, como sair do improviso e
            construir uma rotina mais clara para vender, atender, divulgar e ganhar melhor.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mb-5">
            Você não precisa entender de marketing, gestão ou vendas para começar. O método foi
            construído com linguagem simples, exemplos práticos e orientação direta — para que você
            entenda o que fazer mesmo que hoje se sinta perdida.
          </p>
          <p className="text-xl font-bold leading-tight">
            Você não vai receber apenas informação. Vai receber uma direção clara para parar de
            tentar tudo ao mesmo tempo e começar a aplicar o que realmente gera renda.
          </p>
        </div>
      </section>

      {/* CTA REFORÇADO */}
      <section className="max-w-4xl mx-auto px-5 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 max-w-3xl mx-auto">
          Chegou a hora de parar de improvisar com o seu dinheiro.
        </h2>
        <p className="text-lg text-neutral-700 leading-relaxed mb-4 max-w-2xl mx-auto">
          Daqui a 30 dias você pode continuar com a mesma rotina: responder sem ordem, postar sem
          estratégia, aceitar descontos, não saber quanto lucrou e esperar indicação aparecer.
        </p>
        <p className="text-lg text-neutral-900 font-semibold leading-relaxed mb-10 max-w-2xl mx-auto">
          Ou pode começar agora a organizar seu negócio com um método criado para transformar sua
          habilidade em renda.
        </p>
        <CTA label="Quero começar minha Renda em 30 dias" />
        <p className="text-sm text-neutral-500 mt-6 max-w-xl mx-auto">
          Quanto mais tempo você adia, mais dinheiro pode estar escapando todos os dias em
          descontos, falhas no atendimento e divulgação sem estratégia.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            {
              q: "Esse método serve para quem atende em casa?",
              a: "Sim. Foi pensado também para quem atende em casa, a domicílio, em sala alugada, pequeno studio ou espaço próprio. O foco é fazer seu trabalho parecer mais profissional e gerar mais renda, independentemente do tamanho da sua estrutura.",
            },
            {
              q: "Preciso ter muitos clientes para aplicar?",
              a: "Não. O método serve para quem já atende e quer organizar melhor o negócio, e também ajuda quem ainda tem poucos clientes e precisa criar mais consistência na divulgação e nas vendas.",
            },
            {
              q: "Vou aprender técnica de estética?",
              a: "Não é o foco. O Método R.E.N.D.A. não é um curso técnico de procedimento. Ele ensina como organizar, posicionar, divulgar, vender melhor e aumentar a renda com o serviço que você já sabe fazer.",
            },
            {
              q: "O resultado é garantido em 30 dias?",
              a: "O método entrega um plano prático para criar oportunidades reais de renda em 30 dias. Os resultados dependem da aplicação, da realidade de cada profissional e da consistência na execução.",
            },
            {
              q: "Tenho medo de cobrar mais e perder clientes. Isso vai me ajudar?",
              a: "Sim. Um dos pontos do método é ensinar como aumentar a percepção de valor do seu serviço, para que você cobre com mais segurança e pare de depender apenas de preço baixo para vender.",
            },
          ].map((f, i) => (
            <AccordionItem
              key={i}
              value={`f-${i}`}
              className="border border-neutral-200 rounded-xl px-5 bg-white"
            >
              <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-700 leading-relaxed text-base pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="max-w-5xl mx-auto px-5 text-sm text-neutral-500 space-y-3">
          <div className="flex flex-wrap gap-4">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">Comprar</a>
            <Link to="/quiz-renda" className="hover:text-neutral-900">Refazer diagnóstico</Link>
          </div>
          <p>
            Aviso: os resultados podem variar conforme aplicação individual, mercado, rotina e nível
            de execução.
          </p>
          <p>© {new Date().getFullYear()} Método R.E.N.D.A. — Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Renda;
