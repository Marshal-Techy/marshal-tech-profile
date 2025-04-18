
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-muted/30">
      <div className="space-y-12">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always open to discussing new projects and ideas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="text-primary" size={20} />
                </div>
                <a href="mailto:mahanthesh.s.karadi999@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  mahanthesh.s.karadi999@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="text-primary" size={20} />
                </div>
                <a href="tel:+918904767631" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 8904767631
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Marshal-Techy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mahanthesh-s-karadi-9522a9261"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/mahanthesh.s.k"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium block mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium block mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
