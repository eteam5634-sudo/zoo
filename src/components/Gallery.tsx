"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { galleryImages } from "@/data/gallery";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const onChange = useCallback((next: number) => setIndex(next), []);

  return (
    <section id="gallery" className="bg-charcoal py-24 text-cream sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-4xl leading-[1.02] sm:text-6xl">
            Captured in the Wild
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-cream/70">
            Eight frames from the habitats, herds, and quiet moments across WILDHaven.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, imageIndex) => (
            <motion.button
              key={image.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (imageIndex % 3) * 0.06 }}
              onClick={() => setIndex(imageIndex)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden"
            >
              <span className={`relative block w-full ${image.aspect}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105 group-focus-visible:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-forest-deep/0 transition duration-500 group-hover:bg-forest-deep/45 group-focus-visible:bg-forest-deep/45">
                  <Eye
                    aria-hidden
                    className="h-7 w-7 text-cream opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                </span>
              </span>
              <span className="sr-only">View {image.alt}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        index={index}
        onClose={() => setIndex(null)}
        onChange={onChange}
      />
    </section>
  );
}
