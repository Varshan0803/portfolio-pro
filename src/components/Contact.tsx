import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              I'm always open to discussing new opportunities, internships, or interesting projects. 
              Feel free to reach out!
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:varshanraman0803@gmail.com"
              className="group card-gradient rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm break-all">varshanraman0803@gmail.com</p>
            </a>

            <a
              href="tel:+918428457774"
              className="group card-gradient rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+91 8428457774</p>
            </a>

            <div className="group card-gradient rounded-2xl p-8 border border-border/50 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Trichy, Tamil Nadu, India</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="gap-2 px-10 glow-effect" asChild>
              <a href="mailto:varshanraman0803@gmail.com">
                <Send className="w-4 h-4" />
                Send a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
