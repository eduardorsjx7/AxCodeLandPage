"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "./BrandLogo";

type PageLoaderProps = {
  visible: boolean;
};

export function PageLoader({ visible }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-grid-pattern bg-grid bg-[length:64px_64px] opacity-40" />
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative flex items-center justify-center px-10 py-6">
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-accent-green/35"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-1 rounded-xl bg-gradient-to-br from-accent-green/15 to-accent-blue/10 blur-lg"
                animate={{ opacity: [0.35, 0.8, 0.35] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <motion.div
                className="relative z-[1]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <BrandLogo priority />
              </motion.div>
            </div>
            <p className="text-sm tracking-[0.35em] text-zinc-500">
              CARREGANDO EXPERIÊNCIA
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
