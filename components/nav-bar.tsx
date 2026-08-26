"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#platform", label: "Platform" },
  { href: "#service", label: "Service" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl tracking-wide">
          DR. <span className="text-[#c8121b]">O</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#c8121b] transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#c8121b] hover:bg-[#a30f16] transition-colors px-5 py-2 rounded-sm font-display text-base"
          >
            Get Involved
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm font-medium uppercase tracking-wider">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-[#c8121b]">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#c8121b] text-center px-5 py-2 rounded-sm font-display text-base"
          >
            Get Involved
          </a>
        </div>
      )}
    </nav>
  );
}
