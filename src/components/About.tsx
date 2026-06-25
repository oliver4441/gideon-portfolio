"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Briefcase, Zap } from "lucide-react";

const stats = [
  { value: "18+", label: "GitHub Repos" },
  { value: "10+", label: "Live Projects" },
  { value: "3+", label: "Years Coding" },
  { value: "∞", label: "Curiosity" },
];

const highlights = [
  {
    icon: MapPin,
    title: "Based in Kericho, Kenya",
    desc: "Working with clients globally from the heart of East Africa",
  },
  {
    icon: Briefcase,
    title: "Founder, Omix Systems",
    desc: "Building fast, conversion-focused websites for small businesses",
  },
  {
    icon: Zap,
    title: "AI-Powered Development",
    desc: "Leveraging AI agents to build smarter, faster applications",
  },
  {
    icon: Calendar,
    title: "Always Learning",
    desc: "Constantly exploring new technologies and frameworks",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative" ref={ref}>
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-dark-50">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Photo + Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-dark-800 border border-dark-700 glow-gold">
                <img
                  src="/assets/profile.jpg"
                  alt="Gideon Kipkirui"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold-500/20 rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold-500/10 rounded-2xl" />
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-dark-50 mb-4">
              Full-Stack Developer & AI Engineer
            </h3>
            <p className="text-dark-300 mb-4 leading-relaxed">
              I&apos;m Gideon Kipkirui, a developer from Kericho, Kenya who loves
              building things that matter. From full-stack web applications to
              AI-powered platforms and even blockchain projects — I dive deep
              into technologies that push the envelope.
            </p>
            <p className="text-dark-300 mb-8 leading-relaxed">
              Through my company <span className="text-gold-500 font-medium">Omix Systems</span>,
              I help small businesses get fast, conversion-focused websites.
              I&apos;m also the developer behind projects like Elite EA Marketplace,
              Chepseon Complex High School&apos;s website, and Granny Exchange on Solana.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-dark-800/50 border border-dark-700/50 rounded-xl"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-dark-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-3 p-4 bg-dark-800/30 border border-dark-700/30 rounded-xl card-hover"
                >
                  <div className="shrink-0 w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <Icon size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-100">
                      {title}
                    </h4>
                    <p className="text-xs text-dark-400 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
