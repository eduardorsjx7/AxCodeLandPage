"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marina Alves",
    company: "ScaleUp Educação",
    feedback:
      "Redesenhamos todo o funil com a AxCode. O tempo de carregamento caiu pela metade e as conversões subiram de forma consistente.",
  },
  {
    name: "Ricardo Mendes",
    company: "LogiFlow",
    feedback:
      "Dashboard e integrações com ERP saíram exatamente como precisávamos. Comunicação ágil e entregas previsíveis.",
  },
  {
    name: "Fernanda Costa",
    company: "Neo Health",
    feedback:
      "Segurança e compliance eram críticos. A equipe entregou com documentação clara e suporte pós-go-live impecável.",
  },
];

const AUTO_MS = 6000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-40px" });

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!inView || paused) return;
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [inView, paused, next]);

  const t = testimonials[index];

  return (
    <section
      id="depoimentos"
      ref={ref}
      className="relative border-t border-white/5 bg-surface/30 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,255,127,0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-mono text-sm uppercase tracking-widest text-accent-green">
            Depoimentos
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Quem já confia na gente
          </h2>
        </motion.div>

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_60px_rgba(0,123,255,0.08)] backdrop-blur-xl sm:p-12">
            <Quote className="h-10 w-10 text-accent-green/40" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mt-6 text-lg leading-relaxed text-zinc-200 sm:text-xl">
                  “{t.feedback}”
                </p>
                <div className="mt-8 flex flex-col border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-accent-blue">{t.company}</p>
                  </div>
                  <div className="mt-4 flex gap-2 sm:mt-0">
                    <motion.button
                      type="button"
                      onClick={prev}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-accent-green/40 hover:text-accent-green"
                      whileTap={{ scale: 0.95 }}
                      aria-label="Depoimento anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={next}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-accent-green/40 hover:text-accent-green"
                      whileTap={{ scale: 0.95 }}
                      aria-label="Próximo depoimento"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-accent-green"
                    : "w-2 bg-white/20 hover:bg-white/35"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
