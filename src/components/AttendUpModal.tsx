import * as Dialog from "@radix-ui/react-dialog";
import {
  Bell,
  Check,
  Database,
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
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="orca-modal-overlay" />
        <Dialog.Content className="orca-modal-content" aria-describedby="attendup-modal-desc">
          <Dialog.Close className="orca-modal-close" aria-label="Close project details">
            <X />
          </Dialog.Close>

          {/* 1. PROJECT HERO COVER */}
          <div className="orca-modal-hero">
            <img
              src="/attendup-cover.jpg"
              alt="AttendUp – Smart Student Attendance & Campus Monitoring System"
              loading="eager"
            />
          </div>

          <div className="orca-modal-body">
            {/* 2. PROJECT TITLE & CONTEXT */}
            <div className="orca-modal-header">
              <div className="orca-modal-meta">
                <span className="orca-badge-cyan">
                  <Smartphone className="w-3 h-3" /> MOBILE APP // FULL-STACK // AI-ASSISTED
                </span>
                <span className="orca-badge-purple">INDEPENDENT ACADEMIC PROJECT</span>
              </div>
              <Dialog.Title className="orca-modal-title">
                ATTENDUP<span>.</span>
              </Dialog.Title>
              <Dialog.Description id="attendup-modal-desc" className="orca-modal-subtitle">
                Smart Student Attendance & Campus Monitoring System
              </Dialog.Description>
            </div>

            {/* 3. PROJECT OVERVIEW */}
            <div>
              <p className="orca-section-title">
                <span>// 01</span> Project Overview
              </p>
              <p className="orca-overview-text">
                AttendUp is a smart, location-aware student attendance and campus monitoring
                application designed to simplify attendance management and strengthen
                parent–student connectivity.
              </p>
              <p className="orca-overview-text" style={{ marginTop: 10 }}>
                The platform combines geofencing, automated attendance tracking, cloud-based data
                management, and offline-first synchronization to provide a more connected and
                reliable attendance experience. Built with a privacy-first approach, AttendUp
                enables parents to monitor attendance and high-level campus presence without
                exposing students&apos; raw GPS coordinates.
              </p>
            </div>

            {/* 4. PROBLEM & SOLUTION */}
            <div>
              <p className="orca-section-title">
                <span>// 02</span> Problem & Solution
              </p>
              <div className="orca-problem-solution-grid">
                <div className="orca-mini-card">
                  <h4>The Problem</h4>
                  <p>
                    Traditional attendance management systems often rely on manual processes,
                    provide limited real-time visibility, and make it difficult for parents to stay
                    informed about student attendance.
                  </p>
                  <p style={{ marginTop: 8 }}>
                    Additionally, unreliable internet connectivity and fragmented communication can
                    affect the accuracy and accessibility of attendance information.
                  </p>
                </div>
                <div className="orca-mini-card">
                  <h4>The Solution</h4>
                  <p>
                    AttendUp introduces an automated, location-aware attendance workflow that
                    connects students, parents, and campus information through a unified mobile
                    platform:
                  </p>
                  <ul className="orca-solution-list">
                    <li>
                      <Check /> Location-based campus entry & exit detection
                    </li>
                    <li>
                      <Check /> Automated attendance confirmation using geofencing
                    </li>
                    <li>
                      <Check /> Parent–student account linking workflows
                    </li>
                    <li>
                      <Check /> Real-time presence status infrastructure
                    </li>
                    <li>
                      <Check /> Offline-first data storage & auto-synchronization
                    </li>
                    <li>
                      <Check /> Cloud-based attendance & user management
                    </li>
                    <li>
                      <Check /> Push notification infrastructure for important events
                    </li>
                    <li>
                      <Check /> Privacy-focused campus monitoring (no raw GPS leaks)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. APP SCREENS SHOWCASE */}
            <div>
              <p className="orca-section-title">
                <span>// 03</span> Application Interface
              </p>
              <div className="attendup-screens-grid">
                <div className="attendup-screen-item">
                  <img
                    src="/attendup-welcome.jpg"
                    alt="AttendUp Welcome & Role Selection Screen"
                    loading="lazy"
                  />
                  <div className="attendup-screen-caption">01 // Welcome &amp; Role Selection</div>
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

            {/* 6. KEY FEATURES */}
            <div>
              <p className="orca-section-title">
                <span>// 04</span> Key Features
              </p>
              <div className="orca-features-grid">
                <div className="orca-feature-card">
                  <h5>Intelligent Attendance Automation</h5>
                  <p>
                    Geofencing-based campus monitoring with continuous presence confirmation and
                    exit-debounce mechanisms to reduce inaccurate attendance records.
                  </p>
                </div>
                <div className="orca-feature-card">
                  <h5>Parent–Student Connectivity</h5>
                  <p>Secure account-linking workflows that connect parent accounts with student profiles.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Offline-First Architecture</h5>
                  <p>
                    Local SQLite storage with synchronization queues, retry mechanisms, and
                    automatic cloud synchronization when connectivity returns.
                  </p>
                </div>
                <div className="orca-feature-card">
                  <h5>Campus Geofencing & Interactive Maps</h5>
                  <p>
                    Interactive campus location selection using Leaflet and OpenStreetMap, with
                    configurable monitoring radius.
                  </p>
                </div>
                <div className="orca-feature-card">
                  <h5>Background Location Monitoring</h5>
                  <p>
                    Android background location services and geofencing infrastructure designed to
                    monitor campus presence without requiring the app to remain open.
                  </p>
                </div>
                <div className="orca-feature-card">
                  <h5>Push Notification System</h5>
                  <p>
                    Notification infrastructure designed to inform students and linked parents about
                    important attendance and campus events.
                  </p>
                </div>
                <div className="orca-feature-card">
                  <h5>Privacy-Focused Monitoring</h5>
                  <p>
                    Parents can access relevant attendance and presence information without direct
                    access to students&apos; raw GPS coordinates.
                  </p>
                </div>
                <div className="orca-feature-card">
                  <h5>Attendance Audit & Tracking</h5>
                  <p>
                    Structured attendance records and audit logs to support attendance history and
                    investigation of record changes.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. TECH STACK */}
            <div>
              <p className="orca-section-title">
                <span>// 05</span> Technology Stack
              </p>
              <div className="orca-tech-tags">
                <span className="orca-tech-tag">React Native</span>
                <span className="orca-tech-tag">Expo</span>
                <span className="orca-tech-tag">TypeScript</span>
                <span className="orca-tech-tag">Supabase</span>
                <span className="orca-tech-tag">PostgreSQL</span>
                <span className="orca-tech-tag">SQLite</span>
                <span className="orca-tech-tag">Leaflet &amp; OpenStreetMap</span>
                <span className="orca-tech-tag">Expo Location</span>
                <span className="orca-tech-tag">Supabase Auth &amp; RLS</span>
                <span className="orca-tech-tag">Expo Notifications</span>
                <span className="orca-tech-tag">Edge Functions</span>
                <span className="orca-tech-tag">Offline-First Architecture</span>
              </div>
            </div>

            {/* 8. ROLE & DEVELOPMENT APPROACH */}
            <div>
              <p className="orca-section-title">
                <span>// 06</span> Role & Development Approach
              </p>
              <div className="orca-role-card">
                <div>
                  <strong>Role: AI-Assisted Full-Stack Mobile Developer &amp; Product Builder</strong>
                  <p className="muted-copy" style={{ marginTop: 6, marginBottom: 0 }}>
                    As a first-year Computer Engineering student, I independently explored the
                    problem, shaped the product concept, planned the application architecture,
                    designed development workflows, directed AI-assisted implementation, integrated
                    application components, investigated technical issues, and tested features
                    throughout development.
                  </p>
                </div>
                <div>
                  <strong style={{ fontSize: 13 }}>Development Approach:</strong>
                  <p className="muted-copy" style={{ marginTop: 6, marginBottom: 0 }}>
                    Developed through an AI-assisted engineering workflow, using AI tools to support
                    technical research, code generation, implementation planning, debugging, and
                    problem-solving. I combined AI-assisted development with hands-on configuration,
                    integration, code review, testing, troubleshooting, and iterative refinement to
                    understand how the different components work together.
                  </p>
                </div>
                <div>
                  <strong style={{ fontSize: 13 }}>Key Learning Outcomes:</strong>
                  <ul className="orca-solution-list" style={{ marginTop: 8 }}>
                    <li>
                      <Check /> Cross-platform mobile development (React Native &amp; Expo)
                    </li>
                    <li>
                      <Check /> Full-stack architecture &amp; relational database design (PostgreSQL &amp; Supabase)
                    </li>
                    <li>
                      <Check /> Offline-first application design &amp; SQLite synchronization queues
                    </li>
                    <li>
                      <Check /> GPS, geofencing, and Android background location execution
                    </li>
                    <li>
                      <Check /> Database security, Row Level Security (RLS), and parent-student account linking
                    </li>
                    <li>
                      <Check /> Debugging, real-device testing, and production build configuration
                    </li>
                    <li>
                      <Check /> Practical mastery of AI-assisted software development
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 9. PROJECT STATUS */}
            <div>
              <p className="orca-section-title">
                <span>// 07</span> Project Status
              </p>
              <div className="orca-mini-card">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                  <span className="orca-badge-cyan">
                    <Sparkles className="w-3 h-3" /> Core implementation completed
                  </span>
                  <span className="orca-badge-purple">Production APK validation in progress</span>
                </div>
                <p style={{ margin: 0, fontSize: 13 }}>
                  <strong>Focus:</strong> Mobile Engineering / Full-Stack Development /
                  Location-Based Computing / AI-Assisted Development
                </p>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

