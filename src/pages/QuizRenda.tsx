import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

const CHECKOUT_URL = "https://pay.kursinha.com/c/6a04dbae59995e700cb427c0";

const questions = [
  {
    q: "Hoje, como você organiza sua agenda de atendimentos?",
    options: [
      "Anoto onde dá: WhatsApp, caderno, memória ou mensagens soltas. Às vezes esqueço horários ou preciso confirmar tudo várias vezes.",
      "Tenho uma forma de anotar, mas ainda faço muitos encaixes, mudanças e controles manuais.",
      "Tenho agenda organizada, horários definidos, controle de remarcações e consigo visualizar minha semana com clareza.",
    ],
  },
  {
    q: "Você sabe exatamente quanto ganhou e quanto lucrou no mês passado?",
    options: [
      "Não. Eu sei que entrou dinheiro, mas não sei quanto sobrou de verdade.",
      "Tenho uma noção, mas ainda misturo dinheiro pessoal, material, transporte e gastos do negócio.",
      "Sim. Sei quanto entrou, quanto saiu, quanto foi lucro e consigo acompanhar meus números.",
    ],
  },
  {
    q: "Como você costuma conseguir novas clientes?",
    options: [
      "Dependo muito de indicação, sorte ou alguém lembrar de mim.",
      "Tenho algumas indicações e posto no Instagram, mas não tenho constância nem estratégia clara.",
      "Tenho canais ativos de divulgação, faço conteúdo com intenção e consigo gerar procura com mais previsibilidade.",
    ],
  },
  {
    q: "Quando uma cliente diz \"está caro\", o que você faz?",
    options: [
      "Fico insegura e penso logo em baixar o preço para não perder a cliente.",
      "Tento explicar o valor, mas nem sempre consigo manter segurança na conversa.",
      "Sei explicar meu serviço, meu diferencial e consigo defender meu preço com postura profissional.",
    ],
  },
  {
    q: "Como está o seu WhatsApp de atendimento?",
    options: [
      "Bagunçado. Tem mensagens perdidas, clientes sem resposta, orçamentos esquecidos e conversas sem fechamento.",
      "Respondo as clientes, mas ainda não tenho um modelo claro para conduzir até o agendamento.",
      "Tenho uma forma organizada de responder, apresentar valores, tirar dúvidas e chamar para o agendamento.",
    ],
  },
  {
    q: "O seu Instagram ajuda a vender seus serviços?",
    options: [
      "Não muito. Eu posto, mas quase ninguém chama ou marca horário.",
      "Às vezes funciona, mas ainda não sei exatamente o que postar para atrair clientes certas.",
      "Sim. Meu Instagram mostra meu trabalho, gera confiança e ajuda a levar pessoas para o WhatsApp.",
    ],
  },
  {
    q: "Você tem clientes que voltam com frequência?",
    options: [
      "Poucas. Muitas fazem uma vez e depois somem.",
      "Algumas voltam, mas eu não tenho um processo para lembrar, fidelizar ou vender retorno.",
      "Sim. Tenho estratégias para manutenção, pacotes, retorno e relacionamento com clientes antigas.",
    ],
  },
  {
    q: "Como você se sente em relação ao seu preço?",
    options: [
      "Sinto que cobro pouco, mas tenho medo de aumentar.",
      "Sei que poderia cobrar melhor, mas ainda não tenho segurança para mudar isso.",
      "Cobro de forma mais consciente e consigo alinhar preço com valor percebido.",
    ],
  },
  {
    q: "Você sente que trabalha muito, mas a renda continua instável?",
    options: [
      "Sim. Parece que todo mês começo do zero.",
      "Às vezes. Tenho meses bons, mas não consigo manter constância.",
      "Não tanto. Tenho mais controle sobre agenda, clientes, retorno e ganhos.",
    ],
  },
  {
    q: "Hoje, você vê seu trabalho na estética como um negócio?",
    options: [
      "Ainda não. Eu sinto que faço atendimentos, mas não tenho estrutura de negócio.",
      "Estou começando a enxergar assim, mas ainda falta organização, posicionamento e plano.",
      "Sim. Eu trato minha estética como negócio e tomo decisões com mais clareza.",
    ],
  },
];

const getDiagnosis = (score: number) => {
  if (score <= 16) {
    return {
      title: "Profissional no Improviso",
      level: "Nível 1",
      summary:
        "Você tem talento e atende clientes, mas o seu negócio ainda funciona no improviso. Agenda solta, dinheiro misturado, divulgação sem estratégia e medo de cobrar mais. Isso não é falha sua — é falta de método.",
      message:
        "A boa notícia: tudo isso pode ser organizado em 30 dias com um plano simples e prático. Você está exatamente no perfil que mais ganha aplicando o Método R.E.N.D.A.",
    };
  }
  if (score <= 23) {
    return {
      title: "Profissional em Construção",
      level: "Nível 2",
      summary:
        "Você já deu passos importantes: tem alguma organização, posta no Instagram, tenta cobrar melhor. Mas ainda falta consistência, estratégia clara e processos para transformar esforço em renda previsível.",
      message:
        "Você está pronta para o próximo salto. O Método R.E.N.D.A. vai dar a estrutura que falta para você parar de oscilar e começar a crescer com constância.",
    };
  }
  return {
    title: "Profissional Pronta para Escalar",
    level: "Nível 3",
    summary:
      "Você já trata sua estética como negócio: tem agenda, números, divulgação e postura. Está pronta para o próximo nível — aumentar ticket, criar retorno, vender pacotes e escalar com mais inteligência.",
    message:
      "O Método R.E.N.D.A. vai te ajudar a destravar mais renda sem precisar trabalhar mais horas. Foco em valor, posicionamento e crescimento.",
  };
};

const QuizRenda = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const progress = done ? 100 : (step / questions.length) * 100;

  const select = (idx: number) => {
    const next = [...answers];
    next[step] = idx + 1;
    setAnswers(next);
    setTimeout(() => {
      if (step < questions.length - 1) setStep(step + 1);
      else setDone(true);
    }, 180);
  };

  const score = answers.reduce((a, b) => a + b, 0);
  const diag = getDiagnosis(score);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <header className="border-b border-neutral-200">
        <div className="max-w-2xl mx-auto px-5 py-5 flex items-center justify-between">
          <Link to="/" className="font-bold tracking-tight text-neutral-900">
            Método R.E.N.D.A.
          </Link>
          <span className="text-xs text-neutral-500 uppercase tracking-wider">Diagnóstico</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-5 py-10 md:py-16">
        {!done ? (
          <>
            <div className="mb-8">
              <div className="flex justify-between text-xs text-neutral-500 mb-2">
                <span>Pergunta {step + 1} de {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-neutral-900 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-8">
              {questions[step].q}
            </h1>

            <div className="space-y-3">
              {questions[step].options.map((opt, i) => {
                const selected = answers[step] === i + 1;
                return (
                  <button
                    key={i}
                    onClick={() => select(i)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all hover:border-neutral-900 hover:bg-neutral-50 ${
                      selected ? "border-neutral-900 bg-neutral-50" : "border-neutral-200"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span className="font-bold text-neutral-900 flex-shrink-0">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-neutral-700 leading-relaxed">{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900"
              >
                <ArrowLeft className="w-4 h-4" /> Voltar
              </button>
            )}
          </>
        ) : (
          <div className="animate-in fade-in duration-500">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-semibold mb-6">
              <CheckCircle2 className="w-3.5 h-3.5" /> {diag.level} — {score}/30 pontos
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-5">
              Diagnóstico: {diag.title}
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed mb-5">{diag.summary}</p>
            <p className="text-lg text-neutral-900 font-medium leading-relaxed mb-10">
              {diag.message}
            </p>

            <div className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-neutral-50">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                O próximo passo é o Método R.E.N.D.A.
              </h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Um plano de 30 dias para organizar agenda, cobrar com segurança, divulgar com
                estratégia e aumentar a renda com os serviços que você já oferece.
              </p>
              <Link
                to="/renda"
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-neutral-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Ver o Método R.E.N.D.A. <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-center text-sm text-neutral-500 hover:text-neutral-900 underline"
              >
                Ou ir direto para o checkout
              </a>
            </div>

            <button
              onClick={() => {
                setAnswers([]);
                setStep(0);
                setDone(false);
              }}
              className="mt-8 text-sm text-neutral-500 hover:text-neutral-900"
            >
              Refazer o quiz
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuizRenda;
