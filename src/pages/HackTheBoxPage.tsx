import { Bug, FileSearch } from 'lucide-react';

export function HackTheBoxPage() {
  return (
    <div className="content-wrapper py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
            <Bug className="w-8 h-8 text-primary" />
          </div>
          <h1 className="glow-text mb-4">Hack the Box</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sherlock CTF write-ups and analysis documenting my journey through malware analysis challenges
          </p>
        </div>

        {/* Empty State */}
        <div className="tech-card text-center py-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <FileSearch className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground mb-6">
            Write-ups and analysis will be added here as I progress through challenges.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-mono">
            <span className="animate-pulse">●</span>
            <span>Work in Progress</span>
          </div>
        </div>

        {/* Information Card */}
        <div className="mt-8 bg-muted/30 rounded-lg p-6 border border-border animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h3 className="text-lg font-semibold mb-3 text-primary">What to Expect</h3>
          <ul className="space-y-2 text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Detailed Sherlock CTF challenge walkthroughs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Malware behavior analysis and indicators of compromise</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Tools and techniques used for analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Lessons learned and key takeaways</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
