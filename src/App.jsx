import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Mail,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import "./portfolio.css";

const projects = [
  {
    number: "01",
    name: "ChalkAI",
    category: "AI · Learning",
    description:
      "A visual learning studio that turns a question into a short lesson, with narration and drawings that unfold on an interactive whiteboard.",
    engineering:
      "Structured AI lesson generation, schema-validated responses, and synchronized playback come together in one focused learning experience.",
    technologies: ["Next.js", "React", "TypeScript", "Groq", "Zod"],
    demo: "https://chalk-ai-tan.vercel.app/",
    source: "https://github.com/2yb/chalk-ai",
    visual: "chalk",
  },
  {
    number: "02",
    name: "Ledger-Flow",
    category: "Fintech · Ledger",
    description:
      "A full-stack ledger and transaction system for creating accounts, recording credits and debits, and reviewing transaction history.",
    engineering:
      "A separate React frontend and Express API share versioned REST workflows, with duplicate-reference checks and database integrity rules.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase"],
    demo: "https://ledger-flow-jrel.vercel.app",
    source: "https://github.com/2yb/Ledger-Flow",
    backend: "https://ledger-flow-smoky.vercel.app",
    visual: "ledger",
  },
  {
    number: "03",
    name: "TrialFlow",
    category: "Healthtech · Operations",
    description:
      "A clinical-trial site-readiness workspace for keeping study status, document review, and operational work in view.",
    engineering:
      "Review actions flow through shared application state to update document status, site readiness, activity, and work queues.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
    demo: "https://trialflow-tau.vercel.app/overview",
    source: "https://github.com/2yb/trialflow",
    visual: "trialflow",
    note: "Prototype",
  },
];

const technologyGroups = [
  {
    title: "Frontend engineering",
    details: ["React", "Next.js", "TypeScript", "Responsive UI", "Accessibility"],
  },
  {
    title: "Backend engineering",
    details: ["Node.js", "REST API design", "Zod", "State modeling"],
  },
  {
    title: "AI engineering",
    details: ["Groq", "LLM integration", "Structured outputs", "Caching"],
  },
  {
    title: "Quality & delivery",
    details: ["Vitest", "Jest", "Cypress", "Git", "Vercel"],
  },
];

const heroTechStack = [
  { name: "React", mark: "R", position: "tag-react" },
  { name: "TypeScript", mark: "TS", position: "tag-typescript" },
  { name: "Node.js", mark: "N", position: "tag-node" },
  { name: "Express", mark: "EX", position: "tag-express" },
  { name: "PostgreSQL", mark: "PG", position: "tag-postgres" },
  { name: "SQL", mark: "SQL", position: "tag-sql" },
  { name: "Supabase", mark: "SB", position: "tag-supabase" },
  { name: "REST APIs", mark: "API", position: "tag-api" },
  { name: "Vercel", mark: "V", position: "tag-vercel" },
  { name: "Git", mark: "G", position: "tag-git" },
];

function ChalkPreview() {
  return (
    <div className="project-art chalk-art" aria-hidden="true">
      <div className="chalk-art-top">
        <span className="art-brand"><span className="brand-spark">✳</span> chalk</span>
        <span className="art-label">YOUR VISUAL LEARNING STUDIO</span>
      </div>
      <div className="chalk-board">
        <span className="board-kicker">A QUICK LESSON IN</span>
        <span className="board-title">How ideas<br />take shape.</span>
        <div className="board-drawing">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit orbit-three" />
          <span className="orbit-core" />
          <span className="drawing-star">✳</span>
        </div>
        <div className="board-caption"><span /> VISUAL 01 <span className="caption-line" /></div>
      </div>
      <div className="chalk-player">
        <span className="play-button">▶</span>
        <span className="player-track"><span /></span>
        <span className="player-time">01:24</span>
      </div>
      <span className="art-float chalk-float">Learn by seeing <span>↗</span></span>
    </div>
  );
}

function LedgerPreview() {
  return (
    <div className="project-art ledger-art" aria-hidden="true">
      <div className="ledger-sidebar">
        <span className="ledger-mark">LF</span>
        <span className="ledger-icon active">⌂</span>
        <span className="ledger-icon">↔</span>
        <span className="ledger-icon">▦</span>
      </div>
      <div className="ledger-content">
        <div className="ledger-topline"><span>LEDGER WORKSPACE</span><span className="ledger-avatar">VS</span></div>
        <div className="ledger-heading">Accounts <span>＋</span></div>
        <div className="ledger-metrics">
          <div><span>TOTAL BALANCE</span><b>$48,260</b><i>All accounts</i></div>
          <div><span>THIS MONTH</span><b className="ledger-positive">+12.8%</b><i>Net activity</i></div>
        </div>
        <div className="ledger-table">
          <div className="ledger-table-head"><span>Account</span><span>Type</span><span>Balance</span></div>
          <div className="ledger-row"><span><i className="ledger-dot" />Operating</span><span>Asset</span><b>$24,640</b></div>
          <div className="ledger-row"><span><i className="ledger-dot teal" />Payroll</span><span>Asset</span><b>$16,920</b></div>
          <div className="ledger-row"><span><i className="ledger-dot amber" />Tax reserve</span><span>Liability</span><b>$6,700</b></div>
        </div>
      </div>
      <span className="art-float ledger-float"><span>✓</span> Transaction verified</span>
    </div>
  );
}

function TrialFlowPreview() {
  return (
    <div className="project-art trial-art" aria-hidden="true">
      <div className="trial-sidebar">
        <span className="trial-mark">T</span>
        <span className="sidebar-icon active">◫</span>
        <span className="sidebar-icon">▤</span>
        <span className="sidebar-icon">⌂</span>
        <span className="sidebar-icon">✓</span>
      </div>
      <div className="trial-content">
        <div className="trial-topline"><span>STUDY OPERATIONS</span><span className="trial-avatar">VS</span></div>
        <div className="trial-heading">Overview <span>↗</span></div>
        <div className="trial-subheading">A clearer view of site readiness.</div>
        <div className="trial-metrics">
          <div className="trial-metric"><span>ACTIVE STUDIES</span><b>● ● ●</b><i>Across your portfolio</i></div>
          <div className="trial-metric"><span>SITE READINESS</span><b className="readiness-value">READY</b><i>Readiness overview</i></div>
        </div>
        <div className="trial-panel">
          <div className="panel-title">Site readiness <span>View all ↗</span></div>
          <div className="readiness-row"><span className="site-dot" /><span className="site-line wide" /><span className="status-pill">READY</span></div>
          <div className="readiness-row"><span className="site-dot pending" /><span className="site-line" /><span className="status-pill review">IN REVIEW</span></div>
          <div className="readiness-row"><span className="site-dot" /><span className="site-line medium" /><span className="status-pill">READY</span></div>
        </div>
      </div>
      <span className="art-float trial-float"><span>↗</span> Work, in context</span>
    </div>
  );
}

function renderProject(project, index, reduceMotion) {
  return (
    <motion.article
      className={`project-card ${project.visual}-card`}
      key={project.name}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.12, ease: "easeOut" }}
    >
      <div className="project-visual">
        {project.visual === "chalk" && <ChalkPreview />}
        {project.visual === "ledger" && <LedgerPreview />}
        {project.visual === "trialflow" && <TrialFlowPreview />}
      </div>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.category}</span>
          {project.note && <span className="prototype-label">{project.note}</span>}
        </div>
        <h3>{project.name}<span className="project-number">{project.number}</span></h3>
        <p className="project-description">{project.description}</p>
        <p className="project-engineering">{project.engineering}</p>
        <ul className="tech-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          <a href={project.demo} target="_blank" rel="noreferrer">
            Explore live <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="source-link" href={project.source} target="_blank" rel="noreferrer">
            <Github size={15} aria-hidden="true" /> Source
          </a>
          {project.backend && (
            <a className="source-link" href={project.backend} target="_blank" rel="noreferrer">
              API <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const revealOnScroll = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.14 },
        transition: { duration: 0.65, ease: "easeOut" },
      };

  return (
    <main>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: reduceMotion ? scrollYProgress : scrollProgress }}
        aria-hidden="true"
      />
      <header className="site-header page-shell">
        <a className="wordmark" href="#home" aria-label="Varun Saxena, home">
          <span className="wordmark-icon">v.</span>
          <span>VARUN SAXENA</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:varunsaxena2799@gmail.com">
            Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero page-shell" id="home">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow"><span className="eyebrow-dot" /> FULL-STACK &amp; AI ENGINEER <span className="eyebrow-divider">/</span> FRONTEND · BACKEND · AI</p>
          <h1>I turn complex ideas into <span>useful software.</span></h1>
          <p className="hero-intro">
            From polished frontend experiences to backend APIs and AI-powered features, I build full-stack products that make complex work easier to navigate.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore selected work <ArrowRight size={16} aria-hidden="true" /></a>
            <a className="text-link" href="mailto:varunsaxena2799@gmail.com"><Mail size={16} aria-hidden="true" /> Get in touch</a>
          </div>
          <div className="hero-bottom">
            <a href="#work" className="scroll-cue"><ArrowDown size={15} aria-hidden="true" /> SCROLL TO EXPLORE</a>
            <span>FULL-STACK CRAFT <span className="hero-spark">✳</span> PRODUCT THINKING</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-art"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.1, ease: "easeOut" }}
        >
          <div className="hero-art-grid" />
          <div className="hero-orbit orbit-outer" />
          <div className="hero-orbit orbit-inner" />
          <div className="hero-core">
            <motion.div
              className="hero-core-icon"
              animate={reduceMotion ? undefined : { rotate: [-7, -2, -7] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 size={37} strokeWidth={1.4} />
            </motion.div>
          </div>
          {heroTechStack.map((technology, index) => (
            <motion.div
              className={`orbit-tag ${technology.position}`}
              key={technology.name}
              animate={reduceMotion ? undefined : { y: [0, index % 2 ? 2 : -2, 0] }}
              transition={{ duration: 4.5 + (index % 4) * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="orbit-tag-mark">{technology.mark}</span>
              {technology.name}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="ticker" aria-label="Product-minded engineering">
        <div className="ticker-inner">
          <span>THOUGHTFUL BY DESIGN</span><i>✳</i><span>BUILT END TO END</span><i>✳</i>
          <span>MADE FOR THE REAL WORLD</span><i>✳</i><span>THOUGHTFUL BY DESIGN</span><i>✳</i>
          <span>BUILT END TO END</span><i>✳</i><span>MADE FOR THE REAL WORLD</span><i>✳</i>
        </div>
      </div>

      <motion.section className="work-section page-shell" id="work" {...revealOnScroll}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW THINGS I&apos;VE BEEN BUILDING</p>
            <h2>Selected <span>work.</span></h2>
          </div>
          <p className="section-aside">Products are more than screens. Here&apos;s a look at the thinking and systems behind them.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => renderProject(project, index, reduceMotion))}
        </div>
      </motion.section>

      <motion.section className="approach-section" id="about" {...revealOnScroll}>
        <div className="page-shell approach-layout">
          <div className="approach-intro">
            <p className="eyebrow">HOW I THINK ABOUT THE WORK</p>
            <h2>Good engineering starts with <span>understanding the whole problem.</span></h2>
            <p>
              I care about how a product feels to use and how it works underneath. My focus is connecting clear interfaces, sensible application logic, and the details that make a product dependable.
            </p>
            <a className="text-link approach-contact" href="mailto:varunsaxena2799@gmail.com">
              Have a project in mind? <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="principles">
            <article className="principle">
              <span className="principle-index">01</span>
              <div><h3>Start with the user</h3><p>Understand the workflow before choosing the interface or the technology.</p></div>
              <ArrowUpRight size={17} aria-hidden="true" />
            </article>
            <article className="principle">
              <span className="principle-index">02</span>
              <div><h3>Connect the pieces</h3><p>Model how actions, state, and outcomes move across the product.</p></div>
              <ArrowUpRight size={17} aria-hidden="true" />
            </article>
            <article className="principle">
              <span className="principle-index">03</span>
              <div><h3>Make quality visible</h3><p>Give attention to validation, accessibility, responsive behavior, and testing.</p></div>
              <ArrowUpRight size={17} aria-hidden="true" />
            </article>
          </div>
        </div>
      </motion.section>

      <motion.section className="toolkit-section page-shell" {...revealOnScroll}>
        <div className="section-heading toolkit-heading">
          <div><p className="eyebrow">TOOLS ARE PART OF THE PROCESS</p><h2>My toolkit<span>.</span></h2></div>
          <p className="section-aside">The right tool for the problem—not a checklist for its own sake.</p>
        </div>
        <div className="toolkit-grid">
          {technologyGroups.map((group, index) => (
            <motion.article
              className="toolkit-card"
              key={group.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
            >
              <span className="toolkit-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>{group.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <div>
            <p className="eyebrow">HAVE SOMETHING GOOD IN MIND?</p>
            <h2>Let&apos;s make it <span>real.</span></h2>
          </div>
          <div className="footer-links">
            <a className="footer-email" href="mailto:varunsaxena2799@gmail.com">varunsaxena2799@gmail.com <ArrowUpRight size={17} aria-hidden="true" /></a>
            <div className="social-links">
              <a href="https://github.com/2yb" target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" /> GitHub</a>
              <a href="https://linkedin.com/in/varunsaxena1912" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="https://vercel.com/2yb" target="_blank" rel="noreferrer">Vercel <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="/saxena_varun_fullstack.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="/cover%20letter%20(5).pdf" target="_blank" rel="noreferrer">Cover Letter <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <a className="wordmark footer-mark" href="#home"><span className="wordmark-icon">v.</span><span>VARUN SAXENA</span></a>
            <span>© {new Date().getFullYear()} VARUN SAXENA</span>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
