"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import type { Animal } from "@/data/animals";
import { useDialog } from "@/lib/useDialog";

type AnimalModalProps = {
  animal: Animal | null;
  onClose: () => void;
};

export function AnimalModal({ animal, onClose }: AnimalModalProps) {
  const dialogRef = useDialog(Boolean(animal), onClose);

  if (!animal) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-forest-deep/75 p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="animal-dialog-title"
        tabIndex={-1}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid max-h-[100svh] w-full max-w-5xl overflow-y-auto bg-cream shadow-[0_30px_80px_rgba(0,0,0,0.35)] outline-none sm:max-h-[min(90svh,860px)] lg:grid-cols-[1.15fr_0.85fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close animal details"
          className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center bg-forest-deep/80 text-cream"
        >
          <X aria-hidden className="h-5 w-5" />
        </button>

        <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-full">
          <Image
            src={animal.image}
            alt={animal.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-[0.72rem] tracking-[0.28em] uppercase text-earth">
            {animal.categories.join(" · ")}
          </p>
          <h2 id="animal-dialog-title" className="mt-3 font-display text-4xl text-ink sm:text-5xl">
            {animal.name}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75">{animal.description}</p>
          <dl className="mt-8 space-y-4 border-t border-sand pt-6">
            {[
              ["Habitat", animal.habitat],
              ["Diet", animal.diet],
              ["Conservation status", animal.conservation],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[0.68rem] tracking-[0.22em] uppercase text-earth">{label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink sm:text-base">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </motion.div>
  );
}
