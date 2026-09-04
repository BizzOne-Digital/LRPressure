import { PrimaryButton, SecondaryButton, Container } from "./ui";
import ScrollReveal from "./ScrollReveal";

export default function CTASection({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-lighter py-16 sm:py-24">
      <Container className="text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-black text-white md:text-4xl">{heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-white/80">{text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/contact-us" className="bg-secondary text-secondary-contrast">
              GET A FREE QUOTE
            </PrimaryButton>
            <SecondaryButton className="border-white text-white" />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
