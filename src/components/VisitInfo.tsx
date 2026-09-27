"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/Button";
import { TicketModalPresence } from "@/components/TicketModal";
import { visitDetails } from "@/data/site";

export function VisitInfo() {
  const [open, setOpen] = useState(false);

  return (
    <section id="visit" className="bg-forest-deep py-24 text-cream sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl font-display text-4xl leading-[1.02] sm:text-6xl"
        >
          Plan Your Visit
        </motion.h2>

        <div className="mt-14 grid gap-12 border-t border-cream/15 pt-10 md:grid-cols-3 md:gap-0">
          <div className="md:pr-10">
            <h3 className="text-[0.72rem] tracking-[0.28em] uppercase text-sand">
              Opening Hours
            </h3>
            <p className="mt-4 font-display text-3xl">{visitDetails.hours[0]}</p>
            <p className="mt-2 text-lg text-cream/75">{visitDetails.hours[1]}</p>
          </div>
          <div className="md:border-l md:border-cream/15 md:px-10">
            <h3 className="text-[0.72rem] tracking-[0.28em] uppercase text-sand">
              Location
            </h3>
            <p className="mt-4 font-display text-3xl leading-tight">
              {visitDetails.location}
            </p>
          </div>
          <div className="md:border-l md:border-cream/15 md:pl-10">
            <h3 className="text-[0.72rem] tracking-[0.28em] uppercase text-sand">
              Tickets
            </h3>
            <ul className="mt-4 space-y-3">
              {visitDetails.tickets.map((ticket) => (
                <li key={ticket.label} className="flex items-baseline justify-between gap-4">
                  <span className="text-cream/75">{ticket.label}</span>
                  <span className="font-display text-3xl">{ticket.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button onClick={() => setOpen(true)}>Get Tickets</Button>
            </div>
          </div>
        </div>
      </div>

      <TicketModalPresence open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
