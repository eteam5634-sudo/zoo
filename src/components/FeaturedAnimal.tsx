"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimalModal } from "@/components/AnimalModal";
import { Button } from "@/components/Button";
import { featuredAnimal } from "@/data/animals";

export function FeaturedAnimal() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative isolate min-h-[88svh] overflow-hidden bg-charcoal text-cream">
      <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0">
        <Image
          src={featuredAnimal.image}
          alt={featuredAnimal.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-forest-deep/60" />

      <div className="relative mx-auto flex min-h-[88svh] w-full max-w-[1400px] items-end px-5 py-20 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl border-l border-sand/70 pl-6 sm:pl-8"
        >
          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-sand">
            Meet Our Giants
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Majestic. Intelligent. Unforgettable.
          </h2>
          <p className="mt-5 text-sm tracking-[0.22em] uppercase text-cream/80">
            African Elephant
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/80">
            {featuredAnimal.description}
          </p>
          <div className="mt-8">
            <Button onClick={() => setOpen(true)}>Discover More</Button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open ? (
          <AnimalModal animal={featuredAnimal} onClose={() => setOpen(false)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
