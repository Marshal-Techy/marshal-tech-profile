
import { Award, Brain, Certificate, Lightbulb } from "lucide-react";

const achievements = [
  {
    title: "Winner – Dynamic Hackathon 2025",
    description: "Built a Predictive Maintenance Dashboard using Bharath Pi",
    icon: <Award className="text-primary" size={24} />
  },
  {
    title: "Runner-up – HackToFuture 3.0 Grand Finale",
    description: "Top 36 out of 700+ teams",
    icon: <Award className="text-primary" size={24} />
  },
  {
    title: "Samsung Innovation Campus Team",
    description: "Selected as part of the elite innovation team",
    icon: <Brain className="text-primary" size={24} />
  },
  {
    title: "National Idea Pitching – Genesis Code AI",
    description: "App generation without code",
    icon: <Lightbulb className="text-primary" size={24} />
  },
  {
    title: "Certifications",
    description: "Edufabrica AI Workshop, Amazon Bedrock x AstraDB, Career Essentials in GenAI by Microsoft",
    icon: <Certificate className="text-primary" size={24} />
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements">
      <div className="space-y-12">
        <h2 className="section-title">Achievements</h2>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="achievement-card animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
