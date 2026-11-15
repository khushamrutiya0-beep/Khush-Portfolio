import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Mail,
  Menu,
  Moon,
  Network,
  Phone,
  Send,
  Shield,
  Smartphone,
  Sparkles,
  Sun,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { OrcaModal } from "../components/OrcaModal";
import { AttendUpModal } from "../components/AttendUpModal";

const TITLE = "Khush Amrutiya | Computer Engineering & Software Portfolio";
const DESCRIPTION =
  "The personal portfolio of Khush Amrutiya — a Computer Engineering student building scalable software, solving algorithmic problems, and engineering solutions across diverse technical roles.";
const HERO_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-09%20at%201.49.39%20PM-UbKjiNZf4SXk3E5h7V1Fo1VHIIfR3L.jpeg";
const SITE_URL = "https://khush.de5.net/";

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: "Khush Amrutiya",
      givenName: "Khush",
      familyName: "Amrutiya",
      url: SITE_URL,
      image: HERO_IMAGE,
      jobTitle: "Computer Engineering Student & Software Developer",
      description: DESCRIPTION,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "V.V.P. Engineering College, Rajkot",
      },
      sameAs: ["https://www.linkedin.com/in/khush-amrutiya", "https://github.com/Khush-Amrutiya"],
      knowsAbout: [
        "Computer Engineering",
        "React Native",
        "Next.js",
        "TypeScript",
        "C++",
        "Java",
        "SQLite",
        "Supabase",
        "Geofencing",
        "Multi-Agent AI",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Khush Amrutiya | Computer Engineering Portfolio",
      description: DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}#person`,
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Khush Amrutiya, Khush, Khush Amrutiya portfolio, khush.de5.net, Computer Engineering VVP Rajkot, software engineer portfolio, AttendUp, ORCA SIH 2026, web developer Rajkot",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: HERO_IMAGE },
      { property: "profile:first_name", content: "Khush" },
      { property: "profile:last_name", content: "Amrutiya" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdPerson),
      },
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
    subtitle: "Smart Campus & Student Attendance App",
    tag: "MOBILE APPLICATION // FULL-STACK // AI-ASSISTED",
    status: "ACTIVE_PROJECT",
    description:
      "Automated geofenced attendance tracking with offline-first synchronization and privacy-first parental updates.",
    tech: "React Native • Expo • TypeScript • Supabase • SQLite",
    image: "/attendup-cover.jpg",
    live: true,
    hasModal: true,
    modalKey: "attendup",
    command: "attendup.geofence()",
  },
  {
    name: "ORCA",
    subtitle: "Ocean Risk & Coastal Analytics Platform",
    tag: "AI // MARINE INTELLIGENCE // FULL-STACK",
    status: "SIH_2026",
    description:
      "Multi-agent AI marine platform delivering live coastal risk assessment, interactive tactical maps, and safe route guidance.",
    tech: "Next.js • TypeScript • Tailwind CSS • Leaflet • Gemini AI",
    image: "/orca-cover.jpg",
    live: true,
    hasModal: true,
    modalKey: "orca",
    command: "orca.marine_intel()",
  },
];

const KICKER_TEXT = "Hello, world. I'm";
const ROLE_WORDS = ["Computer Engineer", "Good Designer", "Problem Solver", "Developer"];

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

  // Typewriter effect for hero kicker ("Hello, world. I'm")
  const [typedKicker, setTypedKicker] = useState("");
  const [kickerComplete, setKickerComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTypedKicker(KICKER_TEXT.slice(0, index));
      if (index >= KICKER_TEXT.length) {
        clearInterval(interval);
        setKickerComplete(true);
      }
    }, 65);
    return () => clearInterval(interval);
  }, []);

  // Write and erase typewriter animation for roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isRoleDeleting, setIsRoleDeleting] = useState(false);

  useEffect(() => {
    const currentWord = ROLE_WORDS[roleIndex % ROLE_WORDS.length] ?? "";
    let timer: ReturnType<typeof setTimeout>;

    if (!isRoleDeleting) {
      if (roleText.length < currentWord.length) {
        timer = setTimeout(() => {
          setRoleText(currentWord.slice(0, roleText.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => {
          setIsRoleDeleting(true);
        }, 1600);
      }
    } else {
      if (roleText.length > 0) {
        timer = setTimeout(() => {
          setRoleText(currentWord.slice(0, roleText.length - 1));
        }, 38);
      } else {
        setIsRoleDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLE_WORDS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [roleText, isRoleDeleting, roleIndex]);

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

  // Live World Clock (Rajkot, IN)
  const [clock, setClock] = useState({ time: "", isDay: true });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeFmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const hourFmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        hour12: false,
      });
      const hr = parseInt(hourFmt.format(now), 10);
      setClock({
        time: timeFmt.format(now),
        isDay: hr >= 6 && hr < 18,
      });
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Linear-style card spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLElement>(
        ".glass-card, .hero-terminal, .hero-photo-card",
      );
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hovered project for project-adaptive ambient glow
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // macOS Fluid Magnetic Dock mouse tracking
  const [dockMouseX, setDockMouseX] = useState<number | null>(null);
  const handleDockMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDockMouseX(e.clientX - rect.left);
  };
  const handleDockMouseLeave = () => {
    setDockMouseX(null);
  };

  // Interactive Live Terminal state & commands
  const [cliInput, setCliInput] = useState("");
  const [terminalLog, setTerminalLog] = useState<string | null>(null);

  const runTerminalCmd = (cmd: string) => {
    const clean = cmd.trim().toLowerCase();
    if (clean === "skills") {
      setTerminalLog(
        "CORE: C++, Java | DEV: HTML5, CSS3, React, React Native | TOOLS: Git, Database, CLI",
      );
    } else if (clean === "projects") {
      setTerminalLog("Displaying ORCA & ATTENDUP. Scrolling to archive...");
      scrollTo("projects");
    } else if (clean === "contact") {
      setTerminalLog("Contact: khushamrutiya9@gmail.com | +91 97266 96590");
      scrollTo("contact");
    } else if (clean === "help") {
      setTerminalLog(
        "Available commands: [ skills ] [ projects ] [ contact ] [ theme ] [ clear ] [ whoami ]",
      );
    } else if (clean === "theme") {
      setDark((prev) => !prev);
      setTerminalLog("Theme toggled successfully.");
    } else if (clean === "clear") {
      setTerminalLog(null);
    } else if (clean === "whoami") {
      setTerminalLog(
        "Khush Amrutiya — Computer Engineering Student, Full-Stack Developer & Problem Solver.",
      );
    } else {
      setTerminalLog(`Command not found: "${cmd}". Type 'help' to see valid commands.`);
    }
    setCliInput("");
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    runTerminalCmd(cliInput);
  };

  // Magnetic button hover
  const handleMagneticMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "";
  };

  // Active section for Mobile Dock
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sections = ["home", "about", "education", "skills", "projects", "contact"];
    const handleScrollSpy = () => {
      const scrollY = window.scrollY + 240;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

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
      <div className={`ambient ambient-one ${hoveredProject ? `tint-${hoveredProject}` : ""}`} />
      <div className={`ambient ambient-two ${hoveredProject ? `tint-${hoveredProject}` : ""}`} />
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
          <p className="hero-kicker">
            <span>{typedKicker}</span>
            <span className={kickerComplete ? "kicker-cursor blink-subtle" : "kicker-cursor"} />
          </p>
          <h1>
            Khush <span>Amrutiya.</span>
          </h1>
          <p className="hero-description">
            First-year Computer Engineering student. I build things — mobile apps, web tools, and
            whatever problem lands in front of me.
          </p>

          <div className="hero-actions">
            <button
              className="button primary"
              onClick={() => scrollTo("projects")}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              View My Work <ArrowUpRight />
            </button>
            <button
              className="button secondary"
              onClick={() => scrollTo("contact")}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              Get In Touch <Mail />
            </button>
          </div>
          <div className="hero-meta">
            <span className="meta-badge-pulse">
              <span className="live-dot-radar">
                <span className="live-dot" />
                <span className="radar-ping" />
              </span>
              OPEN TO INTERNSHIPS & ALL TECH ROLES
            </span>
            <div className="live-clock-pill">
              <span className="clock-icon-wrapper">
                {clock.isDay ? (
                  <Sun className="clock-sun animate-spin-slow" />
                ) : (
                  <Moon className="clock-moon" />
                )}
              </span>
              <span className="clock-text">
                <strong>Rajkot, IN</strong> • {clock.time || "04:55:00 PM"} IST
              </span>
            </div>
          </div>
        </div>
        <div className="hero-visual reveal">
          <figure className="hero-photo-card">
            <div className="hero-photo-frame">
              <img
                src={HERO_IMAGE}
                alt="Khush Amrutiya standing beside a car outdoors"
                className="hero-photo"
              />
            </div>
            <figcaption>
              <span>
                <span className="live-dot" /> KHUSH_AMRUTIYA
              </span>
              <a
                className="photo-linkedin"
                href="https://www.linkedin.com/in/khush-amrutiya"
                target="_blank"
                rel="noreferrer"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
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
              <p className="terminal-output role-output">
                <span>{roleText}</span>
                <span className="role-cursor" />
              </p>
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

              {/* Interactive Terminal Playground */}
              <div className="terminal-command-chips">
                <button type="button" onClick={() => runTerminalCmd("skills")}>
                  $ skills
                </button>
                <button type="button" onClick={() => runTerminalCmd("projects")}>
                  $ projects
                </button>
                <button type="button" onClick={() => runTerminalCmd("contact")}>
                  $ contact
                </button>
                <button type="button" onClick={() => runTerminalCmd("help")}>
                  $ help
                </button>
                <button type="button" onClick={() => runTerminalCmd("clear")}>
                  $ clear
                </button>
              </div>

              <form className="terminal-cli-form" onSubmit={handleTerminalSubmit}>
                <span className="terminal-prompt">$</span>
                <input
                  type="text"
                  className="terminal-cli-input"
                  placeholder="Type a command (skills, projects, help...)"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                />
              </form>

              {terminalLog && (
                <div className="terminal-log-output">
                  <span>{terminalLog}</span>
                </div>
              )}
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
              <div>
                <h3>Approach</h3>
                <p className="muted-copy">Break it down, build it up, ship it clean.</p>
              </div>
              <div>
                <h3>Currently learning</h3>
                <p className="muted-copy">
                  Java, OOP, data structures, and system design fundamentals.
                </p>
              </div>
              <div>
                <h3>Beyond code</h3>
                <p className="muted-copy">Good communicator. Fast learner. Reliable team member.</p>
              </div>
              <div>
                <h3>Open to</h3>
                <p className="muted-copy">Internships, dev roles, anything that challenges me.</p>
              </div>
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
            <p>V.V.P. Engineering College, Rajkot — B.E. Computer Engineering.</p>
          </article>
          <article className="glass-card edu-card reveal">
            <span className="timeline-node done">
              <Check />
            </span>
            <span className="timeline-date">COMPLETED 2026</span>
            <h3>Higher Secondary Education</h3>
            <p>Science Stream — Dholakiya School, Rajkot.</p>
          </article>
          <article className="glass-card edu-card reveal">
            <span className="timeline-node done">
              <Check />
            </span>
            <span className="timeline-date">COMPLETED 2024</span>
            <h3>Secondary Education (10th Grade)</h3>
            <p>Dholakiya School, Rajkot.</p>
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
          <SkillCard icon="01" title="CORE & LANGUAGES" items={["C++(Basics)", "Java"]} />
          <SkillCard icon="02" title="DEVELOPMENT & WEB" items={["HTML5", "CSS"]} />
          <SkillCard
            icon="03"
            title="TOOLS & DATABASES"
            items={["Git & GitHub", "Database", "Command Line(Basics)"]}
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
              onMouseEnter={() => setHoveredProject(project.name.toLowerCase())}
              onMouseLeave={() => setHoveredProject(null)}
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

              {/* Product Showcase Device Frames */}
              {project.name === "ORCA" ? (
                <div className="project-device-frame browser-frame">
                  <div className="browser-chrome">
                    <div className="browser-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <div className="browser-url-bar">
                      <Lock className="url-lock-icon" />
                      <span>orca.marine/dashboard</span>
                    </div>
                    <span className="browser-tab-badge">AI INTEL</span>
                  </div>
                  <div className="device-screen-wrap">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="project-cover-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : (
                <div className="project-device-frame mobile-frame">
                  <div className="mobile-chrome">
                    <div className="mobile-speaker" />
                    <span className="mobile-status-text">attendup.app // geofence</span>
                    <span className="mobile-radar-dot" />
                  </div>
                  <div className="device-screen-wrap">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="project-cover-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              <p className="project-tag">{project.tag}</p>
              <h3>{project.name}</h3>
              {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}

              {/* Impact Metrics Badges */}
              {project.name === "ORCA" ? (
                <div className="project-impact-pills">
                  <span className="impact-pill">
                    <Zap /> Multi-Agent AI
                  </span>
                  <span className="impact-pill">
                    <Shield /> Deterministic Risk
                  </span>
                  <span className="impact-pill">
                    <Globe /> Tactical Marine GIS
                  </span>
                </div>
              ) : (
                <div className="project-impact-pills">
                  <span className="impact-pill">
                    <Shield /> 100% Geofenced Privacy
                  </span>
                  <span className="impact-pill">
                    <Smartphone /> Offline SQLite Queue
                  </span>
                  <span className="impact-pill">
                    <Check /> Real-Device Tested
                  </span>
                </div>
              )}

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

        {/* macOS-Style Fluid Magnetic Icon Dock */}
        <div className="macos-dock-wrapper reveal">
          <p className="mono-label" style={{ fontSize: 11, marginBottom: 4 }}>
            // QUICK ACTION & CONNECT DOCK
          </p>
          <div
            className="macos-dock"
            onMouseMove={handleDockMouseMove}
            onMouseLeave={handleDockMouseLeave}
          >
            {[
              {
                name: "GitHub",
                icon: <GitBranch />,
                href: "https://github.com/khushamrutiya0-beep",
                tooltip: "github.com/khushamrutiya0-beep",
              },
              {
                name: "LinkedIn",
                icon: <Globe />,
                href: "https://linkedin.com/in/khushamrutiya",
                tooltip: "linkedin.com/in/khushamrutiya",
              },
              {
                name: "Email",
                icon: <Mail />,
                href: "mailto:khushamrutiya9@gmail.com",
                tooltip: "khushamrutiya9@gmail.com",
              },
              {
                name: "Phone",
                icon: <Phone />,
                href: "tel:+919726696590",
                tooltip: "+91 97266 96590",
              },
              {
                name: "Terminal",
                icon: <Terminal />,
                onClick: () => scrollTo("home"),
                tooltip: "Jump to Terminal",
              },
            ].map((item, index) => {
              const itemWidth = 56;
              const itemCenter = index * itemWidth + 28;
              let scale = 1;
              if (dockMouseX !== null) {
                const dist = Math.abs(dockMouseX - itemCenter);
                const maxDist = 140;
                if (dist < maxDist) {
                  scale = 1 + 0.36 * Math.cos((dist / maxDist) * (Math.PI / 2));
                }
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                  onClick={item.onClick}
                  className="macos-dock-item"
                  style={{
                    transform: `translateY(-${(scale - 1) * 16}px) scale(${scale})`,
                  }}
                  aria-label={item.name}
                >
                  <span className="dock-tooltip">{item.tooltip}</span>
                  {item.icon}
                </a>
              );
            })}
          </div>
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
