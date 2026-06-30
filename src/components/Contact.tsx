"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Twitter, MessageCircle, Briefcase, Linkedin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:kipkiruigideon890@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-dark-900/50" ref={ref}>
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-dark-50">
            Let&apos;s Work Together
          </h2>
          <p className="text-dark-400 mt-4 max-w-xl mx-auto">
            Have a project in mind? Want to collaborate? Drop me a message and
            let&apos;s make something great.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-dark-50 mb-4">
                Contact Info
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-gold-500" />
                </div>
                <div>
                  <div className="text-xs text-dark-500 uppercase tracking-wider">
                    Email
                  </div>
                  <a
                    href="mailto:kipkiruigideon890@gmail.com"
                    className="text-dark-200 hover:text-gold-500 transition-colors"
                  >
                    kipkiruigideon890@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-gold-500" />
                </div>
                <div>
                  <div className="text-xs text-dark-500 uppercase tracking-wider">
                    Location
                  </div>
                  <span className="text-dark-200">Kericho, Kenya</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold-500" />
                </div>
                <div>
                  <div className="text-xs text-dark-500 uppercase tracking-wider">
                    Phone
                  </div>
                  <a
                    href="tel:+254768213649"
                    className="text-dark-200 hover:text-gold-500 transition-colors"
                  >
                    +254 768 213 649
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-medium text-dark-400 uppercase tracking-wider mb-3">
                Follow Me
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/oliver4441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 border border-dark-700 rounded-lg flex items-center justify-center text-dark-400 hover:text-gold-500 hover:border-gold-500/30 transition-all"
                >
                  <Github size={18} />
                </a>
                <a
                  href="mailto:kipkiruigideon890@gmail.com"
                  className="w-10 h-10 bg-dark-800 border border-dark-700 rounded-lg flex items-center justify-center text-dark-400 hover:text-gold-500 hover:border-gold-500/30 transition-all"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gideon-langat-5b32b3301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 border border-dark-700 rounded-lg flex items-center justify-center text-dark-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://wa.me/254768213649?text=Hi%20Lang%27at%20Gideon!%20I%27d%20like%20to%20connect%20with%20you%20on%20WhatsApp."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 border border-dark-700 rounded-lg flex items-center justify-center text-dark-400 hover:text-green-400 hover:border-green-500/30 transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Recruiter / Collaboration CTA */}
            <div className="p-5 bg-dark-800/60 border border-gold-500/10 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={16} className="text-gold-500" />
                <h4 className="text-sm font-semibold text-gold-500">
                  Recruiters &amp; Partners
                </h4>
              </div>
              <p className="text-xs text-dark-400 mb-3 leading-relaxed">
                Interested in hiring, collaborating, or joining forces with
                <a href="https://omixsystems.store" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 underline underline-offset-2 mx-1">Omix Systems</a>
                ? Let&apos;s connect.
              </p>
              <a
                href="https://wa.me/254768213649?text=Hi%20Lang%27at%20Gideon!%20I%27m%20a%20recruiter%20partner%20interested%20in%20collaborating%20with%20Omix%20Systems.%20Let%27s%20talk!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium rounded-lg hover:bg-green-500/20 transition-all"
              >
                <MessageCircle size={13} />
                Reach Out on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-dark-800/40 border border-dark-700/40 rounded-2xl"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-dark-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-dark-100 placeholder-dark-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-dark-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-dark-100 placeholder-dark-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-dark-100 placeholder-dark-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 text-dark-950 font-semibold rounded-xl hover:bg-gold-400 transition-all duration-200 shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  "Opening Email Client..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
