import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import socialCover from "@/assets/altamash-social-share.jpg.asset.json";

import { ScrollProgress } from "@/components/ScrollProgress";
import { useBlueprintGrid } from "@/hooks/use-blueprint-grid";


import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Work } from "@/components/site/Work";
import { CaseStudies } from "@/components/site/CaseStudies";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { WhyItWorks } from "@/components/site/WhyItWorks";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { TestimonialQuote } from "@/components/site/TestimonialQuote";
import { Testimonials } from "@/components/site/Testimonials";
import { Services } from "@/components/site/Services";
import { Faq } from "@/components/site/Faq";
import { Contact, Footer } from "@/components/site/Contact";

const title = "ALTAMASH — Design Portfolio | YouTube Thumbnail Designer";
const description =
  "Explore ALTAMASH’s YouTube thumbnail design portfolio: cinematic visuals, Photoshop compositions and creative direction for documentary, tech and gaming creators.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://altamashportfolio.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:image", content: `https://altamashportfolio.lovable.app${socialCover.url}` },
      { name: "twitter:image", content: `https://altamashportfolio.lovable.app${socialCover.url}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
    ],
    links: [{ rel: "canonical", href: "https://altamashportfolio.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState("All");
  const blueprintRef = useBlueprintGrid();

  const selectChannel = (channel: string) => {
    setFilter(channel);
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative z-[2] min-h-screen bg-transparent">
      <ScrollProgress />
      <Nav />

      <main ref={blueprintRef} className="blueprint-sections relative z-[1] bg-transparent">
        <Hero />
        <TrustedBy onSelect={selectChannel} />
        <Work filter={filter} onFilterChange={setFilter} />
        <CaseStudies />
        <TestimonialQuote />
        <BeforeAfter />
        <WhyItWorks />
        <Process />
        <About />
        <Testimonials />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
