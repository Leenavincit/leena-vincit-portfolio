import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { Section } from "./Section";
import { achievements, openRoles } from "@/data/portfolio";

export default function Achievements() {
  return (
    <>
      <Section id="achievements" eyebrow="Highlights" title="Achievements">
        <div className="grid gap-4 md:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover-lift"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-soft text-primary-foreground shadow-lg glow-gold">
                <FaTrophy />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="relative py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple/20 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to Opportunities
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-black">
                <span className="text-gradient-gold">Let's build something great together</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Actively looking for roles across software engineering and data analytics.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {openRoles.map((r) => (
                  <span
                    key={r}
                    className="rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold-soft"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
