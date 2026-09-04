import { Container, SectionIntro } from "./ui";
import ScrollReveal from "./ScrollReveal";

export default function FAQList({
  heading,
  subheading,
  faqs,
}: {
  heading: string;
  subheading: string;
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <SectionIntro>FAQs</SectionIntro>
          <h2 className="mb-2 font-heading text-2xl font-bold text-primary-darker sm:text-3xl">{heading}</h2>
          <p className="font-body text-xl text-derivative-700">{subheading}</p>
        </div>
        <ul className="mx-auto mt-0 max-w-2xl sm:mt-6">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} delay={i * 0.04}>
              <li className="relative flex items-center justify-between gap-4 border-b py-8 sm:gap-8">
                <span className="font-heading text-3xl font-black opacity-10 sm:text-6xl" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="grow">
                  <strong className="mb-2 block font-heading text-xl tracking-wide">{faq.question}</strong>
                  <p className="font-body text-derivative-700">{faq.answer}</p>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
