
import { Award, Brain, Star, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

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
    icon: <Star className="text-primary" size={24} />
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements">
      <div className="space-y-12">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.title}
              className="achievement-card group hover:bg-primary/5 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
