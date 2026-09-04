import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, company } from "@/data/site";
import PageHero from "@/components/PageHero";
import BenefitsList from "@/components/BenefitsList";
import ProcessSteps from "@/components/ProcessSteps";
import MiniTestimonials from "@/components/MiniTestimonials";
import FAQList from "@/components/FAQList";
import CTASection from "@/components/CTASection";
import { Container } from "@/components/ui";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.heroHeading,
    description: service.heroSubheading,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="Services" heading={service.heroHeading} subheading={service.heroSubheading} />

      {service.intro && (
        <section className="bg-white py-16">
          <Container>
            <p className="mx-auto max-w-3xl text-center font-body text-lg leading-relaxed text-derivative-700">
              {service.intro}
            </p>
          </Container>
        </section>
      )}

      <BenefitsList heading={`Why Choose Our ${service.name}?`} benefits={service.benefits} image={service.image} />

      {service.differentiators && (
        <BenefitsList heading={`Why ${company.shortName}?`} benefits={service.differentiators} />
      )}

      <ProcessSteps steps={service.process} />

      <MiniTestimonials />

      <FAQList
        heading={`${service.name} FAQs`}
        subheading={`Your questions about ${service.name.toLowerCase()}, answered by ${company.shortName}.`}
        faqs={service.faqs}
      />

      <CTASection heading={service.finalCtaHeading} text={service.finalCtaText} />
    </>
  );
}
