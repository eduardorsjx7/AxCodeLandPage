"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { OurSystem } from "@/data/ourSystems";
import { ourSystems } from "@/data/ourSystems";

function SystemCard({ item, index }: { item: OurSystem; index: number }) {
  const systemLink = item.href ?? "#contato";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl transition hover:border-accent-green/30 hover:shadow-glow-sm"
      whileHover={{ y: -4 }}
    >
      {item.logoSrc ? (
        <div className="relative mb-5 flex h-16 items-center justify-center px-2">
          <div
            className="pointer-events-none absolute h-12 w-40 rounded-full bg-accent-green/30 blur-2xl"
            aria-hidden
          />
          <Image
            src={item.logoSrc}
            alt={`Logo ${item.name}`}
            width={320}
            height={128}
            className="relative z-[1] h-16 w-auto object-contain"
            sizes="(max-width: 640px) 180px, 220px"
          />
        </div>
      ) : (
        <div className="mb-5 space-y-2">
          <div className="h-2.5 w-3/4 rounded-full bg-white/45" />
          <div className="h-2.5 w-full rounded-full bg-white/30" />
          <div className="h-2.5 w-2/3 rounded-full bg-accent-green/40" />
        </div>
      )}

      <h3 className="font-mono text-lg font-semibold tracking-tight text-white sm:text-xl">
        {item.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent-blue/90">{item.tagline}</p>
      <p className="mt-3 w-full text-justify text-sm leading-relaxed text-zinc-400">
        {item.description}
      </p>

      <a
        href={systemLink}
        target={item.href ? "_blank" : undefined}
        rel={item.href ? "noopener noreferrer" : undefined}
        className="mx-auto mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent-green/35 bg-accent-green/10 px-4 py-2 text-sm font-semibold text-accent-green transition hover:bg-accent-green/20"
      >
        Acessar sistema
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

function NewSystemsCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center backdrop-blur-sm"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-500">
        <Rocket className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <p className="font-mono text-sm font-semibold text-zinc-300">Novos sistemas</p>
      <p className="mt-2 max-w-xs text-justify text-sm text-zinc-500">
        Estamos expandindo o portfólio. Entre em contato se quiser parceria ou
        white-label.
      </p>
      <a
        href="#contato"
        className="mt-6 text-sm font-semibold text-accent-green transition hover:text-accent-green/80"
      >
        Falar com a equipe →
      </a>
    </motion.div>
  );
}

export function OurSystems() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="nossos-sistemas"
      ref={ref}
      className="relative border-t border-white/5 bg-[#080808] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_40%,rgba(0,123,255,0.07),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-sm uppercase tracking-widest text-accent-green">
            Nossos sistemas
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Produtos que construímos e operamos
          </h2>
          <p className="mt-4 text-zinc-400">
            Soluções próprias da AxCode — de avaliações a gestão contábil — com a
            mesma engenharia que aplicamos em projetos sob medida.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {ourSystems.map((item, i) => (
            <div key={item.id}>
              <SystemCard item={item} index={i} />
            </div>
          ))}
          <div>
            <NewSystemsCard index={ourSystems.length} />
          </div>
        </div>
      </div>
    </section>
  );
}
