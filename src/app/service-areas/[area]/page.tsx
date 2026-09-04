import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas, services, company } from "@/data/site";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Container } from "@/components/ui";
import { CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params;
  const found = serviceAreas.find((a) => a.slug === area);
  if (!found) return {};
  return {
    title: `Pressure Washing & Window Cleaning in ${found.name}, ${found.state}`,
    description: `${company.shortName} proudly serves ${found.name}, ${found.state} with house washing, roof washing, window cleaning, and pressure washing.`,
  };
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const found = serviceAreas.find((a) => a.slug === area);
  if (!found) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service Area"
        heading={`Pressure Washing & Window Cleaning in ${found.name}, ${found.state}`}
        subheading={`${company.shortName} proudly brings our five-star house washing, roof washing, and window cleaning services to ${found.name} and the surrounding area.`}
      />
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <h2 className="mb-8 text-center font-heading text-2xl font-black text-derivative-900 sm:text-3xl">
            Services available in {found.name}, {found.state}
          </h2>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-3 rounded-dynamic border border-derivative-100 p-4 hover:border-secondary"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary-darker" />
                <span className="font-medium text-derivative-900">{s.name}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        heading={`Ready to transform your ${found.name} property?`}
        text={`Call ${company.phoneDisplay} or request a free quote and we'll get you scheduled.`}
      />
    </>
  );
}
