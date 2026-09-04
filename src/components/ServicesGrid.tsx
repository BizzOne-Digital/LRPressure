import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/site";
import { Container, SectionIntro } from "./ui";
import ScrollReveal from "./ScrollReveal";

export default function ServicesGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <SectionIntro>Services</SectionIntro>
          <h2 className="-mt-2 mb-10 font-heading text-3xl font-black text-derivative-900 md:mb-12 md:text-4xl">
            Our Premium <span className="highlight-word">Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.06}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-52 overflow-hidden rounded-dynamic border-2 border-transparent md:h-64 md:border-4"
              >
                <Image
                  src={service.image}
                  alt={`${service.name} image`}
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="scale-110 object-cover transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:blur-[2px]"
                />
                <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center bg-derivative-900/20 px-8 py-6 text-center transition-colors group-hover:bg-derivative-900/30">
                  <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">{service.name}</h3>
                  <p className="mt-2 hidden text-sm text-white/90 sm:block">{service.cardDescription}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
