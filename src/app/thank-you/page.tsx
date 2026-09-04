import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PrimaryButton, SecondaryButton, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-lighter py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <CheckCircle2 className="h-16 w-16 text-secondary" />
        <h1 className="mt-6 font-heading text-4xl font-black text-white sm:text-5xl">Thank You</h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
          Appreciate you trusting our business for your needs. We will be in touch shortly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="/contact-us" className="bg-secondary text-secondary-contrast">
            GET A FREE QUOTE
          </PrimaryButton>
          <SecondaryButton className="border-white text-white" />
        </div>
        <Link href="/" className="mt-8 text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white">
          Return to Home
        </Link>
      </Container>
    </section>
  );
}
