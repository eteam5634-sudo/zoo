"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useDialog } from "@/lib/useDialog";

type TicketModalProps = {
  open: boolean;
  onClose: () => void;
};

export function TicketModal({ open, onClose }: TicketModalProps) {
  const dialogRef = useDialog(open, onClose);

  if (!open) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-forest-deep/75 p-4 sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ticket-dialog-title"
        tabIndex={-1}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md bg-cream px-6 py-8 text-ink shadow-[0_24px_70px_rgba(0,0,0,0.28)] outline-none sm:px-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close ticket notice"
          className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center text-forest"
        >
          <X aria-hidden />
        </button>
        <p className="text-[0.72rem] tracking-[0.28em] uppercase text-earth">Tickets</p>
        <h2 id="ticket-dialog-title" className="mt-3 font-display text-3xl">
          Get Tickets
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/80">
          Tickets are available at the zoo entrance.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 inline-flex min-h-12 items-center bg-forest px-6 text-[0.72rem] tracking-[0.2em] uppercase text-cream"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

export function TicketModalPresence({
  open,
  onClose,
}: TicketModalProps) {
  return (
    <AnimatePresence>
      {open ? <TicketModal open={open} onClose={onClose} /> : null}
    </AnimatePresence>
  );
}
