"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const introImage =
  "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1800&q=80";

export function Intro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="intro" ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.72rem] font-medium tracking-[0.32em] uppercase text-earth">
            The Wild Awaits
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Closer to Nature. Closer to Wonder.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75 sm:text-lg">
            WILDHaven Zoo is a place where people can discover, learn about, and connect with wildlife through immersive experiences and carefully designed habitats.
          </p>
          <div className="mt-8 h-px w-24 bg-earth/50" />
        </motion.div>

        <motion.div
          className="relative lg:col-span-6 lg:col-start-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-8 -top-8 z-10 h-28 w-28 rounded-full border border-earth/40 sm:-left-12 sm:-top-10 sm:h-36 sm:w-36"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
            <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0">
              <Image
                src={introImage}
                alt="Three rhinos crossing a savanna road with hills behind them"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
          <div aria-hidden className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full border border-sand sm:block" />
        </motion.div>
      </div>
    </section>
  );
}
