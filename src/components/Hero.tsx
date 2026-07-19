import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import portrait from "@/assets/leena.png.asset.json";
import { contact } from "@/data/portfolio";

function useTyping(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), pause);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 22 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: 2 + Math.random() * 4,
        d: 6 + Math.random() * 10,
        delay: Math.random() * 5,
        gold: Math.random() > 0.5,
      })),
    []
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((p, idx) => (
        <motion.span
          key={idx}
          className={`absolute rounded-full blur-[1px] ${p.gold ? "bg-gold/70" : "bg-purple/70"}`}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.d, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const typed = useTyping(["Software Developer", "Data Analyst", "Python Developer"]);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <Particles />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Available for opportunities
          </div>

          <p className="mt-6 text-lg text-muted-foreground">Hi, I'm</p>
          <h1 className="mt-2 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-gold drop-shadow-[0_2px_20px_rgba(245,158,11,0.3)]">
              Leena Vincit
            </span>
          </h1>

          <div className="mt-4 h-8 text-xl sm:text-2xl font-semibold text-foreground/90">
            <span className="text-purple-soft">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-gold" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Passionate about developing scalable web applications and transforming raw data into
            meaningful business insights. Skilled in Python, PHP, SQL, Tableau, HTML, CSS,
            JavaScript, MySQL, Git and GitHub. I enjoy building practical software solutions and
            creating interactive dashboards for data-driven decision making.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-soft px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:shadow-amber-500/40"
            >
              View Projects
              <FaArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5"
            >
              <HiDownload /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: contact.github, icon: FaGithub, label: "GitHub" },
              { href: contact.linkedin, icon: FaLinkedin, label: "LinkedIn" },
              { href: `mailto:${contact.email}`, icon: FaEnvelope, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl glass text-muted-foreground transition hover:text-gold hover:-translate-y-0.5 hover:glow-gold"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-gold via-purple to-gold blur-2xl opacity-60 animate-glow-pulse" />
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full p-1 bg-gradient-to-tr from-gold via-purple-soft to-gold animate-[spin_16s_linear_infinite]">
              <div className="h-full w-full rounded-full bg-background p-2">
                <img
                  src={portrait.url}
                  alt="Leena Vincit portrait"
                  loading="eager"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
