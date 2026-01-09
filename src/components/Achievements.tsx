import { Trophy, Medal, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "2x Math Minds Winner",
    event: "Login 2023 & 2024",
    location: "PSG College of Technology",
    date: "September 2024",
  },
  {
    icon: Medal,
    title: "AlgoCode Runners",
    event: "Coding Competition",
    location: "PSG College of Technology",
    date: "2024",
  },
  {
    icon: Star,
    title: "Squid Math Competition Winner",
    event: "Math-Logic Quiz Competition",
    location: "Anokha Tech Festival, Amrita Vishwa Vidyapeetham",
    date: "August 2023",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Recognition</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
              Achievements & <span className="gradient-text">Awards</span>
            </h2>
          </div>

          {/* Achievements grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group card-gradient rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2">{achievement.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{achievement.event}</p>
                <p className="text-muted-foreground text-sm mb-1">{achievement.location}</p>
                <p className="text-muted-foreground/60 text-xs">{achievement.date}</p>
              </div>
            ))}
          </div>

          {/* Extra curricular */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 glass-effect rounded-full px-8 py-4">
              <span className="text-muted-foreground">Also enjoys playing</span>
              <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Cricket</span>
              <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Football</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
