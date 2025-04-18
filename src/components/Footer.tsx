
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-card py-10 px-6 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <a href="#home" className="font-heading text-xl font-bold">
            Marshal<span className="text-primary">.</span>
          </a>
          <p className="text-muted-foreground text-sm mt-2">
            &copy; {new Date().getFullYear()} Mahanthesh S. Karadi. All rights reserved.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
