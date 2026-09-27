"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Animal } from "@/data/animals";

type AnimalCardProps = {
  animal: Animal;
  onOpen: (animal: Animal) => void;
};

export function AnimalCard({ animal, onOpen }: AnimalCardProps) {
  return (
    <motion.button
      type="button"
      layout
      onClick={() => onOpen(animal)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group w-full text-left"
    >
      <span className="relative block aspect-[4/5] overflow-hidden bg-forest-mid">
        <Image
          src={animal.image}
          alt={animal.alt}
          fill
          sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105"
        />
        <span className="absolute inset-0 bg-forest-deep/0 transition duration-500 group-hover:bg-forest-deep/50 group-focus-visible:bg-forest-deep/50" />
        <span className="absolute inset-x-0 bottom-0 translate-y-3 px-5 pb-6 text-[0.68rem] tracking-[0.22em] uppercase text-cream opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          Explore
        </span>
      </span>
      <span className="mt-4 block text-[0.68rem] tracking-[0.22em] uppercase text-sand">
        {animal.categories[0]}
      </span>
      <span className="mt-1 block font-display text-2xl text-cream">{animal.name}</span>
    </motion.button>
  );
}
