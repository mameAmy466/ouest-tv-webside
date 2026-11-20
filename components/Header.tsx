"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Close, Facebook, HomeIcon, Instagram, Linkedin, Menu, PlayCircle, Twitter } from "./Icons";

const links = [
  { href: "/live-tv", label: "Live TV" },
  { href: "/replay-tv", label: "Replay TV" },
  { href: "/a-propos", label: "A propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-social">
          <a href="#" aria-label="Facebook"><Facebook size={15} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
        </div>
        <div className="header-main">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <Image src="/img/logo.png" alt="OUEST-TV" width={140} height={68} priority />
          </Link>

          <nav className={`main-nav ${open ? "open" : ""}`}>
            <Link href="/" aria-label="Accueil" className={pathname === "/" ? "active" : ""} onClick={() => setOpen(false)}>
              <HomeIcon />
              <span className="mobile-only">Accueil</span>
            </Link>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={pathname.startsWith(l.href) ? "active" : ""} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/live-tv" className="btn-direct">
            <PlayCircle size={26} />
            <span>EN DIRECT</span>
          </Link>

          <button className="burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
