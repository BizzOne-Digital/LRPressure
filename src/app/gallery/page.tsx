import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import GalleryGrid, { GalleryImage } from "@/components/GalleryGrid";
import { company } from "@/data/site";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Explore our gallery: witness the power of transformation with ${company.shortName}.`,
};

const images: GalleryImage[] = [
  { src: "/images/gallery/vinyl-siding-before-after.jpg", alt: "Vinyl siding house washing before and after" },
  { src: "/images/gallery/patio-pavers-before-after.jpg", alt: "Paver patio pressure washing before and after" },
  { src: "/images/gallery/concrete-walkway-before-after.jpg", alt: "Concrete walkway pressure washing before and after" },
  { src: "/images/gallery/stucco-chimney-before-after.jpg", alt: "Stucco chimney soft washing before and after" },
  { src: "/images/services/exterior-window-cleaning.jpg", alt: "Exterior window cleaning results" },
  { src: "/images/services/roof-washing.jpeg", alt: "Roof washing results" },
  { src: "/images/services/christmas-light-installation.jpeg", alt: "Christmas light installation" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        heading="Gallery"
        subheading={`Explore our gallery: witness the power of transformation with ${company.shortName}.`}
      />
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <GalleryGrid images={images} />
        </Container>
      </section>
      <CTASection
        heading="Connect With Us Today"
        text="Reach out and discover how we can transform your home."
      />
    </>
  );
}
