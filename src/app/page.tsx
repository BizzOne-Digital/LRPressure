import Hero from "@/components/Hero";
import PricingOffers from "@/components/PricingOffers";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import FeaturedTestimonial from "@/components/FeaturedTestimonial";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PricingOffers />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <TeamSection />
      <ProjectsPreview />
      <ServiceAreasSection />
      <FeaturedTestimonial />
      <CTASection
        heading="Transform Your Home Today"
        text="Revitalize your space now—schedule your power washing appointment and witness outstanding results!"
      />
    </>
  );
}
