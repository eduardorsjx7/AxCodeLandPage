"use client";

import { motion } from "framer-motion";

const stats = [
  { v: "40+", l: "Projetos entregues" },
  { v: "99.9%", l: "Foco em uptime" },
  { v: "24/7", l: "Suporte dedicado" },
  { v: "<200ms", l: "Latência alvo" },
];

export function HeroStats() {
  return (
    <section className="relative bg-[#070707] py-8 sm:py-10">
      <motion.div
        className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="mx-auto mt-2 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 text-center sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
            >
              <p className="font-mono text-2xl font-semibold text-accent-green sm:text-3xl">{s.v}</p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
