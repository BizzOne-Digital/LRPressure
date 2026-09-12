import type { Metadata } from "next";
import { coreValues, company } from "@/data/site";
import PageHero from "@/components/PageHero";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import ServicesGrid from "@/components/ServicesGrid";
import { Container, SectionIntro } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "Transforming homes with expert pressure washing — where excellence meets integrity.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        heading="Top-Tier Power Washing Services in King of Prussia"
        subheading="Transforming Homes with Expert Pressure Washing – Where Excellence Meets Integrity."
      />

      <section className="bg-white py-16 sm:py-24">
        <Container className="mx-auto max-w-3xl text-center">
          <SectionIntro>Our Story</SectionIntro>
          <h2 className="mb-6 font-heading text-3xl font-black text-derivative-900 md:text-4xl">
            Built from the ground up
          </h2>
          <div className="space-y-4 text-left font-body leading-relaxed text-derivative-700 sm:text-lg">
            <p>{company.founderStory}</p>
            <p>
              Founded in {company.founded}, {company.shortName} proudly serves King of Prussia and the
              surrounding Pennsylvania and New Jersey suburbs — combining hands-on experience with
              professional expertise to achieve pristine results on every property we touch.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-derivative-50 py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <SectionIntro>Core Values</SectionIntro>
            <h2 className="mb-10 font-heading text-3xl font-black text-derivative-900 md:mb-12 md:text-4xl">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {coreValues.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.06}>
                <div className="h-full rounded-dynamic bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <h3 className="font-heading text-lg font-bold text-primary">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-derivative-700">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <TeamSection />
      <ServicesGrid />

      <CTASection
        heading="Transform Your Home Today!"
        text="Boost your curb appeal now with our professional power washing services."
      />
    </>
  );
}
