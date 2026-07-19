import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiDownload } from "react-icons/hi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 rounded-2xl transition-all ${
          scrolled ? "glass-strong mx-3 sm:mx-6" : "bg-transparent"
        }`}
      >
        <a href="#home" className="group flex items-center gap-2" aria-label="Home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold to-purple font-black text-primary-foreground shadow-lg glow-gold">
            LV
          </span>
          <span className="hidden sm:inline text-sm font-medium tracking-wide text-muted-foreground group-hover:text-foreground transition">
            Leena Vincit
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
              <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-purple transition-transform duration-300 hover:scale-x-100 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-soft px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-amber-500/20 transition hover:shadow-amber-500/40 hover:-translate-y-0.5"
          >
            <HiDownload className="text-base" />
            Resume
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass text-foreground"
          >
            {open ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-2 glass-strong rounded-2xl p-3"
          >
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-gold-soft px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  <HiDownload /> Download Resume
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
