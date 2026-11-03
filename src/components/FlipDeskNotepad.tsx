import { useEffect, useState } from "react";

const ROLES = [
  "App Developer",
  "Web Developer",
  "Computer Engineering Student",
  "Software Problem Solver",
];

export function FlipDeskNotepad() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROLES.length);
        setAnimating(false);
      }, 500);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const currentRole = ROLES[index];
  const nextRole = ROLES[(index + 1) % ROLES.length];

  return (
    <div className="flip-notepad-container" aria-label={`Current title: ${currentRole}`}>
      {/* Spiral wire rings */}
      <div className="notepad-spirals">
        {Array.from({ length: 11 }).map((_, i) => (
          <div className="notepad-spiral-ring" key={i}>
            <span className="ring-hole" />
            <span className="ring-wire" />
          </div>
        ))}
      </div>

      {/* The paper card */}
      <div className="notepad-card">
        <div className="notepad-paper-bg" />
        <div className={`notepad-content ${animating ? "is-flipping" : ""}`}>
          <span className="notepad-text">{animating ? nextRole : currentRole}</span>
        </div>
      </div>
    </div>
  );
}
