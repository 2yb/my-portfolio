import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import "./flipcard.css";

const HeroBackground = () => (
  <Canvas className="absolute top-0 left-0 z-0 h-full w-full">
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
    />
    <OrbitControls enableZoom={false} />
  </Canvas>
);

const ProjectCard = ({ title, description, tags }) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">Click to flip</p>
      </div>
      <div className="flip-card-back bg-gray-900 p-6 rounded-xl shadow-lg">
        <p className="text-gray-300 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm bg-green-700 px-2 py-1 rounded-full text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
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
    <main className="relative z-10 text-white font-sans overflow-x-hidden">
      <section className="relative h-screen flex flex-col justify-center items-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <HeroBackground />
        </div>
        <div className="relative z-10 backdrop-blur-md p-4 rounded">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce">
            Hi, I'm Varun Saxena
          </h1>
          <p className="text-lg md:text-2xl max-w-xl">
            Frontend Developer | React | Next.js | TypeScript | SSR | SEO |
            Automation Testing
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:varunvarun1912@gmail.com"
              className="bg-blue-600 px-4 py-2 rounded hover:scale-105 transition-transform"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/varunsaxena1912"
              target="_blank"
              className="bg-gray-700 px-4 py-2 rounded hover:scale-105 transition-transform"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-green-600 px-4 py-2 rounded hover:scale-105 transition-transform"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="p-8 max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold underline decoration-green-500">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      <section className="p-8 max-w-6xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold underline decoration-blue-500">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-blue-600 px-4 py-1 rounded-full text-sm text-white shadow-md hover:scale-105 hover:bg-blue-700 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-gray-300">
        © 2025 Varun Saxena
      </footer>
    </main>
  );
};

export default App;
