"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/data/experiences";

export function Experiences() {
  return (
    <section id="experiences" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:col-span-7">
            Experience the Wild
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-ink/70 lg:col-span-4 lg:col-start-9">
            Four ways to slow down, look closer, and leave with a story worth telling.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative min-h-[340px] overflow-hidden bg-forest sm:min-h-[420px] ${
                index === 0 ? "md:min-h-[520px]" : ""
              }`}
            >
              <Image
                src={experience.image}
                alt={experience.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-deep/25 transition duration-500 group-hover:bg-forest-deep/55" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl text-cream transition duration-500 group-hover:-translate-y-1 sm:text-4xl">
                      {experience.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/85 sm:text-base">
                      {experience.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    aria-hidden
                    className="h-6 w-6 shrink-0 text-cream transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
