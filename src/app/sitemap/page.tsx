import type { Metadata } from "next";
import Link from "next/link";
import { services, serviceAreas } from "@/data/site";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sitemap",
};

const general = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Thank you", href: "/thank-you" },
  { label: "Testimonials & Reviews", href: "/reviews" },
  { label: "Our Projects", href: "/projects" },
  { label: "Sitemap", href: "/sitemap" },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 font-heading text-lg font-bold text-derivative-900">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-derivative-700 hover:text-primary hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  const paAreas = serviceAreas.filter((a) => a.state === "PA").map((a) => ({ label: `${a.name}, PA`, href: `/service-areas/${a.slug}` }));
  const njAreas = serviceAreas.filter((a) => a.state === "NJ").map((a) => ({ label: `${a.name}, NJ`, href: `/service-areas/${a.slug}` }));

  return (
    <>
      <PageHero eyebrow="Sitemap" heading="Sitemap" />
      <section className="bg-white py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <LinkColumn title="General" links={general} />
          <LinkColumn title="Services" links={services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }))} />
          <LinkColumn title="Service Areas (PA)" links={paAreas} />
          <LinkColumn title="Service Areas (NJ)" links={njAreas} />
        </Container>
      </section>
    </>
  );
}
