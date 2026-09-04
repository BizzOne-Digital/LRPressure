import Link from "next/link";
import { MapPin, Mail, Globe } from "lucide-react";
import { company, footerLinks, serviceAreas } from "@/data/site";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gradient-to-b from-primary to-primary-darker">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <Container className="pb-8 pt-16 sm:pt-24">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="space-y-8">
            <strong className="font-heading block text-2xl leading-6 tracking-wide text-primary-contrast">
              {company.legalName}
            </strong>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${company.phoneRaw}`}
                className="text-sm text-primary-contrast hover:underline"
              >
                {company.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-1.5 text-sm text-primary-contrast hover:underline"
              >
                <Mail className="h-4 w-4" /> {company.email}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={company.website}
                className="flex items-center gap-1.5 text-sm text-primary-contrast hover:opacity-80"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" /> lrpowerwashing.com
              </a>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold leading-6 text-primary-contrast">
                  <MapPin className="h-4 w-4" /> {company.address.city}, {company.address.state}
                </h4>
                <address className="mt-2 not-italic text-sm leading-6 text-primary-contrast/90">
                  {company.address.line1}
                </address>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:col-span-2 lg:mt-0 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-primary-contrast">Company</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm leading-6 text-primary-contrast hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-primary-contrast">Services</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm leading-6 text-primary-contrast hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-primary-contrast">Areas Served</h3>
              <ul className="mt-6 grid max-h-64 grid-cols-2 gap-x-4 gap-y-3 overflow-y-auto pr-2 sm:max-h-72">
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link href={`/service-areas/${area.slug}`} className="text-sm leading-6 text-primary-contrast hover:underline">
                      {area.name}, {area.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-contrast/20 pt-8">
          <p className="text-xs leading-5 text-primary-contrast/70">
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
