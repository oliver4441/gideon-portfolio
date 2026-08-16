"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/gideon-profile.webp", alt: "Gideon Langat professional portrait", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/gideon-outdoors.webp", alt: "Gideon Langat outdoors", className: "" },
  { src: "/images/gideon-gaming.webp", alt: "Gideon Langat gaming", className: "" },
  { src: "/images/gideon-workspace.webp", alt: "Gideon Langat working at his development desk", className: "md:col-span-2" },
];

export default function ProfileShowcase() {
  return (
    <section id="profile" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">Profile</p>
            <h2 className="text-3xl font-bold tracking-tight text-dark-50 sm:text-4xl md:text-5xl">
              Founder, engineer, and product builder.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-dark-300">
              I build digital products through OMIX Systems — Optimal Modular Integration Experts — combining software engineering, product thinking and systems integration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-dark-700 bg-dark-900/40 p-5 sm:p-6"
          >
            <div className="flex flex-wrap gap-3 text-sm text-dark-300">
              <span className="rounded-full border border-dark-700 px-3 py-1.5">Founder & CEO · OMIX Systems</span>
              <span className="rounded-full border border-dark-700 px-3 py-1.5">Software Engineering</span>
              <span className="rounded-full border border-dark-700 px-3 py-1.5">Product Development</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[240px] md:grid-cols-4">
          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-dark-700 bg-dark-900 ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent p-5 opacity-100 transition-opacity" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
