import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { company } from "@/data/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MiniTestimonials from "@/components/MiniTestimonials";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get a free quote from ${company.shortName}. Call, text, or send us a message today.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" heading="Transform & Secure Your Space Today!" />

      <section className="bg-white py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary-darker" />
              <div>
                <p className="font-heading font-bold text-derivative-900">Call or text {company.contactPerson}</p>
                <a href={`tel:${company.phoneRaw}`} className="text-derivative-700 hover:text-primary">
                  {company.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-secondary-darker" />
              <div>
                <p className="font-heading font-bold text-derivative-900">Email</p>
                <a href={`mailto:${company.email}`} className="text-derivative-700 hover:text-primary">
                  {company.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-secondary-darker" />
              <div>
                <p className="font-heading font-bold text-derivative-900">Service Area</p>
                <p className="text-derivative-700">
                  {company.address.line1}
                  <br />
                  {company.address.city}, {company.address.state}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-secondary-darker" />
              <div>
                <p className="font-heading font-bold text-derivative-900">Hours</p>
                <p className="text-derivative-700">{company.hours}</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>

      <MiniTestimonials />
    </>
  );
}
