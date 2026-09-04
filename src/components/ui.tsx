import Link from "next/link";
import clsx from "clsx";
import { Phone } from "lucide-react";
import { company } from "@/data/site";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("mx-auto max-w-7xl px-4 sm:px-6 xl:px-0", className)}>{children}</div>;
}

const ctaBase =
  "rounded-dynamic inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-3 text-sm sm:text-base font-medium shadow transition-all duration-200 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5 focus:outline-none focus:ring";

export function PrimaryButton({ href, className, children }: { href?: string; className?: string; children: React.ReactNode }) {
  const cls = clsx(ctaBase, "border-none bg-primary text-primary-contrast", className);
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls}>{children}</button>;
}

export function SecondaryButton({ href = `tel:${company.phoneRaw}`, className, children = "Call us" }: { href?: string; className?: string; children?: React.ReactNode }) {
  return (
    <a href={href} className={clsx(ctaBase, "border border-primary bg-transparent text-primary", className)}>
      <Phone className="h-4 w-4" aria-hidden />
      {children}
    </a>
  );
}

export function SectionIntro({ children }: { children: React.ReactNode }) {
  return <span className="section-intro">{children}</span>;
}
