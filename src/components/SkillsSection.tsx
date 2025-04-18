
import { 
  Code, Database, Server, Brain, 
  GitBranch, Laptop, CloudCog, LineChart 
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="text-primary" size={24} />,
      skills: ["Python", "Java", "JavaScript"]
    },
    {
      title: "Tools",
      icon: <GitBranch className="text-primary" size={24} />,
      skills: ["Git", "GitHub", "Power BI", "Docker", "Kubernetes"]
    },
    {
      title: "Cloud",
      icon: <CloudCog className="text-primary" size={24} />,
      skills: ["Cloud Platforms", "AWS", "Azure"]
    },
    {
      title: "AI/ML",
      icon: <Brain className="text-primary" size={24} />,
      skills: [
        "Time Series Forecasting", 
        "Neural Networks", 
        "RAGs", 
        "Reinforcement Learning", 
        "Isolation Forest", 
        "Monte Carlo Simulation", 
        "Bayesian Models"
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="space-y-12">
        <h2 className="section-title">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-xl p-6 border shadow-sm animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
