"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/data/site";

type Errors = Partial<Record<"name" | "phone" | "email" | "address" | "service" | "message", string>>;

export default function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.phone.trim()) next.phone = "Phone number is required.";
    else if (!/^[\d\s()+-]{7,}$/.test(values.phone)) next.phone = "Enter a valid phone number.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.address.trim()) next.address = "Full address is required.";
    if (!values.service) next.service = "Please select a service.";
    if (!values.message.trim()) next.message = "Please tell us a bit about the job.";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    router.push("/thank-you");
  }

  function field(name: keyof typeof values) {
    return {
      value: values[name],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setValues((v) => ({ ...v, [name]: e.target.value })),
    };
  }

  const inputCls =
    "w-full rounded-xl border border-derivative-100 bg-white px-4 py-3 text-sm text-derivative-900 outline-none transition-colors focus:border-secondary-darker focus:ring-2 focus:ring-secondary/30";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-dynamic bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-derivative-900">
          Name <span className="text-red-500">*</span>
        </label>
        <input id="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={inputCls} {...field("name")} />
        {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-derivative-900">
            Phone <span className="text-red-500">*</span>
          </label>
          <input id="phone" type="tel" required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} className={inputCls} {...field("phone")} />
          {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-derivative-900">
            Email <span className="text-red-500">*</span>
          </label>
          <input id="email" type="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={inputCls} {...field("email")} />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="address" className="mb-1.5 block text-sm font-semibold text-derivative-900">
          Full Address <span className="text-red-500">*</span>
        </label>
        <input id="address" required aria-invalid={!!errors.address} aria-describedby={errors.address ? "address-error" : undefined} className={inputCls} {...field("address")} />
        {errors.address && <p id="address-error" className="mt-1 text-xs text-red-600">{errors.address}</p>}
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-derivative-900">
          Which services are you interested in? <span className="text-red-500">*</span>
        </label>
        <select id="service" required aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined} className={inputCls} {...field("service")}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.service && <p id="service-error" className="mt-1 text-xs text-red-600">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-derivative-900">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea id="message" rows={4} required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} className={inputCls} {...field("message")} />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="rounded-dynamic bg-primary px-6 py-3 font-medium text-primary-contrast shadow transition-all hover:-translate-y-0.5 disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
