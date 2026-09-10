import Image from "next/image";
import { team } from "@/data/site";
import { Container, SectionIntro } from "./ui";
import ScrollReveal from "./ScrollReveal";

export default function TeamSection() {
  return (
    <section className="bg-derivative-50 py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <SectionIntro>Meet the crew</SectionIntro>
          <h2 className="mb-2 font-heading text-3xl font-black text-derivative-900 md:text-4xl">
            Our Awesome Team
          </h2>
          <p className="mx-auto max-w-xl font-body text-derivative-700">We are a team of professionals.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {team.map((member, i) => (
            <ScrollReveal key={`${member.name}-${i}`} delay={i * 0.06} className="text-center">
              <div className="mx-auto flex aspect-square w-full items-center justify-center overflow-hidden rounded-dynamic bg-primary transition-transform duration-500 hover:scale-105">
                {member.photo ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <span className="font-heading text-3xl font-black text-secondary sm:text-4xl">{member.initials}</span>
                )}
              </div>
              <p className="mt-3 font-heading font-bold text-derivative-900">{member.name}</p>
              {member.role && <p className="text-xs text-derivative-700">{member.role}</p>}
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
