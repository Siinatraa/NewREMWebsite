import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-card/50 backdrop-blur-sm mt-20">
      <div className="content-wrapper py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} REM Analysis. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Documenting the journey through malware reverse engineering
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/daniel-richardson-100b70308/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
