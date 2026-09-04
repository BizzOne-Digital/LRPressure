import { CheckCircle2 } from "lucide-react";
import { Container, SectionIntro } from "./ui";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function BenefitsList({
  heading,
  benefits,
  image,
}: {
  heading: string;
  benefits: { title: string; description: string }[];
  image?: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className={image ? "grid gap-12 lg:grid-cols-2 lg:items-center" : undefined}>
        {image && (
          <ScrollReveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-dynamic">
              <Image src={image} alt={heading} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </ScrollReveal>
        )}
        <div>
          <SectionIntro>Why it matters</SectionIntro>
          <h2 className="mb-8 font-heading text-3xl font-black text-derivative-900 md:text-4xl">{heading}</h2>
          <div className="space-y-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.06} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-secondary-darker" />
                <div>
                  <h3 className="font-heading font-bold text-derivative-900">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-derivative-700">{b.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
