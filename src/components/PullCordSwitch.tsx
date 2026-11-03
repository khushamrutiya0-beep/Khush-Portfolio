import { useState } from "react";

interface PullCordSwitchProps {
  dark: boolean;
  onToggle: () => void;
}

export function PullCordSwitch({ dark, onToggle }: PullCordSwitchProps) {
  const [pulling, setPulling] = useState(false);

  const handlePull = () => {
    if (pulling) return;
    setPulling(true);

    // Subtle audio click feedback using Web Audio API
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // AudioContext not supported or blocked
    }

    onToggle();

    setTimeout(() => {
      setPulling(false);
    }, 450);
  };

  return (
    <div
      className={`pull-cord-wrapper ${pulling ? "is-pulling" : ""}`}
      onClick={handlePull}
      title={dark ? "Pull to switch to Day mode" : "Pull to switch to Night mode"}
      role="button"
      tabIndex={0}
      aria-label={dark ? "Switch to daylight mode" : "Switch to night mode"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handlePull();
        }
      }}
    >
      <div className="pull-cord-line" />
      <div className="pull-cord-bead" />
      <div className="pull-cord-handle">
        <div className="pull-cord-knob" />
      </div>
    </div>
  );
}
