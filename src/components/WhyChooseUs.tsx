import { Users, MapPin, CheckCircle2, Heart, Star, Clock, type LucideIcon } from "lucide-react";
import { whyChooseUs } from "@/data/site";
import { Container } from "./ui";
import ScrollReveal from "./ScrollReveal";

const icons: Record<string, LucideIcon> = { Users, MapPin, CheckCircle2, Heart, Star, Clock };

export default function WhyChooseUs() {
  return (
    <section className="bg-derivative-50 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-derivative-900 sm:text-4xl md:text-5xl">
            Why Choose <span className="highlight-word">Us</span>
          </h2>
          <p className="mt-3 text-lg font-semibold text-primary sm:text-xl">{whyChooseUs.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.features.map((feature, i) => {
            const Icon = icons[feature.icon];
            return (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <div className="h-full rounded-dynamic border border-primary/15 bg-white/60 p-8 text-left shadow-[0_8px_24px_rgba(0,0,0,0.07)] backdrop-blur-[40px] backdrop-saturate-200 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-dynamic bg-secondary">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-derivative-900">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-derivative-700">{feature.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
