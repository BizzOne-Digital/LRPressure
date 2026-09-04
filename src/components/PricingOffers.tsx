import { Check, X } from "lucide-react";
import { pricingGroups, company } from "@/data/site";
import { Container, PrimaryButton } from "./ui";
import ScrollReveal from "./ScrollReveal";

export default function PricingOffers() {
  return (
    <section className="bg-white py-20 sm:py-28">
      {pricingGroups.map((group, gi) => (
        <Container key={group.title} className={gi > 0 ? "mt-24 sm:mt-32" : undefined}>
          <div className="mx-auto max-w-3xl text-center">
            {gi === 0 && (
              <span className="mb-5 inline-block rounded-dynamic border border-primary/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                {company.shortName}
              </span>
            )}
            <p className="text-lg font-semibold text-primary sm:text-xl">{group.subtitle}</p>
            <h2 className="mt-2 font-heading text-3xl font-black uppercase tracking-wide text-derivative-900 sm:text-4xl md:text-5xl">
              {group.title} <span className="highlight-word">{group.highlight}</span>
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 items-start gap-6 sm:grid-cols-3">
            {group.plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.08}>
                <div
                  className={`relative h-full rounded-dynamic border p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.2)] ${
                    plan.featured
                      ? "-translate-y-3 border-primary/50 bg-derivative-100 shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:-translate-y-5"
                      : "border-primary/15 bg-derivative-50"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-dynamic bg-primary px-4 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-white">
                      Most Popular
                    </span>
                  )}
                  <p className="mt-3 font-heading text-base font-extrabold uppercase tracking-wide text-primary">{plan.name}</p>
                  {plan.per && <p className="mt-1 text-xs font-bold uppercase tracking-wide text-derivative-700">{plan.per}</p>}
                  <p className="mt-4 font-heading text-4xl font-black leading-none text-derivative-900">{plan.discount}</p>
                  <p className="mb-8 mt-1 text-xs font-bold uppercase tracking-wide text-derivative-700">Per Cleaning</p>
                  <ul className="mb-8 space-y-0 text-left">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3 border-b border-derivative-400/20 py-2.5 text-sm last:border-b-0">
                        <span
                          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                            f.included ? "bg-primary/10 text-primary" : "bg-derivative-400/10 text-derivative-400"
                          }`}
                        >
                          {f.included ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                        </span>
                        <span className={f.included ? "text-derivative-900" : "text-derivative-400 line-through"}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <PrimaryButton href="/contact-us" className="w-full text-xs tracking-wide">
                    GET YOUR QUOTE
                  </PrimaryButton>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      ))}
    </section>
  );
}
