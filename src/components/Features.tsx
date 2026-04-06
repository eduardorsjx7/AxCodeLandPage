"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Shield,
  Code2,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Alta performance",
    desc: "Otimização contínua de bundle, imagens e edge para experiência instantânea.",
    icon: Zap,
  },
  {
    title: "Segurança avançada",
    desc: "Camadas de proteção, revisão de dependências e monitoramento proativo.",
    icon: Shield,
  },
  {
    title: "Código escalável",
    desc: "Padrões claros, testes e documentação que facilitam evolução em equipe.",
    icon: Code2,
  },
  {
    title: "Suporte contínuo",
    desc: "SLAs, melhorias incrementais e acompanhamento pós-entrega.",
    icon: Headphones,
  },
];

export function Features() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="relative border-t border-white/5 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.03] to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-sm uppercase tracking-widest text-accent-blue">
            Diferenciais
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Por que líderes escolhem a AxCode
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 text-center backdrop-blur-md transition hover:border-accent-blue/35 hover:shadow-glow-blue"
            >
              <motion.div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue"
                whileHover={{ scale: 1.08, rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.5 }}
              >
                <f.icon className="h-7 w-7" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
