import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Check, Play, Sparkles, X } from "lucide-react";

interface OrcaModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export function OrcaModal({ isOpen, onClose }: OrcaModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="orca-modal-overlay" />
        <Dialog.Content className="orca-modal-content" aria-describedby="orca-modal-desc">
          <Dialog.Close className="orca-modal-close" aria-label="Close project details">
            <X />
          </Dialog.Close>

          {/* 1. PROJECT COVER */}
          <div className="orca-modal-hero">
            <img
              src="/orca-cover.jpg"
              alt="ORCA – Intelligent Ocean Risk & Coastal Analytics System Dashboard"
              loading="eager"
            />
          </div>

          <div className="orca-modal-body">
            {/* 2. PROJECT TITLE & 3. CONTEXT */}
            <div className="orca-modal-header">
              <div className="orca-modal-meta">
                <span className="orca-badge-cyan">
                  <Sparkles className="w-3 h-3" /> AI / MARINE INTELLIGENCE / FULL-STACK
                </span>
                <span className="orca-badge-purple">SMART INDIA HACKATHON 2026</span>
              </div>
              <Dialog.Title className="orca-modal-title">
                ORCA<span>.</span>
              </Dialog.Title>
              <Dialog.Description id="orca-modal-desc" className="orca-modal-subtitle">
                Intelligent Ocean Risk & Coastal Analytics System
              </Dialog.Description>
            </div>

            {/* 4. OVERVIEW */}
            <div>
              <p className="orca-section-title">
                <span>// 01</span> Project Overview
              </p>
              <p className="orca-overview-text">
                ORCA is an AI-powered marine decision platform that unifies real-time ocean
                conditions, deterministic risk scoring, and interactive mapping to help maritime
                operators, fishermen, and coastal authorities make fast, risk-aware decisions.
              </p>
            </div>

            {/* 5. PROBLEM & 6. SOLUTION */}
            <div>
              <p className="orca-section-title">
                <span>// 02</span> Problem & Solution
              </p>
              <div className="orca-problem-solution-grid">
                <div className="orca-mini-card">
                  <h4>The Problem</h4>
                  <p>
                    Critical marine data—weather forecasts, hazard alerts, navigational risks, and
                    fishing zones—is scattered across disconnected sources, making rapid, safe
                    decision-making difficult.
                  </p>
                </div>
                <div className="orca-mini-card">
                  <h4>The Solution</h4>
                  <p>
                    ORCA consolidates live marine intelligence into a unified tactical workspace:
                  </p>
                  <ul className="orca-solution-list">
                    <li>
                      <Check /> Live marine & weather intelligence
                    </li>
                    <li>
                      <Check /> Multi-agent AI reasoning
                    </li>
                    <li>
                      <Check /> Deterministic marine risk scoring
                    </li>
                    <li>
                      <Check /> Geospatial hazard & protected area mapping
                    </li>
                    <li>
                      <Check /> Risk-aware route planning & shelter ports
                    </li>
                    <li>
                      <Check /> Potential Fishing Zone (PFZ) insights
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. KEY FEATURES */}
            <div>
              <p className="orca-section-title">
                <span>// 03</span> Key Features
              </p>
              <div className="orca-features-grid">
                <div className="orca-feature-card">
                  <h5>Multi-Agent Marine Intelligence</h5>
                  <p>Specialized agents coordinate different marine intelligence tasks.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Deterministic Risk Engine</h5>
                  <p>Rule-based marine risk assessment provides explainable safety scoring.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Interactive Marine Map</h5>
                  <p>
                    Geospatial visualization for marine conditions, hazards, ports, and operational
                    context.
                  </p>
                </div>
                <div className="orca-feature-card">
                  <h5>Risk-Aware Route Planning</h5>
                  <p>Marine-aware route intelligence with waypoints and coastal context.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Hazard Awareness</h5>
                  <p>Helps users understand relevant coastal and marine hazards.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Role-Based Intelligence</h5>
                  <p>Information and workflows adapt to different marine user roles.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Evidence-Grounded AI</h5>
                  <p>AI responses are connected to available information and supporting context.</p>
                </div>
              </div>
            </div>

            {/* 8. TECHNOLOGY */}
            <div>
              <p className="orca-section-title">
                <span>// 04</span> Technology Stack
              </p>
              <div className="orca-tech-tags">
                <span className="orca-tech-tag">Next.js</span>
                <span className="orca-tech-tag">React</span>
                <span className="orca-tech-tag">TypeScript</span>
                <span className="orca-tech-tag">Node.js</span>
                <span className="orca-tech-tag">Tailwind CSS</span>
                <span className="orca-tech-tag">Leaflet</span>
                <span className="orca-tech-tag">Gemini API</span>
                <span className="orca-tech-tag">Multi-Agent Architecture</span>
              </div>
            </div>

            {/* 9. MY ROLE & 10. DEVELOPMENT APPROACH */}
            <div>
              <p className="orca-section-title">
                <span>// 05</span> Role & Development Approach
              </p>
              <div className="orca-role-card">
                <div>
                  <strong>Role: AI-Assisted Full-Stack Developer & Product Builder</strong>
                  <p className="muted-copy" style={{ marginTop: 6, marginBottom: 0 }}>
                    Architected system workflows, integrated the multi-agent AI pipeline and
                    interactive Leaflet map, developed responsive frontend interfaces, and directed
                    iterative testing and optimization.
                  </p>
                </div>
                <div>
                  <strong>Engineering Approach:</strong>
                  <p className="muted-copy" style={{ marginTop: 6, marginBottom: 0 }}>
                    Leveraged modern AI development tools alongside hands-on system architecture,
                    API integration, debugging, and continuous UI/UX refinement.
                  </p>
                </div>
              </div>
            </div>

            {/* 11. PROJECT LINKS */}
            <div className="orca-actions-bar">
              <a
                href="https://orca-in.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="button primary"
              >
                LIVE DEMO <ArrowUpRight />
              </a>
              <a
                href="https://youtu.be/WhbCpMSIlVU"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                WATCH PROJECT VIDEO <Play />
              </a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
