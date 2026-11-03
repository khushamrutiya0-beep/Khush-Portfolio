import * as Dialog from "@radix-ui/react-dialog";
import { Check, Code2, Cpu, Sparkles, Terminal, X } from "lucide-react";

interface CoreCSModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export function CoreCSModal({ isOpen, onClose }: CoreCSModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="orca-modal-overlay" />
        <Dialog.Content className="orca-modal-content" aria-describedby="corecs-modal-desc">
          <Dialog.Close className="orca-modal-close" aria-label="Close details">
            <X />
          </Dialog.Close>

          <div className="orca-modal-body" style={{ paddingTop: 36 }}>
            <div className="orca-modal-header">
              <div className="orca-modal-meta">
                <span className="orca-badge-cyan">
                  <Code2 className="w-3 h-3" /> CORE CS // OOP // LANGUAGES
                </span>
                <span className="orca-badge-purple">ACADEMIC FOUNDATION</span>
              </div>
              <Dialog.Title className="orca-modal-title">
                Core CS &amp; Languages<span>.</span>
              </Dialog.Title>
              <Dialog.Description id="corecs-modal-desc" className="orca-modal-subtitle">
                Foundations in Object-Oriented Programming, Logic Building, and Algorithmic Thinking
              </Dialog.Description>
            </div>

            {/* Overview */}
            <div>
              <p className="orca-section-title">
                <span>// 01</span> Focus &amp; Philosophy
              </p>
              <p className="orca-overview-text">
                Strong engineering starts with core fundamentals. My programming focus centers on
                mastering object-oriented principles, structured logic building, and computational
                problem-solving that seamlessly transfers across software domains.
              </p>
            </div>

            {/* Languages Grid */}
            <div>
              <p className="orca-section-title">
                <span>// 02</span> Languages in Practice
              </p>
              <div className="orca-problem-solution-grid">
                <div className="orca-mini-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <Cpu style={{ width: 18, height: 18, color: "var(--cyan)" }} />
                    <h4 style={{ margin: 0 }}>Java (Currently Learning)</h4>
                  </div>
                  <p>
                    Studying core Java with a rigorous emphasis on Object-Oriented Programming (OOP)
                    patterns, clean architecture, encapsulation, and type-safe software development.
                  </p>
                  <ul className="orca-solution-list" style={{ marginTop: 12 }}>
                    <li><Check /> Classes, Objects &amp; Inheritance</li>
                    <li><Check /> Polymorphism &amp; Method Overriding</li>
                    <li><Check /> Encapsulation &amp; Data Security</li>
                    <li><Check /> Exception Handling &amp; Collections</li>
                  </ul>
                </div>

                <div className="orca-mini-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <Terminal style={{ width: 18, height: 18, color: "var(--purple)" }} />
                    <h4 style={{ margin: 0 }}>Basic C++</h4>
                  </div>
                  <p>
                    Exploring low-level computational concepts, structured programming, memory
                    awareness, and algorithm implementation for efficient problem solving.
                  </p>
                  <ul className="orca-solution-list" style={{ marginTop: 12 }}>
                    <li><Check /> Control structures &amp; memory logic</li>
                    <li><Check /> Functions, arrays &amp; string manipulation</li>
                    <li><Check /> Basic pointer concepts &amp; references</li>
                    <li><Check /> Algorithmic logic and trace execution</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <p className="orca-section-title">
                <span>// 03</span> Core Competencies
              </p>
              <div className="orca-features-grid">
                <div className="orca-feature-card">
                  <h5>Structured Problem Solving</h5>
                  <p>Deconstructing complex challenges into clean algorithmic steps and testable edge cases.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Object-Oriented Design</h5>
                  <p>Organizing data models and domain logic into reusable, modular classes.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Data Structures Basics</h5>
                  <p>Building understanding of linear data collections, time complexity, and memory tradeoffs.</p>
                </div>
                <div className="orca-feature-card">
                  <h5>Academic Rigor</h5>
                  <p>B.E. Computer Engineering curriculum at V.V.P. Engineering College, Rajkot.</p>
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div>
              <p className="orca-section-title">
                <span>// 04</span> Technology Tags
              </p>
              <div className="orca-tech-tags">
                <span className="orca-tech-tag">Java</span>
                <span className="orca-tech-tag">C++ (Basics)</span>
                <span className="orca-tech-tag">OOP Architecture</span>
                <span className="orca-tech-tag">Algorithms</span>
                <span className="orca-tech-tag">Data Structures</span>
                <span className="orca-tech-tag">Logic Building</span>
                <span className="orca-tech-tag">VS Code</span>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
