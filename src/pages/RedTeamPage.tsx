import { Terminal, ChevronDown, ChevronRight, Shield, ArrowLeft, Skull, Swords, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Red Team CTF write-ups page

export function RedTeamPage() {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
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
    <div className="min-h-screen bg-black relative">
      {/* Custom Red Team Header */}
      <header className="sticky top-0 z-50 border-b border-red-500/30 bg-black/90 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <Swords className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors" />
              <div>
                <span className="text-xl font-bold text-red-500" style={{ textShadow: '0 0 20px rgba(239, 68, 68, 0.5)' }}>Red Team Ops</span>
                <p className="text-xs text-red-400/70 font-mono">Offensive Security & Exploitation</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-red-400/80 hover:text-red-400 transition-colors font-mono">Home</Link>
              <Link to="/hack-the-box" className="text-sm font-medium text-red-400/80 hover:text-red-400 transition-colors font-mono">REM Analysis</Link>
              <Link to="/about" className="text-sm font-medium text-red-400/80 hover:text-red-400 transition-colors font-mono">About</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Background effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgb(239, 68, 68) 2px, rgb(239, 68, 68) 4px)',
          animation: 'scan 8s linear infinite'
        }} />
      </div>

      <div className="content-wrapper py-12 relative">

      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-red-950/30 hover:bg-red-900/40 border border-red-500/30 hover:border-red-500/60 text-red-400 rounded-lg transition-all group animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">Return to Home</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute inset-0 bg-red-500/30 rounded-lg blur-xl animate-pulse" />
            <div className="relative w-20 h-20 rounded-lg bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center border-2 border-red-500/50 shadow-lg shadow-red-500/50">
              <Skull className="w-10 h-10 text-red-200" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent" style={{
            textShadow: '0 0 30px rgba(239, 68, 68, 0.5)'
          }}>Red Team</h1>
          <p className="text-red-300/80 max-w-2xl mx-auto font-mono text-sm tracking-wider">
            CTF Write-ups • Penetration Testing • Exploitation Techniques
          </p>
        </div>

        {/* Info Banner */}
        <div className="relative mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="absolute inset-0 bg-red-500/5 rounded-lg blur-md" />
          <div className="relative bg-gradient-to-r from-red-950/90 to-red-900/90 border-2 border-red-500/50 rounded-lg p-6 shadow-lg shadow-red-500/20">
            <div className="flex items-start gap-4">
              <div className="relative">
                <Terminal className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div className="absolute inset-0 bg-red-500/30 blur-lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-2 font-mono tracking-wider">About Red Team Operations</h3>
                <p className="text-red-200/70 text-sm leading-relaxed font-mono">
                  Offensive security write-ups from Hack The Box CTF challenges. Documenting penetration testing techniques, exploitation methods, and privilege escalation tactics used in controlled lab environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Easy Difficulty Section */}
        <div className="relative mb-6 animate-fade-in" style={{ animationDelay: '200ms' }} data-section="easy">
          <div className="absolute inset-0 bg-red-500/5 rounded-lg blur-sm" />
          <div className="relative bg-gradient-to-br from-red-950/50 to-black/50 border-2 border-red-500/30 rounded-lg overflow-hidden backdrop-blur-sm">
            <button
              onClick={() => toggleSection('easy')}
              className="w-full flex items-center justify-between text-left p-6 hover:bg-red-500/10 transition-all rounded-lg group"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-sm font-bold font-mono border border-green-500/30">[ EASY ]</span>
                <h2 className="text-2xl font-bold text-red-100 group-hover:text-red-400 transition-colors">Easy Machines</h2>
              </div>
              {expandedSections.includes('easy') ? 
                <ChevronDown className="w-6 h-6 text-red-400" /> : 
                <ChevronRight className="w-6 h-6 text-red-400" />
              }
            </button>
            
            {expandedSections.includes('easy') && (
              <div className="px-6 pb-6 border-t border-red-500/20">
                <p className="text-red-300/60 text-center py-8 font-mono text-sm">&gt; No write-ups yet. New content coming soon...</p>
              </div>
            )}
          </div>
        </div>

        {/* Medium Difficulty Section */}
        <div className="relative mb-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="absolute inset-0 bg-red-500/5 rounded-lg blur-sm" />
          <div className="relative bg-gradient-to-br from-red-950/50 to-black/50 border-2 border-red-500/30 rounded-lg overflow-hidden backdrop-blur-sm">
            <button
              onClick={() => toggleSection('medium')}
              className="w-full flex items-center justify-between text-left p-6 hover:bg-red-500/10 transition-all rounded-lg group"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-sm font-bold font-mono border border-yellow-500/30">[ MEDIUM ]</span>
                <h2 className="text-2xl font-bold text-red-100 group-hover:text-red-400 transition-colors">Medium Machines</h2>
              </div>
              {expandedSections.includes('medium') ? 
                <ChevronDown className="w-6 h-6 text-red-400" /> : 
                <ChevronRight className="w-6 h-6 text-red-400" />
              }
            </button>
            
            {expandedSections.includes('medium') && (
              <div className="px-6 pb-6 border-t border-red-500/20">
                <p className="text-red-300/60 text-center py-8 font-mono text-sm">&gt; No write-ups yet. New content coming soon...</p>
              </div>
            )}
          </div>
        </div>

        {/* Hard Difficulty Section */}
        <div className="relative mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="absolute inset-0 bg-red-500/5 rounded-lg blur-sm" />
          <div className="relative bg-gradient-to-br from-red-950/50 to-black/50 border-2 border-red-500/30 rounded-lg overflow-hidden backdrop-blur-sm">
            <button
              onClick={() => toggleSection('hard')}
              className="w-full flex items-center justify-between text-left p-6 hover:bg-red-500/10 transition-all rounded-lg group"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-md text-sm font-bold font-mono border border-orange-500/30">[ HARD ]</span>
                <h2 className="text-2xl font-bold text-red-100 group-hover:text-red-400 transition-colors">Hard Machines</h2>
              </div>
              {expandedSections.includes('hard') ? 
                <ChevronDown className="w-6 h-6 text-red-400" /> : 
                <ChevronRight className="w-6 h-6 text-red-400" />
              }
            </button>
            
            {expandedSections.includes('hard') && (
              <div className="px-6 pb-6 border-t border-red-500/20">
                <p className="text-red-300/60 text-center py-8 font-mono text-sm">&gt; No write-ups yet. New content coming soon...</p>
              </div>
            )}
          </div>
        </div>

        {/* Insane Difficulty Section */}
        <div className="relative mb-6 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="absolute inset-0 bg-red-600/10 rounded-lg blur-md animate-pulse" />
          <div className="relative bg-gradient-to-br from-red-950/70 to-black/70 border-2 border-red-500/50 rounded-lg overflow-hidden backdrop-blur-sm shadow-lg shadow-red-500/30">
            <button
              onClick={() => toggleSection('insane')}
              className="w-full flex items-center justify-between text-left p-6 hover:bg-red-500/20 transition-all rounded-lg group"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-red-600/30 text-red-400 rounded-md text-sm font-bold font-mono border border-red-500/50 animate-pulse">[ INSANE ]</span>
                <h2 className="text-2xl font-bold text-red-100 group-hover:text-red-400 transition-colors">Insane Machines</h2>
              </div>
              {expandedSections.includes('insane') ? 
                <ChevronDown className="w-6 h-6 text-red-400" /> : 
                <ChevronRight className="w-6 h-6 text-red-400" />
              }
            </button>
            
            {expandedSections.includes('insane') && (
              <div className="px-6 pb-6 border-t border-red-500/20">
                <p className="text-red-300/60 text-center py-8 font-mono text-sm">&gt; No write-ups yet. New content coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Red Team Footer */}
      <footer className="relative z-10 border-t border-red-500/30 bg-black/90 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-red-400/80 font-mono">
                &copy; {new Date().getFullYear()} Red Team Operations. Offensive Security Documentation.
              </p>
              <p className="text-xs text-red-400/60 mt-1 font-mono">
                [!] All activities conducted in authorized lab environments only
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/daniel-richardson-100b70308/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-red-400/80 hover:text-red-400 transition-colors group font-mono"
              >
                <Linkedin className="w-5 h-5 group-hover:text-red-400" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}
