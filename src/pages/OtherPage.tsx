import { FileText } from 'lucide-react';

export function OtherPage() {
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

        {/* Empty State */}
        <div className="tech-card text-center py-16 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h2 className="text-xl font-semibold mb-2">Content Coming Soon</h2>
          <p className="text-muted-foreground">
            This section will be populated with additional write-ups and resources.
          </p>
        </div>
      </div>
    </div>
  );
}
