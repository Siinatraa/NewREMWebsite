import { Terminal, ChevronDown, ChevronRight, Shield } from 'lucide-react';
import { useState } from 'react';

// Red Team CTF write-ups page

export function RedTeamPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['easy']);
  const [expandedWriteups, setExpandedWriteups] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const toggleWriteup = (writeup: string) => {
    setExpandedWriteups(prev => 
      prev.includes(writeup) 
        ? prev.filter(w => w !== writeup)
        : [...prev, writeup]
    );
  };

  return (
    <div className="content-wrapper py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-6">
            <Terminal className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="glow-text mb-4">Red Team Operations</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offensive security CTF write-ups and penetration testing techniques from Hack The Box
          </p>
        </div>

        {/* Info Banner */}
        <div className="tech-card mb-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30 animate-fade-in">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Ethical Hacking Notice</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                All techniques and exploits documented here are used exclusively in authorized lab environments. 
                These write-ups are for educational purposes only. Always practice responsible disclosure and obtain proper authorization.
              </p>
            </div>
          </div>
        </div>

        {/* Easy Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '100ms' }} data-section="easy">
          <button
            onClick={() => toggleSection('easy')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-sm font-semibold">EASY</span>
              <h2 className="text-2xl font-bold">Easy Machines</h2>
            </div>
            {expandedSections.includes('easy') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('easy') && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-center py-8">No write-ups yet. New content coming soon...</p>
            </div>
          )}
        </div>

        {/* Medium Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <button
            onClick={() => toggleSection('medium')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-sm font-semibold">MEDIUM</span>
              <h2 className="text-2xl font-bold">Medium Machines</h2>
            </div>
            {expandedSections.includes('medium') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('medium') && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-center py-8">No write-ups yet. New content coming soon...</p>
            </div>
          )}
        </div>

        {/* Hard Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <button
            onClick={() => toggleSection('hard')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-md text-sm font-semibold">HARD</span>
              <h2 className="text-2xl font-bold">Hard Machines</h2>
            </div>
            {expandedSections.includes('hard') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('hard') && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-center py-8">No write-ups yet. New content coming soon...</p>
            </div>
          )}
        </div>

        {/* Insane Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <button
            onClick={() => toggleSection('insane')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-md text-sm font-semibold">INSANE</span>
              <h2 className="text-2xl font-bold">Insane Machines</h2>
            </div>
            {expandedSections.includes('insane') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('insane') && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-center py-8">No write-ups yet. New content coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
