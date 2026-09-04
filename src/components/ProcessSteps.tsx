import { Container, SectionIntro } from "./ui";
import ScrollReveal from "./ScrollReveal";

export default function ProcessSteps({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <section className="bg-derivative-50 py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <SectionIntro>How it works</SectionIntro>
          <h2 className="mb-10 font-heading text-3xl font-black text-derivative-900 md:mb-12 md:text-4xl">
            Our Simple Process
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08}>
              <div className="relative rounded-dynamic bg-white p-6 shadow-sm ring-1 ring-black/5">
                <span className="font-heading text-4xl font-black text-secondary/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-derivative-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-derivative-700">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
