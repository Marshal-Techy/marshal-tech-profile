
import { UserRound, MapPin, GraduationCap, Coffee } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/30">
      <div className="space-y-12">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3">
              <UserRound className="text-primary" size={24} />
              <h3 className="text-2xl font-semibold">Who Am I?</h3>
            </div>
            <p className="text-muted-foreground">
              I'm Mahanthesh S. Karadi, also known as Marshal, an aspiring Software Engineer and Data Scientist with a passion for creating innovative solutions using AI and machine learning.
            </p>
            <p className="text-muted-foreground">
              From a middle-class family in a small town, my journey into tech has been fueled by curiosity, focus, and determination. Self-funding my education has given me a deep appreciation for the opportunities that come through hard work and perseverance.
            </p>
            <p className="text-muted-foreground">
              I'm driven by dreams of innovation and creating technology that solves real-world problems. My inspiration comes from visionaries like Elon Musk, and I'm committed to continuous learning and growth in this ever-evolving field.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">Originally from Hospet, now in Bengaluru, India</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Education</h4>
                  <p className="text-muted-foreground">Engineering Student at Cambridge Institute of Technology North Campus, Bengaluru</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Coffee className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Interests</h4>
                  <p className="text-muted-foreground">AI/ML, Innovation, Hackathons, Building Real-world Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
