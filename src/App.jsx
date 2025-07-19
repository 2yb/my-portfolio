import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./flipcard.css";
import "tailwindcss/tailwind.css";

const HeroBackground = () => (
  <Canvas className="absolute top-0 left-0 z-0 h-full w-full">
    <ambientLight intensity={0.7} />
    <pointLight position={[20, 20, 20]} />
    <Stars
      radius={100}
      depth={80}
      count={10000}
      factor={4}
      saturation={0}
      fade
      speed={2}
    />
    <OrbitControls enableZoom={false} />
  </Canvas>
);

const ProjectCard = ({ title, description, tags }) => (
  <motion.div
    className="flip-card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flip-card-inner">
      <div className="flip-card-front bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-600">
        <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
          {title} <FaExternalLinkAlt size={14} className="text-emerald-400" />
        </h3>
        <p className="text-slate-300 text-sm">Click to flip</p>
      </div>
      <div className="flip-card-back bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-700">
        <p className="text-slate-200 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gradient-to-r from-emerald-600 to-emerald-700 px-2 py-1 rounded-full text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const SkillBadge = ({ skill }) => (
  <motion.div
    className="bg-gradient-to-r from-sky-600 to-blue-800 px-4 py-2 rounded-full shadow-lg text-sm text-white font-medium hover:from-blue-700 hover:to-sky-900 cursor-pointer"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.3 }}
  >
    {skill}
  </motion.div>
);

const App = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "Git",
    "Cypress",
    "Jest",
    "Material UI",
    "Figma",
    "SSR",
    "SEO Optimization",
    "REST APIs",
    "Postman",
    "Tailwind CSS",
    "Framer Motion",
    "React Three Fiber",
    "Vite",
  ];

  const projects = [
    {
      title: "Prior Authorization System",
      description:
        "Built with React & TypeScript to streamline medical service approvals with SSR support and responsive UI.",
      tags: ["React", "TypeScript", "SSR"],
    },
    {
      title: "Tender Processing Tool",
      description:
        "Built with Next.js, Cypress & Jest for procurement automation, SEO-optimized and mobile-ready.",
      tags: ["Next.js", "Cypress", "SEO"],
    },
    {
      title: "Portfolio Website",
      description:
        "Dynamic portfolio using Vite, Tailwind, and React Three Fiber with animated background and deployment on Vercel.",
      tags: ["Vite", "Tailwind", "React Three Fiber"],
    },
  ];

  return (
    <main className="relative z-10 text-white font-sans overflow-x-hidden bg-gradient-to-br from-gray-950 to-gray-900 min-h-screen">
      <section className="relative h-screen flex flex-col justify-center items-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <HeroBackground />
        </div>
        <motion.div
          className="relative z-10 backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 text-emerald-400"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            Hi, I'm Varun Saxena
          </motion.h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-xl">
            Frontend Developer | React | Next.js | TypeScript | SSR | SEO |
            Automation Testing
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:varunvarun1912@gmail.com"
              className="bg-emerald-600 px-5 py-2 rounded-full shadow-md hover:bg-emerald-700 transition"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/varunsaxena1912"
              target="_blank"
              className="bg-blue-700 px-5 py-2 rounded-full shadow-md hover:bg-blue-800 transition"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-purple-700 px-5 py-2 rounded-full shadow-md hover:bg-purple-800 transition"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/2yb"
              target="_blank"
              className="bg-gray-800 px-5 py-2 rounded-full shadow-md hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      <section className="p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-emerald-400 mb-6 border-b border-emerald-700 pb-2">
          Projects
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      <section className="p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-sky-400 mb-6 border-b border-sky-700 pb-2">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <SkillBadge key={i} skill={skill} />
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-slate-400 border-t border-slate-700 mt-10">
        © 2025 Varun Saxena
      </footer>
    </main>
  );
};

export default App;
