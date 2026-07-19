import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaDatabase,
  FaChartLine,
  FaGitAlt,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import {
  SiPython,
  SiPhp,
  SiJavascript,
  SiMysql,
  SiHtml5,
  SiCss,
  SiGithub as SiGithubBrand,
} from "react-icons/si";
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

type TechIcon = {
  name: string;
  Icon: IconType;
  color: string;
  /** angle in degrees, 0 = right, 90 = bottom */
  angle: number;
  delay: number;
};

const techIcons: TechIcon[] = [
  { name: "Python", Icon: SiPython, color: "#3776AB", angle: -90, delay: 0 },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", angle: -54, delay: 0.2 },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26", angle: -18, delay: 0.4 },
  { name: "CSS3", Icon: SiCss, color: "#1572B6", angle: 18, delay: 0.6 },
  { name: "PHP", Icon: SiPhp, color: "#777BB4", angle: 54, delay: 0.8 },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1", angle: 90, delay: 1.0 },
  { name: "SQL", Icon: FaDatabase, color: "#F59E0B", angle: 126, delay: 1.2 },
  { name: "Tableau", Icon: FaChartLine, color: "#A855F7", angle: 162, delay: 1.4 },
  { name: "GitHub", Icon: SiGithubBrand, color: "#ffffff", angle: 198, delay: 1.6 },
  { name: "Git", Icon: FaGitAlt, color: "#F05032", angle: 234, delay: 1.8 },
];

/** Pairs of icon indexes to connect with glowing lines. */
const connections: [number, number][] = [
  [0, 2],
  [2, 4],
  [4, 6],
  [6, 8],
  [8, 0],
  [1, 5],
  [3, 7],
];

function FloatingTechIcons() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="-100 -100 200 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.7" />
          </linearGradient>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {connections.map(([a, b], idx) => {
          const A = techIcons[a];
          const B = techIcons[b];
          const r = 78;
          const ax = Math.cos((A.angle * Math.PI) / 180) * r;
          const ay = Math.sin((A.angle * Math.PI) / 180) * r;
          const bx = Math.cos((B.angle * Math.PI) / 180) * r;
          const by = Math.sin((B.angle * Math.PI) / 180) * r;
          return (
            <motion.line
              key={idx}
              x1={ax}
              y1={ay}
              x2={bx}
              y2={by}
              stroke="url(#lineGrad)"
              strokeWidth="0.5"
              strokeDasharray="2 3"
              filter="url(#lineGlow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.55, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, delay: idx * 0.25 }}
            />
          );
        })}
      </svg>

      {/* icons */}
      {techIcons.map(({ name, Icon, color, angle, delay }, i) => {
        const rad = (angle * Math.PI) / 180;
        // radius as % of container — icons live just outside the portrait ring
        const rx = 52;
        const ry = 52;
        const x = 50 + Math.cos(rad) * rx;
        const y = 50 + Math.sin(rad) * ry;
        return (
          <motion.div
            key={name}
            className="pointer-events-auto absolute"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay },
              scale: { duration: 0.6, delay },
              y: { duration: 3 + (i % 3), delay, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ rotate: 12, scale: 1.15 }}
          >
            <div className="group relative">
              {/* dual glow */}
              <span className="absolute inset-0 -z-10 rounded-full bg-gold/40 blur-lg" />
              <span className="absolute inset-0 -z-10 rounded-full bg-purple/40 blur-xl scale-125" />
              <div
                className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-background/70 backdrop-blur-md ring-1 ring-white/15 shadow-lg transition-shadow group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]"
                title={name}
              >
                <Icon className="text-lg sm:text-xl" style={{ color }} />
              </div>
            </div>
          </motion.div>
        );
      })}
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
          <div className="relative h-[22rem] w-[22rem] sm:h-[26rem] sm:w-[26rem] lg:h-[30rem] lg:w-[30rem]">
            {/* portrait */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-gold via-purple to-gold blur-2xl opacity-60 animate-glow-pulse" />
                <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full p-1 bg-gradient-to-tr from-gold via-purple-soft to-gold">
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
            </div>

            {/* floating tech badges */}
            <FloatingTechIcons />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
