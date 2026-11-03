import * as Dialog from "@radix-ui/react-dialog";
import { Check, Database, GitBranch, Laptop, ShieldCheck, Terminal, X, Zap } from "lucide-react";

interface ToolsModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export function ToolsModal({ isOpen, onClose }: ToolsModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="orca-modal-overlay" />
        <Dialog.Content className="orca-modal-content" aria-describedby="tools-modal-desc">
          <Dialog.Close className="orca-modal-close" aria-label="Close details">
            <X />
          </Dialog.Close>

          <div className="orca-modal-body" style={{ paddingTop: 36 }}>
            <div className="orca-modal-header">
              <div className="orca-modal-meta">
                <span className="orca-badge-cyan">
                  <GitBranch className="w-3 h-3" /> TOOLS // WORKFLOW // DEVOPS BASICS
                </span>
                <span className="orca-badge-purple">ENGINEERING PRACTICES</span>
              </div>
              <Dialog.Title className="orca-modal-title">
                Tools &amp; Workflow<span>.</span>
              </Dialog.Title>
              <Dialog.Description id="tools-modal-desc" className="orca-modal-subtitle">
                Version Control, Cloud &amp; Offline Synchronization, and Modern Development Tooling
              </Dialog.Description>
            </div>

            {/* Overview */}
            <div>
              <p className="orca-section-title">
                <span>// 01</span> Engineering Principles
              </p>
              <p className="orca-overview-text">
                Reliable software is built on strong developer workflows. I emphasize clean git
                hygiene, version-controlled architecture, offline-first data synchronization, and
                hands-on validation across development and production builds.
              </p>
            </div>

            {/* Core Tooling Pillars */}
            <div>
              <p className="orca-section-title">
                <span>// 02</span> Core Workflows
              </p>
              <div className="orca-problem-solution-grid">
                <div className="orca-mini-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <GitBranch style={{ width: 18, height: 18, color: "var(--cyan)" }} />
                    <h4 style={{ margin: 0 }}>Git &amp; GitHub Version Control</h4>
                  </div>
                  <p>
                    Disciplined version control for collaboration, iterative history, feature
                    branching, semantic commit conventions, and GitHub remote deployment pipelines.
                  </p>
                  <ul className="orca-solution-list" style={{ marginTop: 12 }}>
                    <li><Check /> Branch management &amp; remote sync</li>
                    <li><Check /> Pull request workflows &amp; code reviews</li>
                    <li><Check /> Conflict resolution &amp; clean git logs</li>
                    <li><Check /> CI/CD deployment hooks (Vercel &amp; Cloudflare)</li>
                  </ul>
                </div>

                <div className="orca-mini-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <Database style={{ width: 18, height: 18, color: "var(--purple)" }} />
                    <h4 style={{ margin: 0 }}>Offline &amp; Cloud Synchronization</h4>
                  </div>
                  <p>
                    Implementing offline-first databases using local SQLite with transaction queues,
                    retry debounce strategies, and automatic sync with cloud PostgreSQL (Supabase).
                  </p>
                  <ul className="orca-solution-list" style={{ marginTop: 12 }}>
                    <li><Check /> Local SQLite caching &amp; write-ahead queues</li>
                    <li><Check /> Network state detection &amp; sync triggers</li>
                    <li><Check /> Supabase PostgreSQL &amp; Row Level Security</li>
                    <li><Check /> Real-time state listeners &amp; audit logging</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <p className="orca-section-title">
                <span>// 03</span> Development Toolchain
              </p>
              <div className="orca-features-grid">
                <div className="orca-feature-card">
                  <h5>Modern Code Editors</h5>
                  <p>VS Code with TypeScript LSP, linting, Prettier formatting, and debugging.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Command Line &amp; Terminal</h5>
                  <p>Proficient with terminal tooling, npm scripts, git CLI, and PowerShell execution.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>AI-Assisted Engineering</h5>
                  <p>Combining AI-assisted implementation with thorough code review and testing.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Mobile Tooling (Expo &amp; Android)</h5>
                  <p>Expo CLI, EAS build verification, and real-device Android APK testing.</p>
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div>
              <p className="orca-section-title">
                <span>// 04</span> Toolchain Badges
              </p>
              <div className="orca-tech-tags">
                <span className="orca-tech-tag">Git</span>
                <span className="orca-tech-tag">GitHub</span>
                <span className="orca-tech-tag">VS Code</span>
                <span className="orca-tech-tag">Supabase</span>
                <span className="orca-tech-tag">SQLite</span>
                <span className="orca-tech-tag">Expo CLI</span>
                <span className="orca-tech-tag">Vite</span>
                <span className="orca-tech-tag">Vercel</span>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
