"use client";

import { Phone, MessageSquare, Mail } from "lucide-react";
import { company } from "@/data/site";

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 divide-x divide-primary/10 bg-secondary sm:hidden">
      <a href={`tel:${company.phoneRaw}`} className="flex flex-col items-center gap-1 py-3 text-secondary-contrast">
        <Phone className="h-5 w-5" />
        <span className="text-xs font-medium">Call</span>
      </a>
      <a href={`sms:${company.phoneRaw}`} className="flex flex-col items-center gap-1 py-3 text-secondary-contrast">
        <MessageSquare className="h-5 w-5" />
        <span className="text-xs font-medium">Text</span>
      </a>
      <a href={`mailto:${company.email}`} className="flex flex-col items-center gap-1 py-3 text-secondary-contrast">
        <Mail className="h-5 w-5" />
        <span className="text-xs font-medium">Email</span>
      </a>
    </div>
  );
}
