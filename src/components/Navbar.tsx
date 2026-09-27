"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { navLinks, type SectionId } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const barSolid = scrolled || open;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        barSolid
          ? "border-b border-cream/10 bg-forest-deep/85 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex h-[4.5rem] w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="group flex items-baseline gap-2 text-cream">
          <span className="font-display text-2xl tracking-tight">WILDHaven</span>
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-sand">
            Zoo
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "page" : undefined}
              onClick={() => setActive(link.id)}
              className={`relative text-[0.72rem] tracking-[0.18em] uppercase transition-colors ${
                active === link.id ? "text-cream" : "text-cream/70 hover:text-cream"
              }`}
            >
              {link.label}
              {active === link.id ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-px w-full bg-sand"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#visit">Plan Your Visit</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-cream lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest-deep lg:hidden"
          >
            <motion.nav
              aria-label="Mobile"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col justify-center gap-6 px-8 pb-16 pt-24"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => {
                    setActive(link.id);
                    setOpen(false);
                  }}
                  className="font-display text-4xl text-cream"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4">
                <Button href="#visit" onClick={() => setOpen(false)}>
                  Plan Your Visit
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
