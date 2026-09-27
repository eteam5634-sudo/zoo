"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { AnimalCard } from "@/components/AnimalCard";
import { AnimalModal } from "@/components/AnimalModal";
import {
  animalFilters,
  animals,
  type Animal,
  type AnimalFilter,
} from "@/data/animals";

export function AnimalExplorer() {
  const [filter, setFilter] = useState<AnimalFilter>("All");
  const [selected, setSelected] = useState<Animal | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? animals
        : animals.filter((animal) => animal.categories.includes(filter)),
    [filter],
  );

  return (
    <section id="animals" className="bg-forest py-24 text-cream sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
              Meet the Animals
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-cream/75 lg:col-span-5 lg:justify-self-end">
            From powerful predators to gentle giants, discover the incredible animals that call WILDHaven home.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter animals"
          className="mt-10 flex gap-2 overflow-x-auto pb-2"
        >
          {animalFilters.map((item) => {
            const pressed = filter === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={pressed}
                onClick={() => setFilter(item)}
                className={`shrink-0 border px-4 py-2 text-[0.72rem] tracking-[0.18em] uppercase transition ${
                  pressed
                    ? "border-cream bg-cream text-forest"
                    : "border-cream/25 text-cream/80 hover:border-cream/70"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "animal" : "animals"}
        </p>

        <motion.div
          key={filter}
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {visible.map((animal) => (
            <motion.div
              key={animal.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
            >
              <AnimalCard animal={animal} onOpen={setSelected} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected ? (
          <AnimalModal animal={selected} onClose={() => setSelected(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
