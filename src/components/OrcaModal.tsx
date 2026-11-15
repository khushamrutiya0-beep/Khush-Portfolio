import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowUpRight,
  Check,
  Copy,
  Cpu,
  Github,
  Layers,
  Play,
  ShieldAlert,
  Sparkles,
  Waves,
  X,
} from "lucide-react";

interface OrcaModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export function OrcaModal({ isOpen, onClose }: OrcaModalProps) {
  const [activeTab, setActiveTab] = useState<"story" | "architecture" | "stack">("story");
  const [copied, setCopied] = useState(false);

  const cloneCommand = "git clone https://github.com/Khush-Amrutiya/orca-marine-intelligence.git";

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="orca-modal-overlay" />
        <Dialog.Content className="orca-modal-content" aria-describedby="orca-modal-desc">
          {/* Sticky Top Command Bar */}
          <div className="modal-sticky-bar">
            <div className="modal-sticky-left">
              <span className="live-dot" />
              <span className="modal-sticky-title">ORCA // SIH 2026 // CASE STUDY</span>
            </div>
            <div className="modal-sticky-right">
              <a
                href="https://orca-in.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="modal-sticky-btn"
              >
                LIVE DEMO <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/Khush-Amrutiya"
                target="_blank"
                rel="noreferrer"
                className="modal-sticky-btn"
              >
                <Github className="w-3.5 h-3.5" /> REPO
              </a>
              <Dialog.Close className="modal-close-pill" aria-label="Close project modal">
                <X className="w-3.5 h-3.5" />
                <span>CLOSE</span>
                <kbd>ESC</kbd>
              </Dialog.Close>
            </div>
          </div>

          <div className="modal-full-shell">
            {/* Project Hero Visual Frame */}
            <div className="modal-hero-frame">
              <img
                src="/orca-cover.jpg"
                alt="ORCA – Intelligent Ocean Risk & Coastal Analytics System Dashboard"
                loading="eager"
              />
              <div className="modal-hero-gradient-overlay" />
            </div>

            {/* Title & Badges */}
            <div className="modal-intro-header">
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
                Intelligent Ocean Risk & Coastal Analytics System — unifying live marine conditions,
                deterministic hazard scoring, and spatial decision intelligence.
              </Dialog.Description>
            </div>

            {/* Executive Meta Bar */}
            <div className="modal-executive-bar">
              <div className="executive-meta-card">
                <span className="executive-meta-label">// ROLE</span>
                <span className="executive-meta-value">AI-Assisted Full-Stack Lead</span>
              </div>
              <div className="executive-meta-card">
                <span className="executive-meta-label">// TIMELINE & CONTEXT</span>
                <span className="executive-meta-value">Smart India Hackathon 2026</span>
              </div>
              <div className="executive-meta-card">
                <span className="executive-meta-label">// CORE CHALLENGE</span>
                <span className="executive-meta-value">Deterministic Risk vs AI Hallucination</span>
              </div>
              <div className="executive-meta-card">
                <span className="executive-meta-label">// SYSTEM STATUS</span>
                <span className="executive-meta-value" style={{ color: "var(--cyan)" }}>
                  ● Live & Deployed on Vercel
                </span>
              </div>
            </div>

            {/* 3-Tab Case Study Navigation */}
            <div className="case-study-tab-nav" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "story"}
                className={`case-study-tab-btn ${activeTab === "story" ? "is-active" : ""}`}
                onClick={() => setActiveTab("story")}
              >
                <Sparkles className="w-3.5 h-3.5" /> 01 // Story & Impact
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "architecture"}
                className={`case-study-tab-btn ${activeTab === "architecture" ? "is-active" : ""}`}
                onClick={() => setActiveTab("architecture")}
              >
                <Cpu className="w-3.5 h-3.5" /> 02 // Architecture & Decisions
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "stack"}
                className={`case-study-tab-btn ${activeTab === "stack" ? "is-active" : ""}`}
                onClick={() => setActiveTab("stack")}
              >
                <Layers className="w-3.5 h-3.5" /> 03 // Tech Stack & Repo
              </button>
            </div>

            {/* TAB 1: STORY & IMPACT */}
            {activeTab === "story" && (
              <div className="case-study-tab-pane">
                <div className="orca-problem-solution-grid">
                  <div className="orca-mini-card">
                    <h4>The Problem</h4>
                    <p>
                      Critical marine telemetry—weather forecasts, wave swell hazards, protected
                      habitats, and fishing zones—is fragmented across legacy siloed agencies,
                      forcing fishermen and port operators to guess during rapidly shifting sea
                      storms.
                    </p>
                  </div>
                  <div className="orca-mini-card">
                    <h4>The Solution</h4>
                    <p>
                      ORCA consolidates streaming ocean data into a high-speed tactical workspace,
                      combining explainable mathematical safety scores with multimodal AI reasoning
                      for maritime routes and shelter ports.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="orca-section-title">
                    <span>// BREAKTHROUGHS</span> Core Operational Capabilities
                  </p>
                  <div className="orca-features-grid">
                    <div className="orca-feature-card">
                      <h5>Multi-Agent Marine Intelligence</h5>
                      <p>
                        Autonomous agents coordinate telemetry ingestion, weather validation, and
                        localized tactical safety recommendations.
                      </p>
                    </div>
                    <div className="orca-feature-card">
                      <h5>Deterministic Risk Engine</h5>
                      <p>
                        Mathematical scoring for wind speed, wave height, and visibility ensures
                        zero-hallucination safety thresholds before advising voyages.
                      </p>
                    </div>
                    <div className="orca-feature-card">
                      <h5>Interactive Leaflet Marine Map</h5>
                      <p>
                        High-performance geospatial visualization for live weather, maritime
                        boundaries, hazards, and designated shelter ports.
                      </p>
                    </div>
                    <div className="orca-feature-card">
                      <h5>Potential Fishing Zones (PFZ)</h5>
                      <p>
                        Thermal and chlorophyll telemetry overlays direct coastal fishermen to
                        high-yield, eco-safe waters while avoiding protected sanctuaries.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="orca-actions-bar">
                  <a
                    href="https://orca-in.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="button primary"
                  >
                    EXPLORE LIVE SYSTEM <ArrowUpRight />
                  </a>
                  <a
                    href="https://youtu.be/WhbCpMSIlVU"
                    target="_blank"
                    rel="noreferrer"
                    className="button secondary"
                  >
                    WATCH SYSTEM DEMO <Play />
                  </a>
                </div>
              </div>
            )}

            {/* TAB 2: ARCHITECTURE & DECISIONS */}
            {activeTab === "architecture" && (
              <div className="case-study-tab-pane">
                <div>
                  <p className="orca-section-title">
                    <span>// PIPELINE</span> Live Data-Flow Architecture
                  </p>
                  <div className="pipeline-flow-grid">
                    <div className="pipeline-step-card">
                      <span className="pipeline-step-num">STEP 01</span>
                      <h5>Telemetry Ingestion</h5>
                      <p>Streams live wind, swell, barometric pressure, and satellite alerts.</p>
                    </div>
                    <div className="pipeline-step-card">
                      <span className="pipeline-step-num">STEP 02</span>
                      <h5>Deterministic Risk Engine</h5>
                      <p>
                        Calculates rigorous numerical safety index (0–100) via strict rule gates.
                      </p>
                    </div>
                    <div className="pipeline-step-card">
                      <span className="pipeline-step-num">STEP 03</span>
                      <h5>Multi-Agent Reasoning</h5>
                      <p>
                        Synthesizes route advice grounded strictly on verified marine telemetry.
                      </p>
                    </div>
                    <div className="pipeline-step-card">
                      <span className="pipeline-step-num">STEP 04</span>
                      <h5>Tactical Map Interface</h5>
                      <p>
                        Renders real-time geospatial layers, waypoints, and emergency shelter ports.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="orca-section-title">
                    <span>// TRADE-OFFS</span> Engineering Decisions & Governance
                  </p>
                  <div className="decision-card-grid">
                    <div className="decision-card">
                      <h4>
                        <ShieldAlert className="w-4 h-4 text-cyan" /> Deterministic Rules vs. Raw
                        LLMs
                      </h4>
                      <p>
                        In maritime navigation, a hallucinated safety clearance can cost lives. We
                        isolated all hazard thresholds (Beaufort scale, wave period, visibility)
                        into a pure mathematical engine. The Gemini LLM acts solely as a
                        natural-language tactical advisor grounded on pre-verified mathematical
                        constraints.
                      </p>
                    </div>
                    <div className="decision-card">
                      <h4>
                        <Waves className="w-4 h-4 text-cyan" /> Geospatial Performance at Sea
                      </h4>
                      <p>
                        Coastal connections are high-latency. We implemented lightweight GeoJSON
                        vector tiles and client-side bounding box clustering in Leaflet, reducing
                        payload sizes by 68% compared to heavy satellite rasters.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="orca-role-card">
                  <div>
                    <strong>My Engineering Ownership:</strong>
                    <p className="muted-copy" style={{ marginTop: 6, marginBottom: 0 }}>
                      Architected the end-to-end multi-agent orchestration, integrated the Leaflet
                      GIS subsystem, developed responsive Next.js views, and tuned deterministic
                      risk thresholds during the Smart India Hackathon 2026.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: TECH STACK & REPO */}
            {activeTab === "stack" && (
              <div className="case-study-tab-pane">
                <div>
                  <p className="orca-section-title">
                    <span>// REPOSITORY</span> Quick Clone Command
                  </p>
                  <div className="clone-command-box">
                    <span className="clone-command-text">{cloneCommand}</span>
                    <button
                      type="button"
                      className="clone-copy-btn"
                      onClick={handleCopy}
                      aria-label="Copy clone command"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-cyan" /> COPIED!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> COPY
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="orca-section-title">
                    <span>// STACK</span> Technologies & Libraries
                  </p>
                  <div className="orca-tech-tags">
                    <span className="orca-tech-tag">Next.js 14</span>
                    <span className="orca-tech-tag">React 18</span>
                    <span className="orca-tech-tag">TypeScript</span>
                    <span className="orca-tech-tag">Tailwind CSS</span>
                    <span className="orca-tech-tag">Leaflet / React-Leaflet</span>
                    <span className="orca-tech-tag">GeoJSON Spatial Indexing</span>
                    <span className="orca-tech-tag">Google Gemini API</span>
                    <span className="orca-tech-tag">Multi-Agent Swarm Logic</span>
                    <span className="orca-tech-tag">Vercel Edge Network</span>
                  </div>
                </div>

                <div className="orca-actions-bar">
                  <a
                    href="https://orca-in.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="button primary"
                  >
                    VISIT LIVE PLATFORM <ArrowUpRight />
                  </a>
                  <a
                    href="https://github.com/Khush-Amrutiya"
                    target="_blank"
                    rel="noreferrer"
                    className="button secondary"
                  >
                    <Github className="w-4 h-4" /> BROWSE GITHUB REPO
                  </a>
                </div>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
