import { Star } from "lucide-react";
import { featuredTestimonial } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

export default function FeaturedTestimonial() {
  return (
    <section className="relative flex w-full flex-col gap-4 overflow-hidden bg-primary px-6 py-24 sm:px-12">
      {/* subtle grain texture standing in for the reference site's background texture */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <svg
        viewBox="0 0 134 84"
        aria-hidden
        className="pointer-events-none absolute -bottom-4 right-4 z-0 h-32 w-32 fill-current text-primary-darker"
      >
        <path d="M104.303 0c8.853 0 16.015 3.186 21.488 9.557C131.264 15.93 134 24.097 134 34.063c0 25.323-17.464 55.302-52.393 89.937l-2.414-2.451c6.277-8.168 11.267-16.664 14.97-25.486 3.54-8.822 5.31-16.582 5.31-23.28 0-4.412-1.287-8.087-3.862-11.028-2.737-2.94-5.634-5.228-8.692-6.862-3.22-1.633-6.117-4.574-8.692-8.822-2.736-4.084-4.105-9.394-4.105-15.929 0-8.495 2.898-15.683 8.692-21.565C88.61 2.86 95.772 0 104.303 0zM29.697 0c9.014 0 16.257 3.186 21.73 9.557 5.312 6.372 7.968 14.54 7.968 24.506 0 26.303-17.626 56.282-52.876 89.937l-1.932-2.451c6.278-8.332 11.348-16.909 15.211-25.73 3.702-8.823 5.553-16.502 5.553-23.036 0-4.412-1.287-8.087-3.863-11.028-2.736-2.94-5.633-5.228-8.692-6.862-3.219-1.633-6.116-4.574-8.691-8.822C1.367 41.987 0 36.677 0 30.142 0 21.647 2.897 14.46 8.692 8.577 14.486 2.86 21.488 0 29.697 0z" />
      </svg>

      <ScrollReveal className="relative z-10 mx-auto max-w-3xl">
        <p className="line-clamp-6 font-body text-2xl font-medium text-white sm:text-3xl">&ldquo;{featuredTestimonial.text}&rdquo;</p>
        <div className="mt-10 flex items-center gap-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
            ))}
          </div>
          <p className="font-heading text-xl font-medium text-primary-contrast">{featuredTestimonial.name}</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
