import { motion } from "framer-motion";
import { Section } from "./Section";
import { stats } from "@/data/portfolio";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-6 text-center hover-lift"
    >
      <div className="text-4xl sm:text-5xl font-black text-gradient-gold">
        {v}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <Section id="about" eyebrow="Who I Am" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-10"
        >
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            I am an <span className="text-foreground font-semibold">aspiring Software Developer and Data Analyst</span>{" "}
            with a strong foundation in web development, database management, and business
            intelligence. I enjoy building user-friendly applications and transforming raw data
            into meaningful insights through interactive dashboards.
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            I am passionate about <span className="text-gold font-semibold">continuous learning</span>,{" "}
            <span className="text-purple-soft font-semibold">problem-solving</span>, and creating
            technology-driven solutions that improve user experience and support better business
            decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </Section>
  );
}
