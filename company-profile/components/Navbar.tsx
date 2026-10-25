"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/services", label: "Our Coffee" },
  { href: "/contact", label: "Visit Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
         Kopi<span>Nusantara</span>
        </Link>

        <button
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className={`${styles.menu} ${open ? styles.open : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${isActive(link.href) ? styles.active : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}