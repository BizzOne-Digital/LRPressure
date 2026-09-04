import { Container } from "./ui";

export default function PageHero({
  eyebrow,
  heading,
  subheading,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-lighter pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container className="text-center">
        {eyebrow && (
          <span className="section-intro !text-secondary">{eyebrow}</span>
        )}
        <h1 className="font-heading text-3xl font-black text-white sm:text-4xl md:text-5xl">{heading}</h1>
        {subheading && (
          <p className="mx-auto mt-4 max-w-2xl font-body text-white/80">{subheading}</p>
        )}
      </Container>
    </section>
  );
}
