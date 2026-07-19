import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "./Section";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications">
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover-lift"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold to-purple text-primary-foreground shadow-lg">
                <FaCertificate className="text-lg" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-foreground">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gold hover:text-gold-soft transition">
                  View Certificate <FaExternalLinkAlt className="text-[10px]" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
