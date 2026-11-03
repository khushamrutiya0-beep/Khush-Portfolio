import { useState } from "react";
import { Check, Sparkles, GraduationCap, Smartphone, Waves } from "lucide-react";

interface Milestone {
  year: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  icon: typeof Sparkles;
  highlight?: boolean;
}

const MILESTONES: Milestone[] = [
  {
    year: "2026",
    badge: "2026 — 2030 / NOW",
    title: "B.E. Computer Engineering",
    subtitle: "V.V.P. Engineering College, Rajkot",
    description:
      "Pursuing Bachelor of Engineering with an emphasis on algorithms, data structures, object-oriented architecture, computer systems, and software engineering principles.",
    bullets: [
      "Core CS: Object-Oriented Programming (Java), Basic C++, Algorithms",
      "Building full-stack and mobile applications with modern stacks",
      "Active problem solving and exploring scalable software design",
    ],
    icon: GraduationCap,
    highlight: true,
  },
  {
    year: "2026",
    badge: "INDEPENDENT BUILDS (2026)",
    title: "Full-Stack & Mobile Engineering",
    subtitle: "AttendUp & ORCA Systems",
    description:
      "Engineered major real-world projects combining mobile location-awareness, offline-first databases, and AI-powered multi-agent reasoning.",
    bullets: [
      "AttendUp: Geofencing campus monitoring app with React Native, Supabase & SQLite",
      "ORCA: Marine risk intelligence platform designed for Smart India Hackathon 2026",
    ],
    icon: Smartphone,
    highlight: true,
  },
  {
    year: "2026",
    badge: "COMPLETED 2026",
    title: "Higher Secondary Education (12th Grade)",
    subtitle: "Science Stream — Dholakiya School, Rajkot",
    description:
      "Comprehensive science curriculum emphasizing advanced Mathematics, Physics, and structured analytical logic.",
    icon: Check,
  },
  {
    year: "2024",
    badge: "COMPLETED 2024",
    title: "Secondary Education (10th Grade)",
    subtitle: "Dholakiya School, Rajkot",
    description:
      "Strong academic foundation in mathematics, logic, and scientific problem solving.",
    icon: Check,
  },
];

export function TimeTravelSection() {
  const [activeYear, setActiveYear] = useState("2026");

  const years = ["2026", "2024"];

  return (
    <section id="timeline" className="section shell timetravel-section">
      <div className="timetravel-grid">
        {/* Left Column: Rotary dial & Big Display Year */}
        <div className="timetravel-control-col reveal">
          <p className="mono-label" style={{ color: "var(--amber-gold)", letterSpacing: "0.15em" }}>
            // 04 CHRONICLE
          </p>
          <h2 className="timetravel-heading">
            Let&apos;s go back in time<span>.</span>
          </h2>

          <div className="timetravel-display-year">
            <span>{activeYear}</span>
          </div>

          <p className="muted-copy" style={{ maxWidth: 320, fontSize: 13, marginBottom: 24 }}>
            A journey through education, independent software builds, and hands-on engineering milestones.
          </p>

          {/* Rotary selector dial */}
          <div className="timetravel-dial">
            <div className="dial-notch-ring">
              {years.map((y) => (
                <button
                  key={y}
                  type="button"
                  className={`dial-year-btn ${activeYear === y ? "active" : ""}`}
                  onClick={() => setActiveYear(y)}
                  aria-label={`Jump to year ${y}`}
                >
                  <span className="dial-dot" />
                  <span className="dial-label">{y}</span>
                </button>
              ))}
            </div>
            <div className="dial-center-cap">
              <div className="dial-needle" />
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Cards */}
        <div className="timetravel-cards-col reveal">
          <div className="timetravel-spine" />
          <div className="timetravel-list">
            {MILESTONES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article
                  key={idx}
                  className={`timetravel-card glass-card ${item.highlight ? "is-highlighted" : ""}`}
                >
                  <div className="timetravel-node">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="timetravel-meta">
                    <span className="timetravel-badge">{item.badge}</span>
                  </div>
                  <h3 className="timetravel-title">{item.title}</h3>
                  <h4 className="timetravel-subtitle">{item.subtitle}</h4>
                  <p className="muted-copy" style={{ fontSize: 13, marginTop: 8 }}>
                    {item.description}
                  </p>
                  {item.bullets && (
                    <ul className="orca-solution-list" style={{ marginTop: 12 }}>
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} style={{ fontSize: 12 }}>
                          <Check className="w-3.5 h-3.5" /> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
