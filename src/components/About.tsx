import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
              Background & <span className="gradient-text">Education</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Data Science student with a strong foundation in statistical analysis, 
                data visualization, and front-end development. My journey in tech began with a curiosity 
                for how data drives decisions and how beautiful interfaces enhance user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my Integrated MSc in Data Science, I'm focused on combining 
                analytical thinking with creative problem-solving to build impactful solutions.
              </p>
              
              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="glass-effect rounded-xl p-4">
                  <MapPin className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-medium">Trichy, India</p>
                </div>
                <div className="glass-effect rounded-xl p-4">
                  <Calendar className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p className="font-medium">20 years</p>
                </div>
              </div>
            </div>

            {/* Education timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold font-heading flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              
              <div className="space-y-4">
                {/* Current education */}
                <div className="card-gradient rounded-xl p-6 border border-border/50 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">2022 - 2027</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Current</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-1">Integrated MSc Data Science</h4>
                  <p className="text-muted-foreground text-sm mb-2">Amrita Vishwa Vidyapeetham</p>
                  <p className="text-sm text-primary font-medium">CGPA: 7.8 / 10</p>
                </div>

                {/* Higher secondary */}
                <div className="card-gradient rounded-xl p-6 border border-border/50 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-muted-foreground/30" />
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">2020 - 2022</span>
                  <h4 className="text-lg font-semibold mt-2 mb-1">Higher Secondary (XII)</h4>
                  <p className="text-muted-foreground text-sm mb-2">Montfort School • CBSE</p>
                  <p className="text-sm text-muted-foreground">Computer Science - Mathematics • <span className="text-foreground font-medium">82%</span></p>
                </div>

                {/* Secondary */}
                <div className="card-gradient rounded-xl p-6 border border-border/50 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-muted-foreground/30" />
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">2020</span>
                  <h4 className="text-lg font-semibold mt-2 mb-1">Secondary Education (X)</h4>
                  <p className="text-muted-foreground text-sm mb-2">Montfort School • CBSE</p>
                  <p className="text-sm text-foreground font-medium">84%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
