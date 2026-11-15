import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowUpRight,
  Check,
  Copy,
  Cpu,
  Database,
  Github,
  Layers,
  MapPin,
  Shield,
  Smartphone,
  Sparkles,
  WifiOff,
  X,
} from "lucide-react";

interface AttendUpModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export function AttendUpModal({ isOpen, onClose }: AttendUpModalProps) {
  const [activeTab, setActiveTab] = useState<"story" | "architecture" | "stack">("story");
  const [copied, setCopied] = useState(false);

  const cloneCommand = "git clone https://github.com/Khush-Amrutiya/attendup-campus-system.git";

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="orca-modal-overlay" />
        <Dialog.Content className="orca-modal-content" aria-describedby="attendup-modal-desc">
          {/* Sticky Top Command Bar */}
          <div className="modal-sticky-bar">
            <div className="modal-sticky-left">
              <span className="live-dot" />
              <span className="modal-sticky-title">
                ATTENDUP // ACADEMIC CAPSTONE // CASE STUDY
              </span>
            </div>
            <div className="modal-sticky-right">
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
                src="/attendup-cover.jpg"
                alt="AttendUp – Smart Student Attendance & Campus Monitoring System"
                loading="eager"
              />
              <div className="modal-hero-gradient-overlay" />
            </div>

            {/* Title & Badges */}
            <div className="modal-intro-header">
              <div className="orca-modal-meta">
                <span className="orca-badge-cyan">
                  <Smartphone className="w-3 h-3" /> MOBILE APP // FULL-STACK // OFFLINE-FIRST
                </span>
                <span className="orca-badge-purple">INDEPENDENT ACADEMIC CAPSTONE</span>
              </div>
              <Dialog.Title className="orca-modal-title">
                ATTENDUP<span>.</span>
              </Dialog.Title>
              <Dialog.Description id="attendup-modal-desc" className="orca-modal-subtitle">
                Smart Student Attendance & Campus Monitoring Platform — combining geofenced presence
                detection, local SQLite caching, and privacy-preserving parent verification.
              </Dialog.Description>
            </div>

            {/* Executive Meta Bar */}
            <div className="modal-executive-bar">
              <div className="executive-meta-card">
                <span className="executive-meta-label">// ROLE</span>
                <span className="executive-meta-value">Mobile & Full-Stack Architect</span>
              </div>
              <div className="executive-meta-card">
                <span className="executive-meta-label">// PROJECT CONTEXT</span>
                <span className="executive-meta-value">Independent Academic Capstone</span>
              </div>
              <div className="executive-meta-card">
                <span className="executive-meta-label">// CORE ARCHITECTURE</span>
                <span className="executive-meta-value">Offline SQLite Sync + Geofencing</span>
              </div>
              <div className="executive-meta-card">
                <span className="executive-meta-label">// SYSTEM STATUS</span>
                <span className="executive-meta-value" style={{ color: "var(--cyan)" }}>
                  ● Tested on Physical Android Device
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
                <Smartphone className="w-3.5 h-3.5" /> 01 // Story & Screens
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

            {/* TAB 1: STORY & SCREENS */}
            {activeTab === "story" && (
              <div className="case-study-tab-pane">
                <div className="orca-problem-solution-grid">
                  <div className="orca-mini-card">
                    <h4>The Problem</h4>
                    <p>
                      Paper roll-calls and manual attendance logs waste up to 15 minutes per
                      lecture, are vulnerable to proxy attendance, and leave parents in the dark
                      regarding campus presence during spotty cellular coverage.
                    </p>
                  </div>
                  <div className="orca-mini-card">
                    <h4>The Solution</h4>
                    <p>
                      AttendUp turns campus coordinates into automated presence zones. Using
                      device-level geofencing with an offline SQLite queue, it guarantees
                      tamper-proof attendance records synced safely to Supabase cloud.
                    </p>
                  </div>
                </div>

                {/* Application Screen Showcase */}
                <div>
                  <p className="orca-section-title">
                    <span>// INTERFACE</span> Production Mobile Views
                  </p>
                  <div className="attendup-screens-grid">
                    <div className="attendup-screen-item">
                      <img
                        src="/attendup-welcome.jpg"
                        alt="AttendUp Welcome & Role Selection Screen"
                        loading="lazy"
                      />
                      <div className="attendup-screen-caption">01 // Welcome & Role Selection</div>
                    </div>
                    <div className="attendup-screen-item">
                      <img
                        src="/attendup-student.jpg"
                        alt="AttendUp Student Geofence & Campus Monitoring Screen"
                        loading="lazy"
                      />
                      <div className="attendup-screen-caption">02 // Student Campus Monitoring</div>
                    </div>
                    <div className="attendup-screen-item">
                      <img
                        src="/attendup-parent.jpg"
                        alt="AttendUp Parent Live Presence Dashboard"
                        loading="lazy"
                      />
                      <div className="attendup-screen-caption">03 // Parent Presence Dashboard</div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="orca-section-title">
                    <span>// BREAKTHROUGHS</span> Core Feature Highlights
                  </p>
                  <div className="orca-features-grid">
                    <div className="orca-feature-card">
                      <h5>Geofence Presence Automation</h5>
                      <p>
                        High-precision entry and exit boundary detection with configurable campus
                        radius and background monitoring on Android.
                      </p>
                    </div>
                    <div className="orca-feature-card">
                      <h5>Exit Debouncing Engine</h5>
                      <p>
                        Prevents accidental attendance resets caused by momentary GPS drift or
                        passing through indoor blindspots.
                      </p>
                    </div>
                    <div className="orca-feature-card">
                      <h5>Privacy-First Parent Verification</h5>
                      <p>
                        Parents receive confirmed campus presence status without tracking continuous
                        raw GPS coordinates.
                      </p>
                    </div>
                    <div className="orca-feature-card">
                      <h5>Cryptographic Account Linking</h5>
                      <p>
                        Single-use invitation codes pair student accounts with authorized parent
                        dashboards securely via Supabase RLS.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="orca-actions-bar">
                  <a
                    href="https://github.com/Khush-Amrutiya"
                    target="_blank"
                    rel="noreferrer"
                    className="button primary"
                  >
                    VIEW CODE ON GITHUB <ArrowUpRight />
                  </a>
                </div>
              </div>
            )}

            {/* TAB 2: ARCHITECTURE & DECISIONS */}
            {activeTab === "architecture" && (
              <div className="case-study-tab-pane">
                <div>
                  <p className="orca-section-title">
                    <span>// PIPELINE</span> Offline-First Synchronization Architecture
                  </p>
                  <div className="pipeline-flow-grid">
                    <div className="pipeline-step-card">
                      <span className="pipeline-step-num">STEP 01</span>
                      <h5>Geofence Event</h5>
                      <p>Android background location fires entrance/exit event within perimeter.</p>
                    </div>
                    <div className="pipeline-step-card">
                      <span className="pipeline-step-num">STEP 02</span>
                      <h5>Local SQLite Transaction</h5>
                      <p>Immediate atomic write to on-device queue; zero network dependency.</p>
                    </div>
                    <div className="pipeline-step-card">
                      <span className="pipeline-step-num">STEP 03</span>
                      <h5>Auto-Retry Sync Engine</h5>
                      <p>
                        NetInfo monitors connectivity; flushes pending queue with idempotency keys.
                      </p>
                    </div>
                    <div className="pipeline-step-card">
                      <span className="pipeline-step-num">STEP 04</span>
                      <h5>Cloud Persistence & RLS</h5>
                      <p>
                        Supabase PostgreSQL validates token and notifies linked parents in real
                        time.
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
                        <WifiOff className="w-4 h-4 text-cyan" /> Offline SQLite Queue vs. Direct
                        API Calls
                      </h4>
                      <p>
                        Campus auditoriums and basement laboratories are notorious cellular dead
                        zones. By treating local SQLite as the single source of truth for capture
                        and syncing opportunistically, student attendance is never lost due to bad
                        reception.
                      </p>
                    </div>
                    <div className="decision-card">
                      <h4>
                        <Shield className="w-4 h-4 text-cyan" /> Privacy-First Presence vs. Live
                        Tracking
                      </h4>
                      <p>
                        Continuous GPS tracking drains battery and violates student privacy.
                        AttendUp transmits discrete binary state assertions (&quot;Inside Campus
                        Perimeter&quot; / &quot;Departed Campus&quot;) rather than recording
                        granular lat/long routes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="orca-role-card">
                  <div>
                    <strong>My Engineering Ownership:</strong>
                    <p className="muted-copy" style={{ marginTop: 6, marginBottom: 0 }}>
                      As a first-year Computer Engineering student, I conceived the system
                      architecture, built the full React Native & Expo codebase, designed the
                      Supabase relational schema with Row Level Security, configured local SQLite
                      queuing, and validated the production APK on physical Android hardware.
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
                    <span className="orca-tech-tag">React Native</span>
                    <span className="orca-tech-tag">Expo SDK</span>
                    <span className="orca-tech-tag">TypeScript</span>
                    <span className="orca-tech-tag">SQLite (Expo SQLite)</span>
                    <span className="orca-tech-tag">Supabase (PostgreSQL)</span>
                    <span className="orca-tech-tag">Row Level Security (RLS)</span>
                    <span className="orca-tech-tag">Expo Location & Geofencing</span>
                    <span className="orca-tech-tag">Expo Notifications</span>
                    <span className="orca-tech-tag">Leaflet & OpenStreetMap</span>
                    <span className="orca-tech-tag">EAS Build (Android APK)</span>
                  </div>
                </div>

                <div className="orca-actions-bar">
                  <a
                    href="https://github.com/Khush-Amrutiya"
                    target="_blank"
                    rel="noreferrer"
                    className="button primary"
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
