"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/Button";

const images = [
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    alt: "Sunlight filtering through a dense green forest",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    alt: "Green mountain valley under a wide open sky",
  },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section id="about" ref={ref} className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="relative min-h-[460px] lg:col-span-6 lg:min-h-[620px]">
          <motion.div style={{ y }} className="absolute left-0 top-0 h-[72%] w-[74%] overflow-hidden">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="(min-width: 1024px) 35vw, 80vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="absolute bottom-0 right-0 h-[48%] w-[62%] overflow-hidden border-8 border-cream shadow-[0_18px_50px_rgba(20,20,16,0.12)]"
          >
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              sizes="(min-width: 1024px) 28vw, 60vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-5 lg:col-start-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75 }}
        >
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            More Than a Zoo
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">
            WILDHaven Zoo is focused on wildlife education, memorable visitor experiences, and conservation awareness.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Every path, talk, and habitat is designed to bring people closer to the animals they came to see — and to the responsibility of protecting them.
          </p>
          <div className="mt-8">
            <Button href="#conservation" variant="forest">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
