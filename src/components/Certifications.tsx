import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaDownload,
  FaSearchPlus,
  FaSearchMinus,
  FaTimes,
  FaBookOpen,
  FaBuilding,
  FaCalendarAlt,
  FaIdBadge,
} from "react-icons/fa";
import { Section } from "./Section";
import { certifications, type Certification } from "@/data/portfolio";

export default function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <Section
      id="certifications"
      eyebrow="Professional Certifications & Publications"
      title="Certifications"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-gold/70 via-gold/20 to-purple/60 transition-shadow hover:shadow-[0_20px_60px_-20px_rgba(245,158,11,0.45)]"
          >
            <div className="relative h-full rounded-2xl bg-background/70 backdrop-blur-xl p-6 overflow-hidden">
              {/* glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-purple/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold to-purple text-primary-foreground shadow-lg"
                >
                  <div className="absolute inset-0 rounded-xl bg-gold/40 blur-lg -z-10" />
                  {c.category ? <FaBookOpen className="text-xl" /> : <FaCertificate className="text-xl" />}
                </motion.div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
                      <FaCheckCircle className="text-[10px]" /> Verified
                    </span>
                    {c.category && (
                      <span className="inline-flex items-center rounded-full bg-purple/15 px-2 py-0.5 text-[10px] font-semibold text-purple-soft ring-1 ring-purple/30">
                        {c.category}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-bold text-foreground leading-snug">{c.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-gold">
                    <FaBuilding className="text-[10px]" /> {c.issuer}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.description}</p>

              {(c.publication || c.institution) && (
                <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                  {c.publication && (
                    <p>
                      <span className="text-foreground/80 font-semibold">Publication: </span>
                      {c.publication}
                    </p>
                  )}
                  {c.institution && (
                    <p>
                      <span className="text-foreground/80 font-semibold">Institution: </span>
                      {c.institution}
                    </p>
                  )}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                {c.issueDate && (
                  <span className="inline-flex items-center gap-1.5">
                    <FaCalendarAlt className="text-gold" /> {c.issueDate}
                  </span>
                )}
                {c.credentialId && (
                  <span className="inline-flex items-center gap-1.5">
                    <FaIdBadge className="text-gold" /> ID: {c.credentialId}
                  </span>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium text-foreground/80 ring-1 ring-white/10"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActive(c)}
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold to-gold-soft px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:shadow-amber-500/40"
              >
                {c.buttonLabel} <FaExternalLinkAlt className="text-[10px]" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <CertificateViewer cert={active} onClose={() => setActive(null)} />
    </Section>
  );
}

function CertificateViewer({
  cert,
  onClose,
}: {
  cert: Certification | null;
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState(1);
  const url = cert?.certificateUrl;

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-background/95 ring-1 ring-white/10 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 p-4">
              <div className="min-w-0">
                <h3 className="truncate font-bold text-foreground">{cert.title}</h3>
                <p className="truncate text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
                  aria-label="Zoom out"
                  className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-gold transition"
                >
                  <FaSearchMinus />
                </button>
                <button
                  onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
                  aria-label="Zoom in"
                  className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-gold transition"
                >
                  <FaSearchPlus />
                </button>
                {url && (
                  <>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open in new tab"
                      className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-gold transition"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={url}
                      download
                      aria-label="Download"
                      className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-gold transition"
                    >
                      <FaDownload />
                    </a>
                  </>
                )}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-r from-gold to-purple text-primary-foreground"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-6 bg-gradient-to-br from-background to-background/60">
              <div
                className="mx-auto transition-transform origin-top"
                style={{ transform: `scale(${zoom})`, width: "fit-content" }}
              >
                {url ? (
                  <img
                    src={url}
                    alt={cert.title}
                    className="max-w-full rounded-lg shadow-2xl"
                  />
                ) : (
                  <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-12 text-center max-w-2xl">
                    <FaCertificate className="mx-auto text-5xl text-gold mb-4" />
                    <h4 className="text-lg font-bold text-foreground">{cert.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Certificate image will appear here once uploaded.
                    </p>
                    <p className="mt-4 text-xs text-muted-foreground">
                      Add a <code className="text-gold">certificateUrl</code> in{" "}
                      <code className="text-gold">src/data/portfolio.ts</code> pointing to your
                      certificate image or PDF.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
