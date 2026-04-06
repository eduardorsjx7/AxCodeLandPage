"use client";

import Image from "next/image";

/** Dimensões naturais do WebP em `public/images/axcode-logo.webp` (regenerar com `npm run assets:logo`). */
export const BRAND_LOGO = {
  src: "/images/axcode-logo.webp",
  width: 480,
  height: 372,
} as const;

/**
 * Escala padrão — mesma da navbar (e do menu mobile): use em footer, CTA, loader, etc.
 */
export const BRAND_LOGO_NAV_CLASS =
  "h-10 w-auto max-w-[200px] sm:h-11 sm:max-w-[240px]";
export const BRAND_LOGO_NAV_SIZES =
  "(max-width: 768px) 180px, 240px";

const logoShadow =
  "drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] drop-shadow-[0_0_20px_rgba(0,255,127,0.1)]";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({
  className = BRAND_LOGO_NAV_CLASS,
  priority = false,
  sizes = BRAND_LOGO_NAV_SIZES,
}: BrandLogoProps) {
  return (
    <Image
      src={BRAND_LOGO.src}
      alt="AxCode — Software house"
      width={BRAND_LOGO.width}
      height={BRAND_LOGO.height}
      className={`w-auto shrink-0 object-contain object-center ${logoShadow} ${className}`}
      priority={priority}
      sizes={sizes}
    />
  );
}
