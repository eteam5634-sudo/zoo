"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import type { GalleryImage } from "@/data/gallery";
import { useDialog } from "@/lib/useDialog";

type LightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const dialogRef = useDialog(index !== null, onClose);

  useEffect(() => {
    if (index === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onChange((index + 1) % images.length);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        onChange((index - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length, index, onChange]);

  return (
    <AnimatePresence>
      {index !== null ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-deep/95 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative flex h-full w-full max-w-6xl flex-col outline-none"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between text-cream">
              <p aria-live="polite" className="text-sm tracking-[0.22em]">
                {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close gallery"
                className="inline-flex h-12 w-12 items-center justify-center border border-cream/30"
              >
                <X aria-hidden />
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[index].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative h-full min-h-[50svh]"
                >
                  <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                type="button"
                onClick={() => onChange((index - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="inline-flex h-12 items-center gap-2 border border-cream/30 px-4 text-[0.72rem] tracking-[0.18em] uppercase text-cream"
              >
                <ChevronLeft aria-hidden className="h-4 w-4" />
                Previous
              </button>
              <button
                type="button"
                onClick={() => onChange((index + 1) % images.length)}
                aria-label="Next image"
                className="inline-flex h-12 items-center gap-2 border border-cream/30 px-4 text-[0.72rem] tracking-[0.18em] uppercase text-cream"
              >
                Next
                <ChevronRight aria-hidden className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
