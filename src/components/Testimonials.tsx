"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, company } from "@/data/site";
import { Container, SectionIntro } from "./ui";
import ScrollReveal from "./ScrollReveal";

function Stars() {
  return (
    <div className="flex gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const perPage = 3;
  const pageCount = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(index * 1, index * 1 + perPage).length === perPage
    ? testimonials.slice(index * 1, index * 1 + perPage)
    : [...testimonials.slice(index * 1), ...testimonials.slice(0, perPage - (testimonials.length - index * 1))];

  return (
    <section className="bg-derivative-50 py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <SectionIntro>Testimonials</SectionIntro>
          <h2 className="mb-2 font-heading text-3xl font-black text-derivative-900 md:text-4xl">
            Real experiences, real results
          </h2>
          <p className="mx-auto max-w-xl font-body text-derivative-700">
            Hear from locals who trust {company.shortName}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {visible.map((t, i) => (
            <ScrollReveal key={`${t.name}-${index}-${i}`} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-dynamic bg-white p-6 shadow-sm ring-1 ring-black/5">
                <Stars />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-derivative-700">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 font-heading text-sm font-bold text-primary">{t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonials"
            onClick={() => setIndex((i) => (i - 1 + pageCount) % pageCount)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow hover:bg-derivative-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial page ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-primary/20"}`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonials"
            onClick={() => setIndex((i) => (i + 1) % pageCount)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow hover:bg-derivative-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-sm font-medium">
          <a href="/reviews" className="text-primary underline underline-offset-4">See all reviews</a>
          <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
            Leave us a review
          </a>
        </div>

      </Container>
    </section>
  );
}
