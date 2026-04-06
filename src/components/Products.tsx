"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef } from "react";
import {
  Globe2,
  LayoutDashboard,
  Workflow,
  PlugZap,
} from "lucide-react";

const products = [
  {
    name: "Sistemas Web",
    desc: "Portais, SaaS e painéis administrativos com UX impecável e stack moderna.",
    icon: Globe2,
    gradient: "from-accent-green/30 to-emerald-500/10",
  },
  {
    name: "Dashboards Interativos",
    desc: "Visualização de dados em tempo real para decisões mais rápidas e claras.",
    icon: LayoutDashboard,
    gradient: "from-accent-blue/30 to-cyan-500/10",
  },
  {
    name: "Automações Empresariais",
    desc: "Fluxos que conectam ERP, CRM e comunicação — menos planilha, mais resultado.",
    icon: Workflow,
    gradient: "from-accent-green/20 to-accent-blue/20",
  },
  {
    name: "APIs e Integrações",
    desc: "Contratos estáveis, webhooks e microsserviços prontos para escalar.",
    icon: PlugZap,
    gradient: "from-violet-500/20 to-accent-blue/25",
  },
];

function ProductCard({
  name,
  desc,
  icon: Icon,
  gradient,
  index,
}: (typeof products)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rx = useSpring(rotateX, { stiffness: 300, damping: 28 });
  const ry = useSpring(rotateY, { stiffness: 300, damping: 28 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateX.set(py * -12);
    rotateY.set(px * 12);
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(0,255,127,0.12), transparent 55%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1200 }}
    >
      <motion.article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-shadow duration-300 hover:border-accent-green/35 hover:shadow-glow"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{ background: spotlight }}
        />
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${gradient} blur-3xl`}
        />
        <div
          className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent-green shadow-glow-sm"
          style={{ transform: "translateZ(40px)" }}
        >
          <Icon className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <h3
          className="relative text-xl font-semibold text-white"
          style={{ transform: "translateZ(24px)" }}
        >
          {name}
        </h3>
        <p
          className="relative mt-3 text-sm leading-relaxed text-zinc-400"
          style={{ transform: "translateZ(20px)" }}
        >
          {desc}
        </p>
      </motion.article>
    </motion.div>
  );
}

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="produtos"
      ref={sectionRef}
      className="relative py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(0,255,127,0.06),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-sm uppercase tracking-widest text-accent-green">
            O que entregamos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Produtos digitais com aparência de marca global
          </h2>
          <p className="mt-4 text-zinc-400">
            Cada linha de código pensada para conversão, clareza visual e
            evolução contínua do seu produto.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {products.map((p, i) => (
            <ProductCard key={p.name} {...p} index={i} />
          ))}
        </div>

        <motion.p
          className="mt-12 text-center text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <a
            href="#nossos-sistemas"
            className="font-medium text-accent-green transition hover:text-accent-green/85 hover:underline"
          >
            Conheça nossos sistemas próprios → QuizFlow, Exatas View, MyContabil
          </a>
        </motion.p>
      </div>
    </section>
  );
}
