
import { Github, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "BuildSmart AI",
    description: "Construction Management Dashboard with 12 integrated AI/ML models for cost, labor, emissions & predictions.",
    techStack: ["Python", "Machine Learning", "React", "Dashboard"],
    github: "https://github.com/Marshal-Techy",
    demo: "#",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Trained an ML model to detect anomalous financial transactions using advanced algorithms.",
    techStack: ["Python", "Machine Learning", "Data Analysis", "Classification"],
    github: "https://github.com/Marshal-Techy",
    demo: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Crane Project",
    description: "Remote Equipment Monitoring & Predictive Maintenance Dashboard using Bharath Pi for real-time insights and performance monitoring of heavy machinery.",
    techStack: ["IoT", "Python", "Machine Learning", "Dashboard", "Predictive Analytics"],
    github: "https://github.com/Marshal-Techy",
    demo: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/30">
      <div className="space-y-12">
        <h2 className="section-title">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card flex flex-col animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative mb-4 rounded-lg overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <Button variant="outline" size="sm" asChild className="flex gap-1 items-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </Button>
                <Button size="sm" asChild className="flex gap-1 items-center">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
