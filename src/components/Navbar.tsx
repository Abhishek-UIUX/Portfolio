"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm transition-transform group-hover:scale-105"
            style={{ backgroundColor: "#fca311", color: "#000000" }}
          >
            AJ
          </div>
          <span className="font-display font-semibold text-sm tracking-wider" style={{ color: "var(--text-primary)" }}>
            Abhishek Jaiswar
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
                style={{ color: active ? "#fca311" : "var(--text-secondary)" }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ backgroundColor: "#fca311" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:jaiswarabhishek2@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-85"
            style={{ backgroundColor: "#fca311", color: "#000000" }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            className="p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 sm:px-6 pb-4"
            style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-base)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-3 text-sm font-medium"
                style={{
                  color: pathname === link.href ? "#fca311" : "var(--text-secondary)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#fca311" }} />
                )}
              </Link>
            ))}
            <a
              href="mailto:jaiswarabhishek2@gmail.com"
              className="mt-4 flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold"
              style={{ backgroundColor: "#fca311", color: "#000000" }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
