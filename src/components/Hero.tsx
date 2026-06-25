"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gold-500 font-medium">
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          <span className="text-dark-50">Gideon</span>{" "}
          <span className="gradient-text">Kipkirui</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-dark-300 max-w-2xl mx-auto mb-4"
        >
          Full-Stack Developer & AI Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-dark-400 max-w-xl mx-auto mb-10"
        >
          Building modern web applications, AI-powered platforms, and
          blockchain solutions from Kericho, Kenya.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-gold-500 text-dark-950 font-semibold rounded-xl hover:bg-gold-400 transition-all duration-200 shadow-lg shadow-gold-500/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-dark-600 text-dark-200 font-semibold rounded-xl hover:border-gold-500/50 hover:text-gold-500 transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* WhatsApp Chat Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <a
            href="https://wa.me/254768213649?text=Hi%20Gideon!%20I%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/20"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
          <span className="text-xs text-dark-500">0768 213 649</span>
        </motion.div>

        {/* Recruiter / Collaboration CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="max-w-xl mx-auto mb-10"
        >
          <div className="p-5 bg-dark-800/60 border border-dark-700/50 rounded-2xl text-center">
            <p className="text-sm text-dark-300 mb-2">
              <span className="text-gold-500 font-semibold">Recruiters &amp; Collaborators</span> — Interested in joining forces with
              <a href="https://omixsystems.store" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 underline underline-offset-2 mx-1">Omix Systems</a>
              or exploring partnership opportunities?
            </p>
            <a
              href="https://wa.me/254768213649?text=Hi%20Gideon!%20I%27m%20interested%20in%20collaborating%20with%20Omix%20Systems%20and%20would%20love%20to%20discuss%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              <MessageCircle size={14} />
              Let&apos;s talk on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: "https://github.com/oliver4441", label: "GitHub" },
            { icon: Mail, href: "mailto:kipkiruigideon890@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-800/50 border border-dark-700 rounded-xl text-dark-400 hover:text-gold-500 hover:border-gold-500/30 transition-all duration-200"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-dark-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
