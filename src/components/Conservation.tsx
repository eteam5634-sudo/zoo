"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Animal Species" },
  { value: 20, suffix: "+", label: "Years of Conservation" },
  { value: 100, suffix: "K+", label: "Visitors" },
];

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div className="border-t border-earth/30 pt-6">
      <p ref={ref} className="font-display text-6xl tracking-tight text-ink sm:text-7xl">
        {display}
        {suffix}
      </p>
      <p className="mt-3 text-[0.72rem] tracking-[0.2em] uppercase text-earth">{label}</p>
    </div>
  );
}

export function Conservation() {
  return (
    <section id="conservation" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-16 hidden h-40 w-40 rounded-full border border-sand lg:block"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Protecting Wildlife for Tomorrow
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
            Every visit helps us create meaningful experiences while supporting wildlife education, conservation awareness, and a deeper connection with nature.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
