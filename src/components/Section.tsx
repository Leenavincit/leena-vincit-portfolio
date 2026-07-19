import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="text-gradient-gold">{title}</span>
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-gradient-to-r from-gold to-purple" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
