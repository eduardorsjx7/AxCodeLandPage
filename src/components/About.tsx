"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, Layers, ShieldCheck, Bot } from "lucide-react";
const items = [
  {
    title: "Performance",
    desc: "Core Web Vitals e stacks modernas para carregar rápido em qualquer dispositivo.",
    icon: Gauge,
  },
  {
    title: "Escalabilidade",
    desc: "Arquitetura preparada para picos de tráfego e novos módulos sem retrabalho.",
    icon: Layers,
  },
  {
    title: "Segurança",
    desc: "Boas práticas OWASP, camadas de auth e observabilidade desde o primeiro deploy.",
    icon: ShieldCheck,
  },
  {
    title: "Automação",
    desc: "CI/CD, testes e integrações que reduzem erro humano e aceleram entregas.",
    icon: Bot,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative border-t border-white/5 bg-surface/40 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,123,255,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-sm uppercase tracking-widest text-accent-blue">
            Sobre a empresa
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Engenharia de produto, não só código
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Somos uma software house focada em resultados mensuráveis: tempo de
            carregamento, conversão e manutenção ao longo do tempo. Unimos design
            minimalista, automação e integrações para você vender, operar e
            escalar com tranquilidade.
          </p>
        </motion.div>

        <motion.ul
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {items.map(({ title, desc, icon: Icon }) => (
            <motion.li
              key={title}
              variants={item}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition hover:border-accent-green/30 hover:shadow-glow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-green/20 to-accent-blue/10 text-accent-green transition group-hover:scale-105 group-hover:text-accent-green">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
