import { BarChart3, Code2, Brain, Database } from "lucide-react";

const skillCategories = [
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Transforming complex data into compelling visual stories",
    skills: ["Charts & Graphs", "Dashboard Design", "Statistical Plots", "Interactive Visuals"],
  },
  {
    icon: Brain,
    title: "Statistical Analysis",
    description: "Extracting meaningful insights from data patterns",
    skills: ["Hypothesis Testing", "Regression Analysis", "Probability", "Data Modeling"],
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building beautiful, responsive user interfaces",
    skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
  },
  {
    icon: Database,
    title: "Tools & Technologies",
    description: "Technical toolkit for data and development",
    skills: ["Python", "Oracle SQL", "JFLAP", "Reinforcement Learning"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
              Skills & <span className="gradient-text">Interests</span>
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group card-gradient rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold font-heading mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
