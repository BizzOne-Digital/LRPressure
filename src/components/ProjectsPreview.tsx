import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Vinyl Siding Wash Removes Years of Green Mold Buildup",
    image: "/images/gallery/vinyl-siding-before-after.jpg",
  },
  {
    title: "Paver Patio Pressure Washing Brings Back True Color",
    image: "/images/gallery/patio-pavers-before-after.jpg",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-heading text-2xl font-semibold leading-9 text-black md:text-4xl">
            Explore Our <span className="highlight-word">Projects</span>
          </h2>
          <p className="font-body text-lg text-black md:text-xl">Discover where our projects have made an impact.</p>
        </div>

        <div className="w-full max-w-3xl space-y-5">
          {projects.map((project) => (
            <ScrollReveal key={project.title}>
              <Link
                href="/projects"
                className="group flex min-h-48 w-full flex-col overflow-hidden rounded-dynamic border border-derivative-100 transition-colors duration-200 hover:bg-derivative-50 md:flex-row"
              >
                <div className="relative min-h-72 w-full md:min-h-44 md:w-40 md:flex-shrink-0">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 160px" className="rounded-dynamic object-cover" />
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 p-5">
                  <h3 className="font-heading text-lg font-bold text-derivative-900">{project.title}</h3>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-secondary-darker transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <Link href="/projects" className="text-sm font-semibold text-primary underline underline-offset-4">
          View all projects
        </Link>
      </Container>
    </section>
  );
}
