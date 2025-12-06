import { Lock, FileSearch } from 'lucide-react';

export function CrackmePage() {
  return (
    <div className="content-wrapper py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 mb-6">
            <Lock className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="glow-text mb-4">Crackme Challenges</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reverse engineering challenges focusing on binary analysis and protection mechanisms
          </p>
        </div>

        {/* Empty State */}
        <div className="tech-card text-center py-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <FileSearch className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground mb-6">
            Crackme challenge solutions and analysis will be added here.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-mono">
            <span className="animate-pulse">●</span>
            <span>Work in Progress</span>
          </div>
        </div>

        {/* Information Card */}
        <div className="mt-8 bg-muted/30 rounded-lg p-6 border border-border animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h3 className="text-lg font-semibold mb-3 text-secondary">What to Expect</h3>
          <ul className="space-y-2 text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">▹</span>
              <span>Binary analysis and disassembly techniques</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">▹</span>
              <span>Bypassing protection mechanisms and anti-debugging</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">▹</span>
              <span>Reverse engineering tools and methodologies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">▹</span>
              <span>Code analysis and algorithm recovery</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
