import { Award, GraduationCap } from 'lucide-react';

const certifications = [
  {
    vendor: 'CompTIA',
    certs: ['ITF+', 'A+', 'Net+', 'Sec+', 'CySA+', 'Pentest+'],
  },
  {
    vendor: 'ISC2',
    certs: ['CCSP'],
  },
  {
    vendor: 'TryHackMe',
    certs: ['SAL1'],
  },
  {
    vendor: 'INE',
    certs: ['eJPT'],
  },
  {
    vendor: 'Security Blue Team',
    certs: ['BTL1'],
  },
  {
    vendor: 'GIAC SANS',
    certs: ['GCFA'],
  },
];

export function AboutPage() {
  return (
    <div className="content-wrapper py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="glow-text mb-4">About Me</h1>
          <p className="text-muted-foreground">
            Background & Experience | Education | Professional Certifications
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-xl" />
            <img
              src="https://cdn-ai.onspace.ai/onspace/project/uploads/igcsn29ooWY7xWchZmyjKE/emblem_(1).png"
              alt="Space Force Emblem"
              className="relative w-48 h-auto object-contain"
            />
          </div>
        </div>

        {/* Biography */}
        <div className="tech-card mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Background & Experience
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I currently serve as a Cyber D-Shred in the United States Space Force, having transferred from a non-cyber background in the Navy in 2023. Since making the jump I’ve gone down the cybersecurity rabbit hole exploring everything from Pentesting and Red Teaming to Digital Forensics and recently found Reverse Engineering Malware (REM) to be particularly interesting.
            </p>
            <p>
              I worked my way up from a SOC Analyst to Incident Responder and currently hold the position Crew Chief in leading my own Crew of Cyber Operators. At the current time my goal is to pass the GIAC FOR610 GREM Certification. I made this website to document my progress in REM by posting Write Ups for Hack the Box's Malware Analysis Sherlock CTFs. As time goes on and I improve I plan on doing full write ups on legitimate Malware and possibly adding different content as well.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="tech-card mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-secondary" />
            Education
          </h2>
          <div className="bg-muted/30 rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Bachelor's Degree in Cybersecurity
            </h3>
            <p className="text-muted-foreground">Western Governors University (WGU)</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="tech-card animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((vendor, index) => (
              <div
                key={vendor.vendor}
                className="bg-muted/30 rounded-lg p-6 border border-border hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${500 + index * 50}ms` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {vendor.vendor}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {vendor.certs.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 bg-background rounded-md text-sm font-mono text-foreground/90 border border-border"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Goal */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p className="text-lg font-semibold text-primary mb-2">Current Goal</p>
          <p className="text-2xl font-bold glow-text">
            GIAC FOR610 GREM Certification
          </p>
          <p className="text-muted-foreground mt-2">
            Reverse Engineering Malware
          </p>
        </div>
      </div>
    </div>
  );
}
