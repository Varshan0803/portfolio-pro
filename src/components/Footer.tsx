const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-heading gradient-text">SR</span>
            <span className="text-muted-foreground text-sm">Srivarshan S R</span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <p className="text-sm text-muted-foreground/60">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
