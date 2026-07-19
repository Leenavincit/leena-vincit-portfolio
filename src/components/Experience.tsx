import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-gold via-purple to-transparent" />
        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8"
          >
            <span className="absolute left-4 sm:left-1/2 top-6 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-gold to-purple text-primary-foreground shadow-lg glow-gold">
              <FaBriefcase className="text-xs" />
            </span>
            <div className={`sm:col-start-${i % 2 === 0 ? "1" : "2"} sm:pr-8 sm:text-right`}>
              <div className="glass rounded-2xl p-6 hover-lift">
                <h3 className="text-lg font-bold text-foreground">{e.role}</h3>
                <p className="text-sm text-gold">{e.company}</p>
                <p className="mt-1 text-xs text-muted-foreground">{e.period}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground text-left">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
