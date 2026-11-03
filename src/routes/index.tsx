import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  GitBranch,
  Network,
  Mail,
  Menu,
  Phone,
  Send,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { OrcaModal } from "../components/OrcaModal";
import { AttendUpModal } from "../components/AttendUpModal";
import { CoreCSModal } from "../components/CoreCSModal";
import { ToolsModal } from "../components/ToolsModal";
import { PullCordSwitch } from "../components/PullCordSwitch";
import { FlipDeskNotepad } from "../components/FlipDeskNotepad";
import { DoorsSection } from "../components/DoorsSection";
import { TimeTravelSection } from "../components/TimeTravelSection";

const TITLE = "Khush Amrutiya | Computer Engineering & Software Portfolio";
const DESCRIPTION =
  "The personal portfolio of Khush Amrutiya — a Computer Engineering student building scalable software, location-aware mobile applications, and reliable technical systems.";
const HERO_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-09%20at%201.49.39%20PM-UbKjiNZf4SXk3E5h7V1Fo1VHIIfR3L.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: Page,
});

const navItems: [string, string][] = [
  ["Home", "home"],
  ["About", "about"],
  ["Doors", "doors"],
  ["Timeline", "timeline"],
  ["Contact", "contact"],
];

function Page() {
  const [dark, setDark] = useState(false); // default to daytime editorial aesthetic
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Modals for the 4 Doors
  const [orcaModalOpen, setOrcaModalOpen] = useState(false);
  const [attendUpModalOpen, setAttendUpModalOpen] = useState(false);
  const [coreCSModalOpen, setCoreCSModalOpen] = useState(false);
  const [toolsModalOpen, setToolsModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 120;
      setScrolled(past);
      if (!past) setMobileOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleDoorOpen = (doorId: "app-dev" | "web-dev" | "core-cs" | "tools") => {
    if (doorId === "app-dev") setAttendUpModalOpen(true);
    if (doorId === "web-dev") setOrcaModalOpen(true);
    if (doorId === "core-cs") setCoreCSModalOpen(true);
    if (doorId === "tools") setToolsModalOpen(true);
  };

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Header with Brand & Pull-Cord Light Switch */}
      <header className={scrolled ? "site-header header-visible" : "site-header"}>
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Back to home">
          <span className="brand-mark">
            <span />
          </span>
          <span>
            KHUSH<span className="brand-muted">.AMRUTIYA</span>
          </span>
        </button>

        <nav className={mobileOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Vintage Interactive Pull-Cord hanging on the right */}
        <PullCordSwitch dark={dark} onToggle={() => setDark(!dark)} />
      </header>

      {/* 1. HERO SECTION */}
      <section id="home" className="hero shell">
        <div className="hero-copy reveal">
          <p className="hero-kicker">Hi, I&apos;m</p>
          <h1>
            Khush <span>Amrutiya.</span>
          </h1>

          <p
            style={{
              margin: "12px 0 4px",
              fontSize: 16,
              color: "var(--muted)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.08em",
            }}
          >
            I AM A
          </p>

          {/* 3D Flip Desk Notepad */}
          <FlipDeskNotepad />

          <p className="hero-description" style={{ marginTop: 8 }}>
            A Computer Engineering student building strong foundations in software architecture,
            location-aware mobile applications, and reliable technical systems — bringing structured
            problem solving to engineering and full-stack development.
          </p>

          <div className="hero-actions">
            <button className="button primary" onClick={() => scrollTo("doors")}>
              Explore My Work <ArrowUpRight />
            </button>
            <button className="button secondary" onClick={() => scrollTo("contact")}>
              Get In Touch <Mail />
            </button>
          </div>

          <div className="hero-meta">
            <span>
              <span className="live-dot" /> OPEN TO INTERNSHIPS &amp; TECH ROLES
            </span>
            <span>RAJKOT, GUJARAT</span>
          </div>
        </div>

        {/* Cutout Portrait with Studio Shadow */}
        <div className="hero-visual reveal">
          <div className="hero-editorial-portrait">
            <div className="portrait-stage">
              <img src={HERO_IMAGE} alt="Khush Amrutiya" />
              <div className="portrait-badge-pill">
                <span className="pulse-dot" /> AVAILABLE FOR WORK
              </div>
            </div>
          </div>
        </div>

        <button
          className="scroll-cue"
          onClick={() => scrollTo("about")}
          aria-label="Scroll to about"
        >
          <ArrowDown />
        </button>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="section shell">
        <div className="section-heading reveal">
          <span>// 01</span>
          <div>
            <p>PROFILE_README</p>
            <h2>
              About me<span>.</span>
            </h2>
          </div>
          <span className="heading-line" />
        </div>
        <div className="about-grid">
          <article className="glass-card about-card reveal">
            <div className="card-icon">
              <Terminal />
            </div>
            <p className="mono-label">$ cat /profile/about.md</p>
            <p className="large-copy">
              An adaptable engineer turning complex problems into structured logic and dependable
              code — grounded in computer engineering principles that scale across every technical
              domain.
            </p>
            <p className="muted-copy">
              Currently pursuing B.E. in Computer Engineering at V.V.P. Engineering College, Rajkot.
              Whether architecting mobile apps, engineering location-aware systems, or mastering
              data structures, I focus on deep conceptual understanding and delivering reliable,
              high-quality work.
            </p>
            <div className="about-columns">
              <div>
                <h3>How I think</h3>
                <p className="muted-copy">
                  Structured problem solving. I deconstruct complex challenges into core components,
                  evaluate trade-offs, and iterate methodically until the solution is robust and
                  efficient.
                </p>
              </div>
              <div>
                <h3>What I focus on</h3>
                <p className="muted-copy">
                  Core CS foundations — building strong basics in C++, learning Java and OOP,
                  crafting web interfaces with HTML &amp; CSS, and managing code with Git &amp; GitHub.
                </p>
              </div>
              <div>
                <h3>Beyond code</h3>
                <p className="muted-copy">
                  Strong technical communication, collaborative teamwork, proactive learning, and
                  clear documentation that connects engineering logic to real-world outcomes.
                </p>
              </div>
              <div>
                <h3>Open to</h3>
                <p className="muted-copy">
                  Internships, software engineering, mobile development, and technical roles where
                  dedication, fast learning, and consistency create tangible value.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 3. MAGIC HAPPENS BEHIND THE DOORS */}
      <DoorsSection onOpenDoor={handleDoorOpen} />

      {/* 4. TIME TRAVEL TIMELINE */}
      <TimeTravelSection />

      {/* 5. EDITORIAL HIGH-CONTRAST DARK CTA & CONTACT */}
      <footer id="contact" className="editorial-dark-cta">
        <div className="shell">
          <div className="contact-heading reveal text-center" style={{ maxWidth: 720, margin: "0 auto 48px" }}>
            <span className="orca-badge-cyan" style={{ marginBottom: 16, display: "inline-flex" }}>
              <Sparkles className="w-3.5 h-3.5" /> AVAILABLE FOR INTERNSHIPS &amp; PROJECTS
            </span>
            <h2 className="cta-heading">
              Need something built? <span>Let&apos;s make it happen.</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.6 }}>
              Whether you have an internship opportunity, an application to engineer, or just want to discuss software architecture — my inbox is always open.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-copy reveal">
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                Direct Channels
              </h3>
              <p className="muted-copy" style={{ color: "#94a3b8" }}>
                Reach out via email, phone, or LinkedIn. I typically reply within a few hours.
              </p>
              <div className="contact-links" style={{ marginTop: 24 }}>
                <a href="mailto:khushamrutiya9@gmail.com">
                  <Mail /> khushamrutiya9@gmail.com <ArrowUpRight />
                </a>
                <a href="tel:+919726696590">
                  <Phone /> +91 97266 96590 <ArrowUpRight />
                </a>
                <a href="https://www.linkedin.com/in/khush-amrutiya" target="_blank" rel="noreferrer">
                  <Network /> linkedin.com/in/khush-amrutiya <ArrowUpRight />
                </a>
                <a href="https://github.com/khushamrutiya0-beep" target="_blank" rel="noreferrer">
                  <GitBranch /> github.com/khushamrutiya0-beep <ArrowUpRight />
                </a>
              </div>
            </div>

            <form
              className="glass-card contact-form reveal"
              style={{ background: "rgba(255, 255, 255, 0.04)", borderColor: "rgba(255, 255, 255, 0.12)" }}
              onSubmit={(event) => {
                event.preventDefault();
                const subject = `Portfolio contact from ${name || "website visitor"}`;
                const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
                window.location.href = `mailto:khushamrutiya9@gmail.com?subject=${encodeURIComponent(
                  subject,
                )}&body=${encodeURIComponent(body)}`;
                setSent(true);
              }}
            >
              <label htmlFor="name" style={{ color: "#cbd5e1" }}>
                YOUR_NAME
                <input
                  id="name"
                  required
                  maxLength={100}
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label htmlFor="email" style={{ color: "#cbd5e1" }}>
                YOUR_EMAIL
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <label htmlFor="message" style={{ color: "#cbd5e1" }}>
                YOUR_MESSAGE
                <textarea
                  id="message"
                  required
                  maxLength={2000}
                  placeholder="Tell me about your team, project, or opportunity..."
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </label>
              <button className="button primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
                {sent ? (
                  <>
                    Message ready <Check />
                  </>
                ) : (
                  <>
                    Send Message <Send />
                  </>
                )}
              </button>
              {sent && (
                <p className="success-note" style={{ color: "#4ade80" }}>
                  Your mail client just opened with the draft — send to connect!
                </p>
              )}
            </form>
          </div>

          <div
            style={{
              marginTop: 64,
              paddingTop: 24,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              color: "#94a3b8",
              font: "12px/1 'JetBrains Mono', monospace",
            }}
          >
            <span>KHUSH AMRUTIYA © 2026 • COMPUTER ENGINEERING</span>
            <div style={{ display: "flex", gap: 20 }}>
              <button
                type="button"
                onClick={() => scrollTo("home")}
                style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer" }}
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* 4 Door Modals */}
      <AttendUpModal isOpen={attendUpModalOpen} onClose={setAttendUpModalOpen} />
      <OrcaModal isOpen={orcaModalOpen} onClose={setOrcaModalOpen} />
      <CoreCSModal isOpen={coreCSModalOpen} onClose={setCoreCSModalOpen} />
      <ToolsModal isOpen={toolsModalOpen} onClose={setToolsModalOpen} />
    </main>
  );
}
