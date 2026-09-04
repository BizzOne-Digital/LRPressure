import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Container, SectionIntro } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Project Showcase",
  description: `See real ${company.shortName} project transformations.`,
};

const projects = [
  {
    title: "Vinyl Siding Wash Removes Years of Green Mold Buildup",
    image: "/images/gallery/vinyl-siding-before-after.jpg",
  },
  {
    title: "Paver Patio Pressure Washing Brings Back True Color",
    image: "/images/gallery/patio-pavers-before-after.jpg",
  },
  {
    title: "Algae-Covered Walkway Restored to Like-New Concrete",
    image: "/images/gallery/concrete-walkway-before-after.jpg",
  },
  {
    title: "Stucco Chimney Soft Wash Eliminates Black Staining",
    image: "/images/gallery/stucco-chimney-before-after.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Showcase" heading="Our Projects" />
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <SectionIntro>Recent Work</SectionIntro>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.08}>
                <div className="overflow-hidden rounded-dynamic shadow-sm ring-1 ring-black/5">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-derivative-900">{project.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection heading="Ready for your own transformation?" text={`Get a free quote and see the ${company.shortName} difference for yourself.`} />
    </>
  );
}
