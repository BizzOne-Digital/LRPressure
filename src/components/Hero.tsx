import Image from "next/image";
import { Star } from "lucide-react";
import { PrimaryButton, SecondaryButton, Container } from "./ui";
import { company } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-home.jpg"
          alt={`Hero image for ${company.legalName}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <Container className="relative py-32 md:py-44">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-dynamic bg-white/30 px-3 py-1.5 backdrop-blur-sm">
            <div className="flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-white">5 stars on Google</span>
            <Image src="/icons/google-g-logo.svg" alt="google logo" width={18} height={18} />
          </div>

          <h1 className="font-heading text-4xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl">
            Dirty Windows,
            <br />
            House, Driveway,
            <br />
            <span className="relative inline-block">
              Roof?
              <span className="absolute -bottom-2 left-0 h-1 w-2/3 bg-secondary" />
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-white/90 sm:text-lg">
            King of Prussia&apos;s top-rated pressure washing &amp; window cleaning company. Cleaner
            windows. Brighter exteriors. Like-new driveways. Our mission is simple: deliver reliable, affordable,
            professional exterior care that consistently exceeds your expectations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton href="/contact-us">GET A FREE QUOTE</PrimaryButton>
            <SecondaryButton className="border-white text-white" />
          </div>
        </div>
      </Container>
    </section>
  );
}
