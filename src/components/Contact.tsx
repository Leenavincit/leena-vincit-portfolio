import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { Section } from "./Section";
import { contact } from "@/data/portfolio";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      } else {
        // Fallback: open user's mail client
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
          form.subject || "Portfolio inquiry"
        )}&body=${body}`;
      }
      setStatus("ok");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-gold/60 transition";

  return (
    <Section id="contact" eyebrow="Get in touch" title="Contact">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-xl font-bold text-foreground">Let's talk</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Have a role, project or collaboration in mind? Drop me a message.
          </p>
          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-xl p-3 hover:bg-white/5 transition"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-purple text-primary-foreground">
                  <FaEnvelope />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                  <span className="block truncate text-sm font-semibold text-foreground">{contact.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl p-3 hover:bg-white/5 transition">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-purple text-primary-foreground">
                  <FaGithub />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">GitHub</span>
                  <span className="block truncate text-sm font-semibold text-foreground">github.com/Leenavincit</span>
                </span>
              </a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl p-3 hover:bg-white/5 transition">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-purple text-primary-foreground">
                  <FaLinkedin />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</span>
                  <span className="block truncate text-sm font-semibold text-foreground">linkedin.com/in/leenavincit</span>
                </span>
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} maxLength={100} />
            <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} maxLength={200} />
          </div>
          <input required placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={field} maxLength={200} />
          <textarea required rows={6} placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={field + " resize-none"} maxLength={2000} />
          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-soft px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:shadow-amber-500/40 disabled:opacity-70"
          >
            <FaPaperPlane className="transition-transform group-hover:translate-x-0.5" />
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "ok" && <p className="text-sm text-emerald-400 text-center">Thanks! Your message is on its way.</p>}
          {status === "error" && <p className="text-sm text-destructive text-center">Something went wrong. Please try email directly.</p>}
        </motion.form>
      </div>
    </Section>
  );
}
