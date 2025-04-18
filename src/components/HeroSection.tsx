
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-primary">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Mahanthesh S. Karadi
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground">
              Aspiring Software Engineer | Data Scientist | Innovator
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl">
            Passionate techie building intelligent, real-world solutions using AI/ML. 
            Driven by innovation, inspired by Elon Musk, and always hungry to learn and create.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild className="rounded-full">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild className="rounded-full">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/Marshal-Techy"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahanthesh-s-karadi-9522a9261"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Resume"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-purple-light/20 to-purple-dark/30 rounded-2xl flex items-center justify-center">
            <div className="relative w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-light to-marshal-secondary opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-white">M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
