"use client";

import { Github, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <span>© {year} Gideon Kipkirui. Built with</span>
            <span className="text-red-400">&hearts;</span>
            <span>and Next.js</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/oliver4441"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-500 hover:text-gold-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:kipkiruigideon890@gmail.com"
              className="p-2 text-dark-500 hover:text-gold-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
