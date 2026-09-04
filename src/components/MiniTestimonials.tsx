import { Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { Container, SectionIntro } from "./ui";
import ScrollReveal from "./ScrollReveal";

export default function MiniTestimonials() {
  return (
    <section className="bg-derivative-50 py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <SectionIntro>Testimonials</SectionIntro>
          <h2 className="mb-10 font-heading text-3xl font-black text-derivative-900 md:text-4xl">
            What our customers say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-dynamic bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-derivative-700">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 font-heading text-sm font-bold text-primary">{t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
