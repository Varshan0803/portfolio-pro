import { ArrowDown, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated glow background */}
      <div className="hero-glow top-1/4 left-1/4 animate-pulse-slow" />
      <div className="hero-glow bottom-1/4 right-1/4 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="gradient-text">Srivarshan</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in font-light" style={{ animationDelay: "0.2s" }}>
            Data Science Student
          </p>
          
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Passionate about transforming data into insights and building beautiful user experiences. 
            Currently pursuing Integrated MSc in Data Science at Amrita Vishwa Vidyapeetham.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="gap-2 px-8 glow-effect" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>

          {/* Contact info pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a 
              href="mailto:varshanraman0803@gmail.com" 
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect hover:bg-secondary/50 transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">varshanraman0803@gmail.com</span>
            </a>
            <a 
              href="tel:+918428457774" 
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect hover:bg-secondary/50 transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">+91 8428457774</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
