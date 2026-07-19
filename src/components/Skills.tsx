import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & Expertise">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="glass rounded-2xl p-6 hover-lift"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground">{group.title}</h3>
              <span className="text-xs text-muted-foreground">{group.items.length} skills</span>
            </div>
            <ul className="space-y-4">
              {group.items.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center gap-2.5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-gold">
                        <Icon />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
                        {s.name}
                      </span>
                      <span className="shrink-0 text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-gold to-purple"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
