"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const work = [
  { number: "01", name: "Veyra", type: "Product · Media", title: "A cinematic streaming platform.", body: "A product exploring discovery, presentation and the infrastructure required to turn a media idea into a usable platform.", href: "https://web-jade-one-82.vercel.app/?type=series" },
  { number: "02", name: "Phikila", type: "Product · Education", title: "School management, treated as a system.", body: "A connected platform for school operations, academic workflows and the information institutions rely on every day.", href: "https://phikila.com/" },
  { number: "03", name: "OMIX Systems", type: "Company · Software", title: "The company behind the work.", body: "OMIX is where I build products, systems and integrations around one idea: technology should work together.", href: "https://omixsystems.store/" },
];
const capabilities = [
  ["01", "Product engineering", "From a rough idea to a working product, with architecture that can survive beyond an MVP."],
  ["02", "Systems & integrations", "APIs, data, authentication, payments and services designed to connect rather than become islands."],
  ["03", "Cloud & infrastructure", "Deployment, environments and operational foundations that keep products moving."],
  ["04", "AI & automation", "Practical use of models, agents and automation where they create leverage instead of noise."],
];
const notes = [["Why modular systems matter", "Engineering"], ["Building products through OMIX", "Founder notes"], ["What makes software useful?", "Product"]];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay }}>{children}</motion.div>;
}

export default function Home() {
  return <main>
    <nav className="site-nav"><a href="#top" className="wordmark">GIDEON<span>.</span></a><div className="nav-links"><a href="#work">Work</a><a href="#notes">Notes</a><a href="#about">About</a><a href="#contact">Contact</a></div><a className="nav-company" href="https://omixsystems.store/">OMIX Systems ↗</a></nav>

    <section id="top" className="hero editorial-wrap"><div className="hero-copy"><p className="eyebrow">Founder & CEO · OMIX Systems · Kenya</p><h1>I build products,<br/><em>systems</em> and companies.</h1><p className="hero-lede">In that order.</p><p className="hero-intro">I&apos;m Gideon Langat, a software developer and product builder. I lead OMIX Systems, where I turn ideas into digital products and the systems behind them.</p><div className="hero-actions"><a className="button dark" href="#work">See the work</a><a className="text-link" href="https://omixsystems.store/">Explore OMIX →</a></div></div><motion.div className="hero-photo" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }}><Image src="/images/gideon-profile.webp" alt="Gideon Langat" fill priority sizes="(max-width: 900px) 100vw, 44vw"/><span>GIDEON LANGAT · 2026</span></motion.div></section>

    <section id="about" className="editorial-wrap section-block"><Reveal><div className="section-label">01 / Hello</div></Reveal><div className="two-column"><Reveal><h2>I like building things that connect.</h2></Reveal><Reveal delay={.1}><div className="prose"><p>Software is rarely useful in isolation. The product, the data, the people using it and the services underneath all have to make sense together.</p><p>That is the thinking behind my work. I move between engineering, product decisions and the business questions around them — building systems that are practical first and ambitious second.</p><p>OMIX Systems is the company I am building around that philosophy.</p></div></Reveal></div></section>

    <section id="work" className="editorial-wrap section-block"><Reveal><div className="section-label">02 / Selected product work</div></Reveal><div className="work-list">{work.map(item => <Reveal key={item.number}><article className="work-item"><div className="work-index">{item.number}</div><div className="work-content"><p className="eyebrow">{item.type}</p><h3>{item.name}</h3><h4>{item.title}</h4><p>{item.body}</p><a href={item.href}>View project <span>↗</span></a></div></article></Reveal>)}</div></section>

    <section className="editorial-wrap section-block"><Reveal><div className="section-label">03 / Currently building</div></Reveal><div className="current-grid"><Reveal><h2>Not everything needs to be finished to be worth building.</h2></Reveal><Reveal delay={.1}><div className="current-copy"><p>Veyra. Phikila. OMIX Journal. New experiments. Infrastructure that supports them.</p><p>I keep a portfolio because the work changes. This is a record of what is being built now, not a museum of finished projects.</p><a className="text-link" href="https://blog.omixsystems.store/">Read the journal →</a></div></Reveal></div></section>

    <section className="editorial-wrap section-block"><Reveal><div className="section-label">04 / How I build</div></Reveal><div className="capability-list">{capabilities.map(([n,title,text]) => <Reveal key={n}><div className="capability"><span>{n}</span><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></section>

    <section id="notes" className="editorial-wrap section-block"><Reveal><div className="section-label">05 / Notes from building OMIX</div></Reveal><div className="two-column notes-head"><Reveal><h2>Things I&apos;m thinking about.</h2></Reveal><Reveal delay={.1}><p className="prose">Writing is where I slow down enough to explain the decisions behind the products.</p></Reveal></div><div className="notes-list">{notes.map(([title,category]) => <a key={title} href="https://blog.omixsystems.store/" className="note-row"><span>{category}</span><strong>{title}</strong><span>↗</span></a>)}</div></section>

    <section className="editorial-wrap section-block"><Reveal><div className="section-label">06 / Outside the code</div></Reveal><div className="life-grid"><div className="life-copy"><h2>There&apos;s more to building than sitting at a screen.</h2><p>These are the parts of life that do not fit neatly into a CV — time outside, games, experiments, and the people and places that keep the work in perspective.</p></div><div className="life-images"><Image src="/images/gideon-outdoors.webp" alt="Gideon outdoors" width={800} height={900}/><Image src="/images/gideon-gaming.webp" alt="Gideon gaming" width={800} height={900}/><Image src="/images/gideon-workspace.webp" alt="Gideon workspace" width={800} height={600}/></div></div></section>

    <section className="omix-panel"><div className="editorial-wrap"><p className="eyebrow">07 / The company behind the work</p><h2>OMIX Systems</h2><p>Optimal Modular Integration Experts.</p><p className="omix-description">I founded OMIX to build digital products and integrated software systems that solve practical problems.</p><a className="button light" href="https://omixsystems.store/">Visit OMIX Systems ↗</a></div></section>

    <section id="contact" className="editorial-wrap contact-section section-block"><div className="section-label">08 / Let&apos;s build something</div><h2>Have an idea worth making?</h2><p>Tell me what you are trying to build. If it makes sense, we can work out the system behind it.</p><div className="contact-actions"><a className="button dark" href="https://omixsystems.store/">Build with OMIX</a><a className="button outline" href="mailto:hello@omixsystems.store">Email Gideon</a></div></section>

    <footer className="site-footer editorial-wrap"><div><strong>GIDEON LANGAT</strong><span>Founder & CEO · OMIX Systems</span></div><div><a href="https://omixsystems.store/">OMIX Systems</a><a href="https://blog.omixsystems.store/">Journal</a><a href="https://github.com/oliver4441">GitHub</a></div><small>© 2026 Gideon Langat. Built through OMIX Systems.</small></footer>
  </main>;
}
