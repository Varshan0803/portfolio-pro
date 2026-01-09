import { ExternalLink, Brain, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
              Featured <span className="gradient-text">Project</span>
            </h2>
          </div>

          {/* Project card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl opacity-30" />
            
            <div className="relative card-gradient rounded-3xl border border-border/50 overflow-hidden">
              {/* Project header */}
              <div className="p-8 md:p-12 border-b border-border/50">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      <Brain className="w-3 h-3" />
                      Machine Learning
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading">
                      Reinforcement Learning for Smart Elevator Control
                    </h3>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Description */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Objective</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Design and implement an intelligent elevator control system using AI to dynamically 
                        optimize passenger waiting time, reduce overall travel time, and improve energy efficiency.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Outcome</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        A trained AI agent capable of making dynamic, strategic decisions that surpass 
                        rigid rule-based systems, with measurable improvements in key metrics like 
                        average waiting time and total passenger journey time.
                      </p>
                    </div>
                  </div>

                  {/* Tech stack & highlights */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Python",
                          "Reinforcement Learning",
                          "Deep Q-Network (DQN)",
                          "stable_baselines3",
                          "gymnasium",
                          "Computer Vision",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-lg bg-secondary border border-border/50 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key highlights */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-effect rounded-xl p-4 text-center">
                        <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">Reduced</p>
                        <p className="font-semibold">Wait Time</p>
                      </div>
                      <div className="glass-effect rounded-xl p-4 text-center">
                        <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">Improved</p>
                        <p className="font-semibold">Efficiency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
