"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/Button";

const ctaImage =
  "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=2400&q=80";

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section ref={ref} className="relative isolate min-h-[78svh] overflow-hidden bg-forest-deep text-cream">
      <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0">
        <Image
          src={ctaImage}
          alt="White-tailed deer standing in a sunlit meadow"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-forest-deep/65"
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative mx-auto flex min-h-[78svh] w-full max-w-[1400px] flex-col items-start justify-center px-5 py-24 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          className="max-w-4xl font-display text-4xl leading-[0.98] sm:text-6xl lg:text-7xl"
        >
          Your Wild Adventure Starts Here
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-xl text-lg text-cream/85"
        >
          Come closer. Discover more. Experience the wild.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="#visit">Plan Your Visit</Button>
          <Button href="#animals" variant="outline">
            Explore Animals
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
