"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const social = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com", label: "GitHub", icon: Github },
];

export function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-white/10 bg-black py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center md:text-left">
            <BrandLogo className="mx-auto h-8 w-auto max-w-[160px] md:mx-0 sm:h-10 sm:max-w-[200px] lg:h-11 lg:max-w-[240px]" />
            <p className="mx-auto mt-4 max-w-sm text-center text-sm text-zinc-500 md:mx-0 md:text-left">
              Software house especializada em produtos digitais de alto
              desempenho. Aracaju-SE — atendimento remoto para todo o Brasil.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent-blue" />
                <a
                  href="mailto:axcodesuport@gmail.com"
                  className="break-all transition hover:text-accent-green"
                >
                  axcodesuport@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-blue" />
                <span>Aracaju-SE</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Redes
            </p>
            <div className="mt-4 flex gap-3">
              {social.map(({ href, label, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-accent-green/40 hover:text-accent-green"
                  whileHover={{ y: -2 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-zinc-600">
          <p>
            © {new Date().getFullYear()} AxCode. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
