/**
 * Base URL para metadata (Open Graph, metadataBase).
 * Ordem: VERCEL_URL → NEXT_PUBLIC_SITE_URL → localhost.
 */
export function getSiteUrl(): URL {
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    try {
      const withProtocol = /^https?:\/\//i.test(vercel)
        ? vercel
        : `https://${vercel}`;
      return new URL(withProtocol);
    } catch {
      /* continua */
    }
  }

  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return new URL("http://localhost:3000");
  }
  try {
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    return new URL(withProtocol);
  } catch {
    return new URL("http://localhost:3000");
  }
}
