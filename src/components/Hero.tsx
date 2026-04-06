"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { ParticleBackground } from "./ParticleBackground";
import { BrandLogo } from "./BrandLogo";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);
  const reduceMotion = useReducedMotion();

  const tiltX = useMotionValue(2);
  const tiltY = useMotionValue(-4);
  const rotateX = useSpring(tiltX, { stiffness: 220, damping: 22, mass: 0.6 });
  const rotateY = useSpring(tiltY, { stiffness: 220, damping: 22, mass: 0.6 });

  const onLogoMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(py * -8 + 2);
    tiltY.set(px * 10 - 4);
  };

  const onLogoLeave = () => {
    tiltX.set(2);
    tiltY.set(-4);
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,255,127,0.12),transparent),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(0,123,255,0.08),transparent)]" />
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <ParticleBackground />
      </motion.div>
      <div className="absolute inset-0 bg-grid-pattern bg-grid bg-[length:64px_64px] opacity-[0.35]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-12 sm:px-6 xl:grid-cols-[1fr_minmax(0,0.85fr)] xl:gap-12 lg:px-8 lg:pt-20">
        <div className="flex min-w-0 flex-col justify-center">
        <motion.h1
          className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl 2xl:text-7xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,255,127,0.15)]">
            Transformamos ideias em soluções digitais escaláveis
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          Da arquitetura ao deploy: construímos produtos web rápidos, seguros e
          prontos para crescer com o seu negócio — com a estética de uma startup
          global e a solidez de engenharia enterprise.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
        >
          <motion.a
            href="#contato"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-green to-emerald-400 px-8 py-4 text-base font-semibold text-black shadow-glow sm:w-auto"
            whileHover={{ scale: 1.03, boxShadow: "0 0 48px rgba(0,255,127,0.35)" }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar orçamento
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
          </motion.a>
          <motion.a
            href="#produtos"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:border-accent-blue/40 hover:bg-accent-blue/10 hover:text-white sm:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver produtos
          </motion.a>
        </motion.div>

        </div>

        <motion.div
          className="relative mx-auto flex w-full max-w-[760px] justify-center [perspective:1800px] xl:col-start-2 xl:row-start-1 xl:mx-0 xl:w-full xl:max-w-none xl:self-center xl:justify-center"
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[clamp(260px,52vw,500px)] w-[clamp(340px,72vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/16 blur-[120px]"
            aria-hidden
          />
          <motion.div
            onMouseMove={onLogoMove}
            onMouseLeave={onLogoLeave}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative z-[1] flex aspect-[16/10] w-full max-w-[min(100%,760px)] items-center justify-center"
          >
            <div
              className="absolute left-1/2 top-[78%] h-20 w-[64%] -translate-x-1/2 rounded-full bg-black/45 blur-2xl"
              style={{ transform: "translateZ(-60px)" }}
              aria-hidden
            />
            <motion.div
              className="absolute h-[clamp(220px,48vw,500px)] w-[clamp(280px,62vw,620px)] rounded-full border border-accent-blue/30"
              style={{ transform: "translateZ(-14px) rotateX(70deg)" }}
              animate={{ rotateZ: [0, 360] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
            <motion.div
              className="absolute h-[clamp(200px,42vw,430px)] w-[clamp(250px,54vw,540px)] rounded-full border border-accent-green/35"
              style={{ transform: "translateZ(4px) rotateX(68deg) rotateY(14deg)" }}
              animate={{ rotateZ: [360, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute h-[clamp(180px,36vw,360px)] w-[clamp(220px,46vw,460px)] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.14),rgba(255,255,255,0.04)_46%,transparent_74%)]"
              style={{ transform: "translateZ(-10px)" }}
              aria-hidden
            />
            <div
              className="relative z-[2] flex h-full items-center justify-center"
              style={{ transform: "translateZ(52px)" }}
            >
              <div
                className="pointer-events-none absolute h-[250px] w-[250px] rounded-full bg-accent-green/35 blur-[88px] sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px]"
                aria-hidden
              />
              <BrandLogo
                priority
                className="mx-auto h-28 w-auto max-w-[min(92vw,620px)] sm:h-36 sm:max-w-[min(92vw,700px)] lg:h-44 lg:max-w-[min(88vw,760px)] xl:h-52"
                sizes="(max-width: 640px) 620px, (max-width: 1024px) 700px, 760px"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
