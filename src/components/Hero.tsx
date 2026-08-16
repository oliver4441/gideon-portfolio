"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.10),transparent_35%)]" />
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-gold-500/10 blur-[130px]" />
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.7) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-dark-300">Founder & CEO · OMIX Systems</span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .05 }} className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-blue-300/80">Optimal Modular Integration Experts</motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .1 }} className="text-5xl font-black tracking-[-0.04em] text-dark-50 sm:text-6xl md:text-7xl lg:text-8xl">
          Gideon <span className="gradient-text">Langat</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .2 }} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dark-300 sm:text-xl md:text-2xl">
          Software developer, product builder and systems architect building digital products through OMIX Systems.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .3 }} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#projects" className="inline-flex w-full items-center justify-center rounded-xl bg-gold-500 px-7 py-3.5 font-semibold text-dark-950 shadow-lg shadow-gold-500/15 transition hover:-translate-y-0.5 hover:bg-gold-400 sm:w-auto">Explore my work</a>
          <a href="https://omixsystems.com/" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3.5 font-semibold text-dark-100 transition hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-white/[0.07] sm:w-auto">Visit OMIX Systems</a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }} className="mt-6 flex items-center justify-center gap-3">
          <a href="https://wa.me/254768213649" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/10"><MessageCircle size={16} /> WhatsApp</a>
          <a href="https://github.com/oliver4441" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-dark-300 transition hover:border-white/20 hover:text-white" aria-label="GitHub"><Github size={18} /></a>
          <a href="mailto:kipkiruigideon890@gmail.com" className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-dark-300 transition hover:border-white/20 hover:text-white" aria-label="Email"><Mail size={18} /></a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }} className="mx-auto mt-16 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-left backdrop-blur-sm sm:p-6">
          <div className="grid gap-5 sm:grid-cols-3">
            <div><p className="font-mono text-xs uppercase tracking-wider text-dark-500">Company</p><p className="mt-1 font-semibold text-dark-100">OMIX Systems</p></div>
            <div><p className="font-mono text-xs uppercase tracking-wider text-dark-500">Focus</p><p className="mt-1 font-semibold text-dark-100">Products & Systems</p></div>
            <div><p className="font-mono text-xs uppercase tracking-wider text-dark-500">Based in</p><p className="mt-1 font-semibold text-dark-100">Kericho, Kenya</p></div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-500">
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }}><ArrowDown size={19} /></motion.div>
      </motion.div>
    </section>
  );
}
