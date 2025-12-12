import { FileText, Youtube, ExternalLink, Terminal, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function OtherPage() {
  const [activeTab, setActiveTab] = useState('youtube');
  const navigate = useNavigate();

  return (
    <div className="content-wrapper py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <FileText className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h1 className="glow-text mb-4">Other</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Additional content, resources, and write-ups related to malware analysis and cybersecurity.
          </p>
        </div>

        {/* Helpful Resources Section */}
        <div className="tech-card mb-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <h2 className="text-2xl font-bold mb-6">Helpful Resources</h2>
          
          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-border">
            <button
              onClick={() => setActiveTab('youtube')}
              className={`px-4 py-2 font-semibold transition-colors relative ${
                activeTab === 'youtube'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <Youtube className="w-4 h-4" />
                YouTube
              </div>
              {activeTab === 'youtube' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>

          {/* YouTube Tab Content */}
          {activeTab === 'youtube' && (
            <div className="space-y-6">
              {/* Anuj Soni */}
              <a
                href="https://www.youtube.com/@sonianuj"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-muted/30 rounded-lg p-6 border border-border hover:border-primary/50 transition-all hover:bg-muted/50 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Youtube className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                        Anuj Soni
                      </h3>
                      <p className="text-foreground/80 mb-2">
                        SANS FOR610/710 Instructor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Expert guidance on reverse engineering malware and advanced threat analysis from a SANS instructor.
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </a>

              {/* John Hammond */}
              <a
                href="https://www.youtube.com/@_JohnHammond"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-muted/30 rounded-lg p-6 border border-border hover:border-primary/50 transition-all hover:bg-muted/50 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Youtube className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                        John Hammond
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Cybersecurity researcher and educator covering CTF challenges, malware analysis, and security tools.
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </a>
            </div>
          )}
        </div>

        {/* Red Teaming Section */}
        <div 
          className="tech-card mb-12 animate-fade-in cursor-pointer group hover:border-red-500/50 transition-all bg-gradient-to-br from-red-500/5 to-orange-500/5" 
          style={{ animationDelay: '200ms' }}
          onClick={() => navigate('/red-team')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Terminal className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">Red Team Operations</h2>
                <p className="text-foreground/80 mb-4">
                  Offensive security write-ups from Hack The Box CTF challenges. Explore penetration testing techniques, exploitation methods, and privilege escalation tactics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-md text-sm font-mono border border-red-500/20">
                    Penetration Testing
                  </span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-md text-sm font-mono border border-orange-500/20">
                    Exploitation
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-md text-sm font-mono border border-yellow-500/20">
                    Privilege Escalation
                  </span>
                </div>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-red-500 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
