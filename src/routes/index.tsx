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
  Moon,
  Phone,
  Send,
  Sparkles,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { OrcaModal } from "../components/OrcaModal";
import { AttendUpModal } from "../components/AttendUpModal";

const TITLE = "Khush Amrutiya | Computer Engineering & Software Portfolio";
const DESCRIPTION =
  "The personal portfolio of Khush Amrutiya — a Computer Engineering student building scalable software, solving algorithmic problems, and engineering solutions across diverse technical roles.";
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
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const projects = [
  {
    name: "ATTENDUP",
    subtitle: "Smart Student Attendance & Campus Monitoring System",
    tag: "MOBILE APPLICATION // FULL-STACK // AI-ASSISTED DEVELOPMENT",
    status: "ACTIVE_PROJECT",
    description:
      "Smart, location-aware student attendance and campus monitoring application combining geofencing, automated attendance tracking, cloud data management, and offline-first synchronization.",
    tech: "React Native • Expo • TypeScript • Supabase • PostgreSQL • SQLite • Leaflet",
    image: "/attendup-cover.jpg",
    live: true,
    hasModal: true,
    modalKey: "attendup",
    command: "attendup.geofence()",
  },
  {
    name: "ORCA",
    subtitle: "Intelligent Ocean Risk & Coastal Analytics System",
    tag: "AI // MARINE INTELLIGENCE // FULL-STACK",
    status: "SIH_2026",
    description:
      "AI-powered marine intelligence platform combining multi-agent AI, deterministic risk assessment, geospatial analysis and marine decision support.",
    tech: "Next.js • React • TypeScript • Node.js • Tailwind CSS • Leaflet • Gemini AI",
    image: "/orca-cover.jpg",
    live: true,
    hasModal: true,
    modalKey: "orca",
    command: "orca.marine_intel()",
  },
];

function Page() {
  const [dark, setDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [orcaModalOpen, setOrcaModalOpen] = useState(false);
  const [attendUpModalOpen, setAttendUpModalOpen] = useState(false);

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

  const openProjectModal = (modalKey?: string) => {
    if (modalKey === "orca") setOrcaModalOpen(true);
    if (modalKey === "attendup") setAttendUpModalOpen(true);
  };

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
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
          <span className="version"></span>
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun /> : <Moon />}
          </button>
          <button
            className="menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section id="home" className="hero shell">
        <div className="hero-copy reveal">
          <p className="hero-kicker">Hello, world. I&apos;m</p>
          <h1>
            Khush <span>Amrutiya.</span>
          </h1>
          <p className="hero-description">
            First-year Computer Engineering student. I build things — mobile apps, web tools,
            and whatever problem lands in front of me.
          </p>

          <div className="hero-actions">
            <button className="button primary" onClick={() => scrollTo("projects")}>
              View My Work <ArrowUpRight />
            </button>
            <button className="button secondary" onClick={() => scrollTo("contact")}>
              Get In Touch <Mail />
            </button>
          </div>
          <div className="hero-meta">
            <span>
              <span className="live-dot" /> OPEN TO INTERNSHIPS & ALL TECH ROLES
            </span>
            <span>RAJKOT, GUJARAT</span>
          </div>
        </div>
        <div className="hero-visual reveal">
          <figure className="hero-photo-card">
            <img src={HERO_IMAGE} alt="Khush Amrutiya standing beside a white car outdoors" />
            <figcaption>
              <span>
                <span className="live-dot" /> KHUSH_AMRUTIYA
              </span>
              <a
                className="photo-linkedin"
                href="https://www.linkedin.com/in/khush-amrutiya"
                target="_blank"
                rel="noreferrer"
              >
                <Network /> LINKEDIN <ArrowUpRight />
              </a>
            </figcaption>
          </figure>

          <div className="hero-terminal">
            <div className="terminal-top">
              <span>
                <i />
                <i />
                <i />
              </span>
              <span>khush@portfolio:~</span>
              <span>01:01</span>
            </div>
            <div className="terminal-body">
              <p>
                <span className="terminal-prompt">$</span> who am i
              </p>
              <p className="terminal-output">engineer_&_problem_solver</p>
              <p>
                <span className="terminal-prompt">$</span> cat focus.txt
              </p>
              <p className="terminal-output">
                web fundamentals (html & css)
                <br />
                basic c++ & logic building
                <br />
                java (currently learning)
                <br />
                git & github workflow
              </p>
              <p>
                <span className="terminal-prompt">$</span> <span className="cursor" />
              </p>
            </div>
            <div className="terminal-footer">
              <span>
                <Code2 /> HTML • CSS • C++ • JAVA • GITHUB
              </span>
              <span>
                STATUS: <b>ONLINE</b>
              </span>
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
            <p className="muted-copy">
              B.E. Computer Engineering at V.V.P. Engineering College, Rajkot. I started coding to
              solve real problems — ended up building a full-stack attendance app and an AI marine
              intelligence platform in my first year.
            </p>
            <div className="about-columns">
              <div><h3>Approach</h3><p className="muted-copy">Break it down, build it up, ship it clean.</p></div>
              <div><h3>Currently learning</h3><p className="muted-copy">Java, OOP, data structures, and system design fundamentals.</p></div>
              <div><h3>Beyond code</h3><p className="muted-copy">Good communicator. Fast learner. Reliable team member.</p></div>
              <div><h3>Open to</h3><p className="muted-copy">Internships, dev roles, anything that challenges me.</p></div>
            </div>
          </article>
        </div>
      </section>

      <section id="education" className="section shell">
        <div className="section-heading reveal">
          <span>// 02</span>
          <div>
            <p>ACADEMIC_TIMELINE</p>
            <h2>
              Academic journey<span>.</span>
            </h2>
          </div>
          <span className="heading-line" />
        </div>
        <div className="timeline-grid">
          <article className="glass-card edu-card reveal">
            <span className="timeline-node active">
              <Sparkles />
            </span>
            <span className="timeline-date">2026 — 2030 / NOW</span>
            <h3>B.E. Computer Engineering</h3>
            <p>
              V.V.P. Engineering College, Rajkot — B.E. Computer Engineering.
            </p>
          </article>
          <article className="glass-card edu-card reveal">
            <span className="timeline-node done">
              <Check />
            </span>
            <span className="timeline-date">COMPLETED 2026</span>
            <h3>Higher Secondary Education</h3>
            <p>
              Science Stream — Dholakiya School, Rajkot.
            </p>
          </article>
          <article className="glass-card edu-card reveal">
            <span className="timeline-node done">
              <Check />
            </span>
            <span className="timeline-date">COMPLETED 2024</span>
            <h3>Secondary Education (10th Grade)</h3>
            <p>
              Dholakiya School, Rajkot.
            </p>
          </article>
        </div>
      </section>

      <section id="skills" className="section shell">
        <div className="section-heading reveal">
          <span>// 03</span>

          <div>
            <p>STACK_MANIFEST</p>
            <h2>
              Technical stack<span>.</span>
            </h2>
          </div>
          <span className="heading-line" />
        </div>
        <div className="skills-grid">
          <SkillCard
            icon="01"
            title="PROGRAMMING LANGUAGES"
            items={[
              "Basic C++",
              "Java (Currently Learning)",
              "Object-Oriented Programming (OOP)",
              "Logic & Problem Solving",
            ]}
          />
          <SkillCard
            icon="02"
            title="WEB DEVELOPMENT"
            items={[
              "HTML5 (Semantic Web)",
              "CSS3 (Layouts & Styling)",
              "Responsive Web Design",
              "Web Page Fundamentals",
            ]}
          />
          <SkillCard
            icon="03"
            title="TOOLS & VERSION CONTROL"
            items={[
              "GitHub (Repositories & Collaboration)",
              "Git (Version Control)",
              "VS Code",
              "Command Line Basics",
            ]}
            accent
          />
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading reveal">
          <span>// 04</span>
          <div>
            <p>WORKSPACE_LOG</p>
            <h2>
              Portfolio archive<span>.</span>
            </h2>
          </div>
          <span className="heading-line" />
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card glass-card reveal ${project.hasModal ? "card-interactive" : ""}`}
              key={project.name}
              onClick={() => {
                if (project.hasModal) {
                  openProjectModal(project.modalKey);
                }
              }}
              role={project.hasModal ? "button" : undefined}
              tabIndex={project.hasModal ? 0 : undefined}
              aria-label={project.hasModal ? `Open ${project.name} project details` : undefined}
              onKeyDown={(e) => {
                if (project.hasModal && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  openProjectModal(project.modalKey);
                }
              }}
            >
              <div className="project-top">
                <span className={project.live ? "status live" : "status"}>
                  <span /> {project.status}
                </span>
                <span>0{index + 1}</span>
              </div>
              <div className={`project-visual ${project.image ? "has-image" : ""}`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="project-cover-img"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="project-grid" />
                    <Terminal />
                    <span className="project-command">
                      {project.live ? "portfolio.init()" : "project.pending()"}
                    </span>
                  </>
                )}
              </div>
              <p className="project-tag">{project.tag}</p>
              <h3>{project.name}</h3>
              {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
              <p className="muted-copy">{project.description}</p>
              {project.tech && (
                <p className="project-tech-snippet">
                  <span className="tech-label">Tech: </span>
                  {project.tech}
                </p>
              )}
              <button
                type="button"
                className="text-link"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.hasModal) {
                    openProjectModal(project.modalKey);
                  } else if (project.live) {
                    scrollTo("contact");
                  }
                }}
              >
                {project.hasModal
                  ? "VIEW DETAILS"
                  : project.live
                    ? "EXPLORE PROJECT"
                    : "COMING SOON"}{" "}
                <ArrowUpRight />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section shell contact-section">
        <div className="section-heading reveal">
          <span>// 05</span>
          <div>
            <p>OPEN_CONNECTION</p>
            <h2>
              Get in touch<span>.</span>
            </h2>
          </div>
          <span className="heading-line" />
        </div>
        <div className="contact-grid">
          <div className="contact-copy reveal">
            <p className="large-copy">Have an idea, an opportunity, or just want to say hello?</p>
            <div className="contact-links">
              <a href="mailto:khushamrutiya9@gmail.com">
                <Mail /> khushamrutiya9@gmail.com <ArrowUpRight />
              </a>
              <a href="tel:+919726696590">
                <Phone /> +91 97266 96590 <ArrowUpRight />
              </a>
              <a href="https://www.linkedin.com/in/khush-amrutiya" target="_blank" rel="noreferrer">
                <Network /> linkedin.com/in/khush-amrutiya <ArrowUpRight />
              </a>
            </div>
          </div>
          <form
            className="glass-card contact-form reveal"
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
            <label htmlFor="name">
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
            <label htmlFor="email">
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
            <label htmlFor="message">
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
            <button className="button primary" type="submit">
              {sent ? (
                <>
                  Message ready <Check />
                </>
              ) : (
                <>
                  Send message <Send />
                </>
              )}
            </button>
            {sent && (
              <p className="success-note">
                Your mail app just opened with the message — hit send and it lands in
                khushamrutiya9@gmail.com.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="footer shell">
        <span>
          <span className="live-dot" /> KHUSH.AMRUTIYA
        </span>

        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitBranch />
        </a>
      </footer>
      <OrcaModal isOpen={orcaModalOpen} onClose={setOrcaModalOpen} />
      <AttendUpModal isOpen={attendUpModalOpen} onClose={setAttendUpModalOpen} />
    </main>
  );
}

function SkillCard({
  icon,
  title,
  items,
  accent = false,
}: {
  icon: string;
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <article className={`skill-card glass-card reveal ${accent ? "accent-card" : ""}`}>
      <span className="skill-number">{icon}</span>
      <p className="mono-label">{title}</p>
      <div className="skill-list">
        {items.map((item) => (
          <span key={item}>
            <span className="list-dot" />
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
