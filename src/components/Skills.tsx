"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Globe,
  Cpu,
  Blocks,
  Terminal,
  Layers,
  Smartphone,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      { name: "Next.js / React", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 82 },
    ],
  },
  {
    icon: Terminal,
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python", level: 78 },
      { name: "PHP", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    icon: Database,
    title: "Database & Cloud",
    skills: [
      { name: "Supabase", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Vercel", level: 92 },
      { name: "GitHub / Git", level: 90 },
    ],
  },
  {
    icon: Cpu,
    title: "AI & Tools",
    skills: [
      { name: "AI Agents (OWL)", level: 88 },
      { name: "Composio", level: 85 },
      { name: "OpenRouter", level: 82 },
      { name: "Automation", level: 86 },
    ],
  },
  {
    icon: Globe,
    title: "Web & Design",
    skills: [
      { name: "HTML / CSS", level: 95 },
      { name: "Figma", level: 72 },
      { name: "SEO", level: 78 },
      { name: "UI/UX", level: 80 },
    ],
  },
  {
    icon: Blocks,
    title: "Blockchain & Other",
    skills: [
      { name: "Solana / Web3", level: 68 },
      { name: "Rust (Tauri)", level: 60 },
      { name: "M-Pesa API", level: 82 },
      { name: "Paystack", level: 78 },
    ],
  },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase",
  "PostgreSQL", "Node.js", "Python", "Vercel", "GitHub",
  "Framer Motion", "Solana", "Rust", "PHP", "M-Pesa",
  "Composio", "AI Agents", "Figma",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-dark-900/50" ref={ref}>
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-sm font-medium tracking-widest uppercase">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-dark-50">
            My Tech Stack
          </h2>
          <p className="text-dark-400 mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 bg-dark-800/40 border border-dark-700/40 rounded-2xl card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <category.icon size={20} className="text-gold-500" />
                </div>
                <h3 className="text-lg font-semibold text-dark-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-dark-200">{skill.name}</span>
                      <span className="text-dark-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : {}
                        }
                        transition={{
                          duration: 1.2,
                          delay: catIdx * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-sm font-medium text-dark-400 uppercase tracking-widest mb-6">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm bg-dark-800/60 border border-dark-700/40 text-dark-300 rounded-full hover:border-gold-500/30 hover:text-gold-500 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
