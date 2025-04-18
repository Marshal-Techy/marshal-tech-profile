
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <motion.h2 
              className="text-2xl font-medium text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Mahanthesh S. Karadi
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-medium text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Aspiring Software Engineer | Data Scientist | Innovator
            </motion.p>
          </div>

          <motion.p 
            className="text-lg text-muted-foreground max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Passionate techie building intelligent, real-world solutions using AI/ML. 
            Driven by innovation, inspired by Elon Musk, and always hungry to learn and create.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              asChild 
              className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className="rounded-full border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>

          <motion.div 
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://github.com/Marshal-Techy"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:scale-110 transition-transform duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahanthesh-s-karadi-9522a9261"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:scale-110 transition-transform duration-300"
              aria-label="Resume"
            >
              <FileText size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-purple-light/20 to-purple-dark/30 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
            <div className="relative w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-lg">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-light to-marshal-secondary opacity-80"
                animate={{ 
                  background: ["linear-gradient(to br, #9b87f5, #8B5CF6)", "linear-gradient(to br, #8B5CF6, #9b87f5)"] 
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">M</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
