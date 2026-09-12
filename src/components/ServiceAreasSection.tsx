import Link from "next/link";
import { serviceAreas } from "@/data/site";
import { Container, SectionIntro } from "./ui";
import ScrollReveal from "./ScrollReveal";

export default function ServiceAreasSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <SectionIntro>Service Areas</SectionIntro>
          <h2 className="mb-2 font-heading text-3xl font-black text-derivative-900 md:text-4xl">
            We&apos;re here to help
          </h2>
          <p className="mx-auto max-w-xl font-body text-derivative-700">
            Proudly serving King of Prussia and the surrounding Pennsylvania & New Jersey suburbs.
          </p>
        </div>
        <ScrollReveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {serviceAreas.map((area, i) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group flex items-baseline gap-2 border-b border-derivative-100 py-2 text-sm text-derivative-700 hover:border-secondary hover:text-primary"
              >
                <span className="font-heading text-xs font-black text-secondary-darker/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {area.name}, {area.state}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
