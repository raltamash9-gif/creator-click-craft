import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { motion, useScroll, useSpring } from "motion/react";

import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Work } from "@/components/site/Work";
import { CaseStudies } from "@/components/site/CaseStudies";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { WhyItWorks } from "@/components/site/WhyItWorks";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Services } from "@/components/site/Services";
import { Faq } from "@/components/site/Faq";
import { Contact, Footer } from "@/components/site/Contact";

const title = "Altar Studio — Cinematic YouTube Thumbnail Design";
const description =
  "Thumbnail design and creative direction for documentary, gaming, tech and education YouTube creators. Cinematic, high-converting thumbnails that earn the click.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState("All");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.3 });

  const selectChannel = (channel: string) => {
    setFilter(channel);
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[110] h-[3px] origin-left bg-accent"
      />
      <div aria-hidden className="film-grain" />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <TrustedBy onSelect={selectChannel} />
        <Work filter={filter} onFilterChange={setFilter} />
        <CaseStudies />
        <BeforeAfter />
        <WhyItWorks />
        <Process />
        <Testimonials />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
