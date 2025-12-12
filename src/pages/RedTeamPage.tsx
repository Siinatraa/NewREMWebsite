import { Terminal, ChevronDown, ChevronRight, Shield, ArrowLeft, Skull } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Red Team CTF write-ups page

export function RedTeamPage() {
  const navigate = useNavigate();
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
    <div className="content-wrapper py-12 relative">
      {/* Background effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgb(239, 68, 68) 2px, rgb(239, 68, 68) 4px)',
          animation: 'scan 8s linear infinite'
        }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/hack-the-box')}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-red-950/30 hover:bg-red-900/40 border border-red-500/30 hover:border-red-500/60 text-red-400 rounded-lg transition-all group animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">Return to REM Analysis</span>
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
          }}>Red Team Operations</h1>
          <p className="text-red-300/80 max-w-2xl mx-auto font-mono text-sm tracking-wider">
            [OFFENSIVE SECURITY] CTF Write-ups • Penetration Testing • Exploitation Techniques
          </p>
        </div>

        {/* Info Banner */}
        <div className="relative mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="absolute inset-0 bg-red-500/5 rounded-lg blur-md" />
          <div className="relative bg-gradient-to-r from-red-950/90 to-red-900/90 border-2 border-red-500/50 rounded-lg p-6 shadow-lg shadow-red-500/20">
            <div className="flex items-start gap-4">
              <div className="relative">
                <Shield className="w-6 h-6 text-red-400 flex-shrink-0 mt-1 animate-pulse" />
                <div className="absolute inset-0 bg-red-500/30 blur-lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-2 font-mono tracking-wider">[!] ETHICAL HACKING NOTICE</h3>
                <p className="text-red-200/70 text-sm leading-relaxed font-mono">
                  &gt; All techniques and exploits documented here are used exclusively in authorized lab environments.<br />
                  &gt; These write-ups are for educational purposes only.<br />
                  &gt; Always practice responsible disclosure and obtain proper authorization.
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
    </div>
  );
}
