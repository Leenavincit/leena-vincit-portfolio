import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contact } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 sm:flex-row lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-foreground">© 2026 Leena Vincit</p>
          <p className="text-xs text-muted-foreground">Built with React, TypeScript & Tailwind CSS</p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { href: contact.github, icon: FaGithub, label: "GitHub" },
            { href: contact.linkedin, icon: FaLinkedin, label: "LinkedIn" },
            { href: `mailto:${contact.email}`, icon: FaEnvelope, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground hover:text-gold transition"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
