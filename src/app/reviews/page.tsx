import type { Metadata } from "next";
import { Star } from "lucide-react";
import Image from "next/image";
import { testimonials, featuredTestimonial, company } from "@/data/site";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Container } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description: `Read ${company.reviewCount}+ five-star Google reviews from ${company.shortName} customers.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Customer Reviews" heading={company.legalName} />
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <div className="flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <p className="flex items-center gap-2 font-heading text-xl font-bold text-derivative-900">
              {company.reviewCount}+ five-star Google reviews
              <Image src="/icons/google-g-logo.svg" alt="Google logo" width={22} height={22} />
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-dynamic bg-derivative-50 p-6 ring-1 ring-black/5">
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-derivative-700">&ldquo;{t.text}&rdquo;</p>
                  <p className="mt-4 font-heading text-sm font-bold text-primary">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16">
            <div className="mx-auto max-w-3xl rounded-dynamic bg-primary p-8 text-center text-primary-contrast sm:p-12">
              <p className="font-body text-lg leading-relaxed sm:text-xl">&ldquo;{featuredTestimonial.text}&rdquo;</p>
              <p className="mt-6 font-heading font-bold text-secondary">{featuredTestimonial.name}</p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
      <CTASection heading="Join our happy customers" text={`Get a free quote today and see why homeowners across the King of Prussia area trust ${company.shortName}.`} />
    </>
  );
}
