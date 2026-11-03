import { ArrowUpRight, Sparkles } from "lucide-react";

interface DoorsSectionProps {
  onOpenDoor: (doorId: "app-dev" | "web-dev" | "core-cs" | "tools") => void;
}

const DOORS = [
  {
    id: "app-dev" as const,
    title: "APP DEVELOPMENT",
    number: "01",
    subtitle: "Mobile Systems & Location Computing",
    highlight: "ATTENDUP // CAMPUS GEOFENCING",
    theme: "door-navy",
    color: "#1e3a8a",
  },
  {
    id: "web-dev" as const,
    title: "WEB DEVELOPMENT",
    number: "02",
    subtitle: "Full-Stack Intelligence & Interfaces",
    highlight: "ORCA // MARINE AI (SIH 2026)",
    theme: "door-purple",
    color: "#581c87",
  },
  {
    id: "core-cs" as const,
    title: "CORE CS & LANGUAGES",
    number: "03",
    subtitle: "Object-Oriented Design & Problem Solving",
    highlight: "JAVA • BASIC C++ • OOP LOGIC",
    theme: "door-green",
    color: "#166534",
  },
  {
    id: "tools" as const,
    title: "TOOLS & WORKFLOW",
    number: "04",
    subtitle: "Version Control & Engineering Sync",
    highlight: "GIT • GITHUB • OFFLINE SQLITE",
    theme: "door-terracotta",
    color: "#9a3412",
  },
];

export function DoorsSection({ onOpenDoor }: DoorsSectionProps) {
  return (
    <section id="doors" className="section shell doors-section">
      <div className="section-heading reveal text-center" style={{ margin: "0 auto 48px", maxWidth: 640 }}>
        <p className="mono-label" style={{ color: "var(--amber-gold)", letterSpacing: "0.15em" }}>
          // 03 DISCIPLINE DIRECTORY
        </p>
        <h2 className="doors-heading">
          Magic happens behind the doors<span>.</span>
        </h2>
        <p className="muted-copy" style={{ marginTop: 8, fontSize: 14 }}>
          My work, one door per discipline. Step inside to explore the architecture, projects, and technologies.
        </p>
      </div>

      <div className="doors-stage reveal">
        {/* Wall molding / top rail */}
        <div className="doors-wall-rail" />

        <div className="doors-grid">
          {DOORS.map((door) => (
            <div
              key={door.id}
              className={`door-frame ${door.theme}`}
              onClick={() => onOpenDoor(door.id)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${door.title} door`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenDoor(door.id);
                }
              }}
            >
              {/* The Door itself that swings in 3D */}
              <div className="door-panel">
                {/* Vertical fluted ribbed planks */}
                <div className="door-ribs" />

                {/* Brass Plaque */}
                <div className="door-brass-plaque">
                  <span className="plaque-screw top-left" />
                  <span className="plaque-screw top-right" />
                  <span className="plaque-text">{door.title}</span>
                  <span className="plaque-screw bottom-left" />
                  <span className="plaque-screw bottom-right" />
                </div>

                {/* Brass Handle */}
                <div className="door-handle-assembly">
                  <div className="door-rosette" />
                  <div className="door-lever" />
                  <div className="door-keyhole" />
                </div>

                {/* Bottom kickplate */}
                <div className="door-kickplate" />
              </div>

              {/* Interior revealed when door swings open */}
              <div className="door-interior">
                <div className="door-interior-glow" />
                <div className="door-interior-content">
                  <span className="door-number">0{door.number}</span>
                  <h4>{door.title}</h4>
                  <p>{door.subtitle}</p>
                  <div className="door-enter-pill">
                    <Sparkles className="w-3 h-3" /> Step Inside <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Floor light beam cast by the open door */}
              <div className="door-floor-beam" />

              {/* Pill tag underneath door */}
              <div className="door-caption">
                <span className="door-caption-dot" />
                <span>{door.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
