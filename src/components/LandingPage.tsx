"use client";

import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { HeroStats } from "./HeroStats";
import { About } from "./About";
import { Products } from "./Products";
import { OurSystems } from "./OurSystems";
import { Features } from "./Features";
import { Testimonials } from "./Testimonials";
import { CTA } from "./CTA";
import { Footer } from "./Footer";
import { PageLoader } from "./PageLoader";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function LandingPage() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShowLoader(false), 1500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <PageLoader visible={showLoader} />
      <Navbar />
      <main>
        <Hero />
        <HeroStats />
        <About />
        <Products />
        <OurSystems />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
}
