const Footer = () => {
  return (
    <footer className="py-10 bg-primary border-t border-primary-foreground/10">
      <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/60 text-sm">
        <p className="font-display font-semibold text-primary-foreground">Aquisição Dental</p>
        <p>© {new Date().getFullYear()} · Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
