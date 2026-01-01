import { Link } from 'react-router-dom';
import { Bug, Lock, Skull, FileText, ChevronRight } from 'lucide-react';

const categories = [
  {
    title: 'Hack the Box',
    description: 'Sherlock CTF write-ups and analysis documenting my journey through malware analysis challenges.',
    icon: Bug,
    path: '/hack-the-box',
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    title: 'MalOps',
    description: 'Reverse engineering challenges focusing on binary analysis and protection mechanisms.',
    icon: Lock,
    path: '/malops',
    gradient: 'from-secondary/20 to-secondary/5',
  },
  {
    title: 'Real Malware Analysis',
    description: 'In-depth analysis of legitimate malware samples, dissecting behavior and attack vectors.',
    icon: Skull,
    path: '/real-malware',
    gradient: 'from-destructive/20 to-destructive/5',
  },
  {
    title: 'Other',
    description: 'Additional content, resources, and write-ups related to malware analysis and cybersecurity.',
    icon: FileText,
    path: '/other',
    gradient: 'from-accent/20 to-accent/5',
  },
];

export function HomePage() {
  return (
    <div className="content-wrapper">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="glow-text mb-6">
            REM Analysis
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Reverse Engineering Malware
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            This is a side project for documenting my progress in Reversing Malware and exploring Malware Analysis in preparation for the SAN FOR610 GREM Certification
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              About Me
            </Link>
            <a
              href="https://www.linkedin.com/in/daniel-richardson-100b70308/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-card border border-border rounded-lg font-medium hover:border-primary/50 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Analysis Categories</h2>
          <p className="text-muted-foreground">
            Explore different aspects of malware analysis and reverse engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.path}
                to={category.path}
                className="tech-card group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Learning Path</h2>
          <p className="text-muted-foreground">
            Building expertise across key malware analysis domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            'Static Binary Analysis',
            'Assembly & Disassembly',
            'Dynamic & Behavioral Analysis',
            'Deobfuscation Techniques',
            'Digital Forensics',
            'Network Traffic Analysis'
          ].map((skill, index) => (
            <div
              key={skill}
              className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse" />
                <p className="font-mono text-sm text-foreground/90 group-hover:text-primary transition-colors">{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
