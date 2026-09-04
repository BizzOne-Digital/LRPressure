"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { company, navLinks, services } from "@/data/site";
import { PrimaryButton, SecondaryButton } from "./ui";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      aria-label="Main Navigation"
      className="sticky top-0 left-0 right-0 z-30 bg-white shadow-sm"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-4 xl:px-0">
        <Link href="/" className="relative flex h-10 w-[151px] flex-shrink-0 items-center sm:h-12 sm:w-[181px]">
          <Image
            src="/images/logo.png"
            alt={company.legalName}
            fill
            priority
            sizes="181px"
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="inline-flex items-center gap-x-1.5 font-medium text-derivative-700 hover:text-primary"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full z-40 mt-3 w-56 overflow-hidden rounded-dynamic bg-primary/50 p-1 shadow-[0_20px_40px_rgba(4,6,8,0.2),0_8px_16px_rgba(4,6,8,0.15),inset_0_1px_0_rgba(238,244,246,0.2)] backdrop-blur-[32px] backdrop-saturate-200 backdrop-brightness-110"
                >
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block rounded-dynamic px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
                    >
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-medium text-derivative-700 hover:text-primary whitespace-nowrap">
              {link.label}
            </Link>
          ))}
          <div className="flex flex-shrink-0 items-center gap-3">
            <PrimaryButton href="/contact-us" className="px-4 py-3 text-sm">GET A FREE QUOTE</PrimaryButton>
            <SecondaryButton className="px-4 py-3 text-sm" />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-derivative-50 text-primary lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="ml-auto flex h-full w-[85%] max-w-sm flex-col gap-1 overflow-y-auto bg-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-heading text-xl font-black text-primary">{company.logoTop}</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="rounded-full bg-derivative-50 p-2">
                  <X className="h-5 w-5 text-primary" />
                </button>
              </div>

              <button
                className="flex items-center justify-between rounded-xl px-3 py-3 text-left text-lg font-semibold text-primary"
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-3"
                  >
                    {services.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="block py-2.5 text-derivative-700"
                        onClick={() => setMobileOpen(false)}>
                        {s.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-xl px-3 py-3 text-lg font-semibold text-primary"
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}

              <div className="mt-6 flex flex-col gap-3">
                <PrimaryButton href="/contact-us">GET A FREE QUOTE</PrimaryButton>
                <SecondaryButton />
                <a href={`tel:${company.phoneRaw}`} className="flex items-center justify-center gap-2 text-sm font-medium text-derivative-700">
                  <Phone className="h-4 w-4" /> {company.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
