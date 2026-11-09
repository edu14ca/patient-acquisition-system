import BrandPattern from "./BrandPattern";

/** Faixa vermelha com a frase-mãe da marca: o momento forte da home. */
const StatsBand = () => {
  return (
    <section className="theme-red relative overflow-hidden py-24 md:py-32">
      <BrandPattern className="sd-pattern invert -right-10 -top-16 h-[150%] w-auto" opacity={0.14} />
      <div className="container-tight relative">
        <p className="font-display font-extrabold text-[44px] leading-[0.98] sm:text-6xl lg:text-[88px] tracking-[-0.045em] max-w-[14ch]">
          Crescer não é fazer mais. É acertar mais.
        </p>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Primeiro encontramos onde a sua empresa perde vendas. Só depois decidimos onde investir.
        </p>
      </div>
    </section>
  );
};

export default StatsBand;
