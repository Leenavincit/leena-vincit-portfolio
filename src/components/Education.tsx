import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { Section } from "./Section";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="Academic" title="Education">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-gold to-transparent" />
        <div className="space-y-6">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12"
            >
              <span className="absolute left-0 top-4 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-purple to-gold text-primary-foreground shadow-lg">
                <FaGraduationCap className="text-sm" />
              </span>
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-foreground">{e.degree}</h3>
                    <p className="text-sm text-gold">{e.school}</p>
                  </div>
                  <span className="shrink-0 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                    {e.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
