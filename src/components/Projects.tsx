import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "./Section";
import { projects, type Project } from "@/data/portfolio";

const filters = ["All", "Web", "Data"] as const;

function Card({ p }: { p: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4 }}
      className="group glass rounded-3xl overflow-hidden hover-lift"
    >
      <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-6xl font-black text-white/20 select-none">
            {p.category === "Web" ? "{ }" : "◨"}
          </div>
        </div>
        <span className="absolute top-3 right-3 rounded-full glass px-3 py-1 text-xs font-semibold text-gold">
          {p.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-semibold text-foreground hover:bg-white/10"
          >
            <FaGithub /> GitHub
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold to-gold-soft px-3 py-2 text-xs font-semibold text-primary-foreground"
            >
              <FaExternalLinkAlt /> {p.category === "Data" ? "Dashboard Preview" : "Live Demo"}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" eyebrow="Featured Work" title="Projects">
      <div className="mb-8 flex justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === f
                ? "bg-gradient-to-r from-gold to-gold-soft text-primary-foreground shadow-lg shadow-amber-500/20"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
