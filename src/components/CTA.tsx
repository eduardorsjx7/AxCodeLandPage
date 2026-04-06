"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,255,127,0.12),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-accent-green/25 bg-gradient-to-br from-white/[0.07] via-transparent to-accent-blue/10 p-10 shadow-glow backdrop-blur-xl sm:p-14"
        >
          <div className="mb-8 flex justify-center">
            <BrandLogo />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Pronto para levar seu projeto para o{" "}
            <span className="bg-gradient-to-r from-accent-green to-emerald-300 bg-clip-text text-transparent">
              próximo nível
            </span>
            ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Conte-nos sobre seu desafio. Em até 48 horas retornamos com próximos
            passos e uma proposta alinhada ao seu estágio de maturidade.
          </p>
          <motion.a
            href="#contato"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent-green px-10 py-5 text-lg font-semibold text-black shadow-[0_0_60px_rgba(0,255,127,0.4)]"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 72px rgba(0,255,127,0.45)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Começar conversa
            <ArrowRight className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
