"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  ArrowRight,
  BarChart3,
  Globe,
  Coins,
  Rocket,
  GraduationCap,
  Building2,
  TrendingUp,
} from "lucide-react";

const projects = [
  {
    title: "Sentienx",
    desc: "A professional Deriv trading platform with automated bots, real-time candlestick charts, bankroll management, and a comprehensive trading academy. Features 7-signal confluence scoring, Kelly Criterion position sizing, and circuit breaker protection.",
    tags: ["Next.js", "TypeScript", "Deriv API", "WebSocket", "Tailwind CSS"],
    github: "https://github.com/oliver4441",
    live: "https://sentienx.omixsystems.store",
    status: "Live",
    gradient: "from-amber-500/20 to-orange-500/20",
    icon: TrendingUp,
  },
  {
    title: "Granny Exchange",
    desc: "Solana-based meme coin platform with swap interface, devnet token creation, and Jupiter API integration.",
    tags: ["Next.js", "Solana", "Web3", "TypeScript", "Tailwind"],
    github: "https://github.com/oliver4441/granny-exchange",
    live: "https://oliver4441.github.io/granny-exchange/",
    status: "Live (Devnet)",
    gradient: "from-yellow-500/20 to-orange-500/20",
    icon: Coins,
  },
  {
    title: "Omix Systems",
    desc: "Business website for my web development agency. Showcasing services, portfolio, and conversion-focused design.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/oliver4441",
    live: "https://omixsystems.store/",
    status: "Live",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: Rocket,
  },
  {
    title: "Omix School Management",
    desc: "Full school management system built for African schools. Handles students, staff, grades, and reporting.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Express"],
    github: "https://github.com/oliver4441/omix-h2",
    live: "https://omix-h2.onrender.com",
    status: "Live",
    gradient: "from-indigo-500/20 to-violet-500/20",
    icon: GraduationCap,
  },
  {
    title: "Hotel Management System",
    desc: "Complete hotel management platform with room booking, guest management, and administrative dashboard.",
    tags: ["Node.js", "Express", "PostgreSQL", "REST API"],
    github: "https://github.com/oliver4441/hotel-management",
    live: null,
    status: "Open Source",
    gradient: "from-rose-500/20 to-pink-500/20",
    icon: Building2,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative" ref={ref}>
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-dark-50">
            Featured Projects
          </h2>
          <p className="text-dark-400 mt-4 max-w-xl mx-auto">
            A selection of projects I have built — from marketplaces to
            blockchain experiments
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-dark-800/40 border border-dark-700/40 rounded-2xl overflow-hidden card-hover"
              >
                {/* Card header gradient with icon */}
                <div
                  className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <div className="w-14 h-14 bg-dark-900/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/5">
                    <Icon size={28} className="text-gold-500" />
                  </div>
                </div>

                <div className="p-6">
                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        project.status === "Live"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : project.status === "In Development"
                          ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-dark-50 mb-2 group-hover:text-gold-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark-400 mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-dark-700/50 text-dark-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-dark-400 hover:text-gold-500 transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-dark-400 hover:text-gold-500 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* More on GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/oliver4441"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-800 border border-dark-600 text-dark-200 rounded-xl hover:border-gold-500/50 hover:text-gold-500 transition-all duration-200"
          >
            See All Projects on GitHub
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
