"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/Button";

const heroImage =
  "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=2400&q=80";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-forest-deep text-cream">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.16 }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      >
        <Image
          src={heroImage}
          alt="Two African elephants walking across the savanna at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-forest-deep/55" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-forest-deep/80 to-transparent" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[22%] hidden h-28 w-28 rounded-full border border-cream/25 lg:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-[0.72rem] font-medium tracking-[0.36em] uppercase text-sand"
        >
          Discover the Wild
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease }}
          className="mt-5 max-w-5xl font-display text-[3.1rem] leading-[0.92] tracking-tight sm:text-7xl lg:text-[6.4rem]"
        >
          Where Wildlife Comes Alive
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg"
        >
          Explore incredible animals, immersive habitats, and unforgettable experiences at WILDHaven Zoo.
        </motion.p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease }}
          >
            <Button href="#animals">Explore Animals</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.54, ease }}
          >
            <Button href="#visit" variant="outline">
              Plan Your Visit
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] tracking-[0.28em] uppercase text-cream/80"
      >
        Scroll to explore
        <motion.span
          aria-hidden
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>

      <p className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[0.65rem] tracking-[0.42em] uppercase text-cream/50 xl:block">
        WILDHaven — Wildlife Sanctuary
      </p>
    </section>
  );
}
