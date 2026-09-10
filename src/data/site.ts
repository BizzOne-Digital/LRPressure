// Street address below is still a placeholder (none was provided) — update it once
// LR Pressure Washing has a real business address to publish. Everything else here
// is the real business's own details.
export const company = {
  legalName: "LR Pressure Washing",
  shortName: "LR Pressure Washing",
  logoTop: "LR",
  logoBottom: "PRESSURE WASHING",
  contactPerson: "Luis",
  phoneDisplay: "(267) 980-4171",
  phoneRaw: "+12679804171",
  email: "lramirezphilly1@gmail.com",
  website: "https://www.lrpowerwashing.com",
  // No fixed street address published (mobile service) — city/state describe the service area.
  address: {
    line1: "Serving the Philadelphia metro area",
    city: "Philadelphia",
    state: "PA",
    zip: "",
  },
  hours: "Monday – Sunday: 8:00 AM – 8:00 PM",
  facebook: "https://www.lrpowerwashing.com",
  founded: 2020,
  founderStory:
    "Our mission is to provide reliable, affordable, and professional pressure washing and exterior care services that consistently exceed customer expectations. We strive to build long-term relationships with our clients by delivering exceptional service, transparent pricing, and outstanding results on every project—no matter the size.",
  reviewCount: 335,
};

export const navLinks = [
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
];

export type Service = {
  slug: string;
  name: string;
  cardDescription: string;
  heroHeading: string;
  heroSubheading: string;
  image: string;
  intro?: string;
  benefits: { title: string; description: string }[];
  differentiators?: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  finalCtaHeading: string;
  finalCtaText: string;
};

export const services: Service[] = [
  {
    slug: "house-washing",
    name: "House Washing",
    cardDescription: "Restore your home's curb appeal with our safe, thorough wash.",
    heroHeading: "House Washing Services",
    heroSubheading: "Revitalize Your Home Today! Boost curb appeal with our expert House Washing.",
    image: "/images/services/house-washing.jpg",
    benefits: [
      { title: "Safe & Thorough Cleaning", description: "We use gentle soft-washing techniques that remove dirt without damaging your siding." },
      { title: "Environmentally Friendly", description: "Our biodegradable cleaning solutions are safe for your family, pets, and landscaping." },
      { title: "Customer Satisfaction", description: "We take a client-first approach, keeping you informed every step of the way." },
    ],
    process: [
      { title: "Tailored Consultation", description: "We begin with a discussion to understand your home's specific requirements." },
      { title: "Custom Scheduling & Planning", description: "Once we know your needs, our team sets an appointment that fits your schedule." },
      { title: "Precision House Washing", description: "Our trained professionals use advanced pressure washing techniques to thoroughly clean your home." },
      { title: "Quality Assurance & Follow-Up", description: "After washing, we perform a detailed inspection to confirm cleaning perfection." },
    ],
    faqs: [
      { question: "What is house washing?", answer: "House washing is a thorough cleaning process for the exterior of your home. It removes dirt, grime, mold, and other unsightly stains to restore and boost your home's curb appeal." },
      { question: "Why should I choose LR Pressure Washing for house washing?", answer: "With our skilled team and the latest equipment, we're dedicated to delivering excellent results. We've built our reputation in Philadelphia and the surrounding suburbs through our focus on customer satisfaction and effective, professional service." },
      { question: "Will house washing damage my siding or windows?", answer: "No, our techniques are designed to be gentle yet effective. We use the right pressure and cleaning solutions to clean surfaces without causing harm." },
      { question: "How often should I have my house washed?", answer: "It's generally recommended to wash your house once a year to prevent the buildup of dirt and algae, especially in damp areas." },
      { question: "Do you offer any guarantees?", answer: "Yes, your satisfaction is guaranteed. If you're not happy with the results, we'll come back and make it right." },
      { question: "How do I schedule a house washing appointment?", answer: "You can book directly through our website or call us at (267) 980-4171 to schedule now." },
    ],
    finalCtaHeading: "Revitalize Your Home Today!",
    finalCtaText: "Call (267) 980-4171 to schedule now!",
  },
  {
    slug: "roof-washing",
    name: "Roof Washing",
    cardDescription: "Ensure a clean, safe, and long-lasting roof effortlessly.",
    heroHeading: "Professional Roof Washing Services",
    heroSubheading: "Offering exceptional roof washing solutions, our team is committed to providing top-quality service for all your power washing needs.",
    image: "/images/services/roof-washing.jpeg",
    intro: "Roof Washing - Enhance, Protect, and Preserve. Our soft washing technique and eco-friendly solutions safely remove algae, moss, and stains without damaging your shingles.",
    benefits: [
      { title: "Extended Roof Life", description: "Regular cleaning prevents decay and extends the lifespan of your roof, protecting your investment." },
      { title: "Improved Curb Appeal", description: "A clean roof boosts the overall appearance of your home and its resale value." },
      { title: "Healthier Home Environment", description: "Removing algae and mold prevents spores from entering your home and affecting air quality." },
    ],
    differentiators: [
      { title: "Expertise", description: "Years of hands-on roof washing experience across the Philadelphia metro area." },
      { title: "Local Understanding", description: "We know how the local climate affects roofs in our area." },
      { title: "Community Trust", description: "Hundreds of five-star reviews from neighbors just like you." },
      { title: "Reliable Service", description: "On-time, communicative, and thorough from start to finish." },
    ],
    process: [
      { title: "Detailed Roof Assessment and Consultation", description: "We inspect your roof and discuss the best approach for your home." },
      { title: "Convenient Scheduling and Customized Planning", description: "We build a plan and schedule that works for you." },
      { title: "Expert Cleaning and Inspection", description: "Our team safely removes algae, moss, and stains using soft washing." },
      { title: "Quality Assurance and Review", description: "We do a final walkthrough to confirm the results meet our standards." },
    ],
    faqs: [
      { question: "Will roof washing damage my shingles?", answer: "No. We use a low-pressure soft washing method specifically designed to protect shingles while removing algae and grime." },
      { question: "How often should my roof be washed?", answer: "Most homes benefit from a roof washing every 1-2 years, depending on tree coverage and moisture." },
      { question: "Do you work on all roof types?", answer: "Yes, we safely clean asphalt shingle, tile, and metal roofs." },
      { question: "How long does roof washing take?", answer: "Most residential roofs take a few hours from setup to final rinse." },
      { question: "Why hire a professional instead of DIY?", answer: "Professional equipment and soft-washing know-how protect your roof and your safety while climbing." },
      { question: "Will it actually improve my roof's condition?", answer: "Yes. Removing algae and moss buildup helps prevent premature shingle deterioration." },
    ],
    finalCtaHeading: "Revitalize Your Roof Today!",
    finalCtaText: "Call (267) 980-4171 to schedule now!",
  },
  {
    slug: "exterior-window-cleaning",
    name: "Exterior Window Cleaning",
    cardDescription: "Crystal-clear windows without streaks, enhancing curb appeal effortlessly.",
    heroHeading: "Professional Exterior Window Cleaning Services",
    heroSubheading: "Offering exceptional exterior window cleaning solutions, our team is committed to providing top-quality service for all your power washing needs.",
    image: "/images/services/exterior-window-cleaning.jpg",
    benefits: [
      { title: "Aesthetic Enhancement", description: "Spotless windows boost your property's appearance, increasing its aesthetic appeal." },
      { title: "Long-Term Protection", description: "Regular cleaning preserves window longevity by preventing glass degradation and mold growth." },
      { title: "Healthier Environment", description: "Removing pollen and dust enhances the air quality around your home." },
    ],
    process: [
      { title: "Personalized Consultation", description: "We begin with a personalized consultation to understand your specific window cleaning needs." },
      { title: "Convenient Scheduling", description: "We coordinate a time that suits your schedule and our availability." },
      { title: "Expert Cleaning Execution", description: "Our skilled team uses eco-friendly cleaning solutions and modern equipment to meticulously clean your windows." },
      { title: "Final Inspection and Satisfaction Guarantee", description: "We conduct a final inspection to ensure impeccable, streak-free results." },
    ],
    faqs: [
      { question: "What's included in exterior window cleaning?", answer: "We clean glass, frames, sills, and screens on the exterior of your home." },
      { question: "Is it safe around plants and landscaping?", answer: "Yes, we take care to protect your landscaping and use safe cleaning solutions." },
      { question: "How often should exterior windows be cleaned?", answer: "Most homeowners schedule exterior cleaning twice a year for the best results." },
      { question: "Can you clean windows on tall buildings?", answer: "Yes, our team is equipped to safely reach second and third story windows." },
      { question: "How long does the service take?", answer: "Most homes are completed within a few hours depending on the number of windows." },
      { question: "What makes you different?", answer: "Our attention to detail and streak-free guarantee set us apart from the competition." },
    ],
    finalCtaHeading: "Transform Your Home Today!",
    finalCtaText: "Experience pristine windows now. Call (267) 980-4171 to book your exterior window cleaning.",
  },
  {
    slug: "interior-window-cleaning",
    name: "Interior Window Cleaning",
    cardDescription: "Achieve pristine windows for a brighter, clutter-free indoor atmosphere.",
    heroHeading: "Professional Interior Window Cleaning Services",
    heroSubheading: "Offering exceptional interior window cleaning solutions, our team is committed to providing top-quality service for all your power washing needs.",
    image: "/images/services/interior-window-cleaning.jpg",
    benefits: [
      { title: "Brighter Living Spaces", description: "Enjoy brighter living spaces with more natural sunlight streaming through." },
      { title: "Increased Curb Appeal", description: "Beautifully clean windows enhance your home inside and out." },
      { title: "Trusted Team", description: "We value customer satisfaction, open communication, and reliability." },
      { title: "Safe Cleaning Method", description: "A cleaning process that respects your home, belongings, and the environment." },
    ],
    process: [
      { title: "Personalized Consultation and Estimate", description: "A tailored consultation evaluating your unique window cleaning needs." },
      { title: "Convenient Scheduling and Preparation", description: "We schedule a service date and prepare eco-friendly tools in advance." },
      { title: "Meticulous Cleaning Service", description: "Professional cleaning from the inside with a streak-free finish." },
      { title: "Final Inspection and Customer Approval", description: "A quality inspection and walkthrough alongside you." },
    ],
    faqs: [
      { question: "What makes your service stand out?", answer: "Expertise and dedication to delivering streak-free, crystal-clear views." },
      { question: "How often should interior windows be cleaned?", answer: "At least twice a year to maintain their cleanliness and clarity." },
      { question: "How should I prepare before you arrive?", answer: "Ensure access to windows is clear and any fragile items nearby are removed." },
      { question: "How do you prevent making a mess indoors?", answer: "Our team is trained to leave your space exactly as we found it." },
      { question: "Do you offer evening or weekend availability?", answer: "We work standard weekdays, but contact us to discuss flexible scheduling." },
      { question: "How do I book a service?", answer: "Book online through our forms or call us at (267) 980-4171." },
    ],
    finalCtaHeading: "Crystal-Clear Views Await You!",
    finalCtaText: "Call (267) 980-4171 to transform your home now.",
  },
  {
    slug: "christmas-light-installation",
    name: "Christmas Light Installation",
    cardDescription: "Create magical holiday memories with dazzling, expertly hung lights.",
    heroHeading: "Professional Christmas Light Installation Services",
    heroSubheading: "Bring festive cheer with hassle-free, professional lighting installation.",
    image: "/images/services/christmas-light-installation.jpeg",
    benefits: [
      { title: "Custom Design", description: "Our team collaborates with you to design a breathtaking light display." },
      { title: "High-Quality Products", description: "We use durable, weather-proof lights that are energy-efficient." },
      { title: "All-Inclusive Service", description: "From installation to maintenance to take-down, we've got you covered." },
      { title: "Expert Technicians", description: "Our team of skilled installers ensures your lights are flawlessly positioned." },
    ],
    differentiators: [
      { title: "Experience", description: "Our team brings hands-on industry experience installing holiday lighting." },
      { title: "Safety First", description: "Ensuring the safety of your home and family is our top priority." },
      { title: "Customer Satisfaction", description: "Open communication and reliability are at the core of everything we do." },
      { title: "Quality Commitment", description: "We've established a reputation for excellence across the Philadelphia area." },
    ],
    process: [
      { title: "Personalized Consultation", description: "We visit your home for a detailed discussion about your Christmas light vision." },
      { title: "Customized Design Plan", description: "Based on your input, we create a customized lighting design plan." },
      { title: "Professional Installation", description: "Our skilled team efficiently and safely executes the installation." },
      { title: "Post-Installation Assurance", description: "We conduct a comprehensive service review and final walkthrough." },
    ],
    faqs: [
      { question: "How long does installation take?", answer: "About one day for most properties." },
      { question: "Do you provide the lights?", answer: "Yes, we supply everything you need for a dazzling display." },
      { question: "Is maintenance included?", answer: "Absolutely! Our service includes regular monitoring and maintenance through the season." },
      { question: "Will installation damage my property?", answer: "Not at all. Our experienced team uses methods that protect your roofline and landscaping." },
      { question: "When do you remove the lights?", answer: "Usually in early January, at a time that works for you." },
      { question: "How do I book installation?", answer: "Contact us at (267) 980-4171, or use our online booking system." },
    ],
    finalCtaHeading: "Book Today and Let Us Handle the Magic!",
    finalCtaText: "Spaces fill fast — call (267) 980-4171 to reserve your date.",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    cardDescription: "Removes built-up grime and stains to restore a clean, fresh exterior.",
    heroHeading: "Pressure Washing That Revives Your Property",
    heroSubheading: "We remove dirt, grime, and stains to boost curb appeal and help protect your exterior surfaces.",
    image: "/images/services/pressure-washing.jpg",
    intro: "At LR Pressure Washing, we use professional pressure washing to remove built-up dirt, algae, mold, mildew, surface stains, and grime from tough exterior surfaces.",
    benefits: [
      { title: "Driveways & Walkways", description: "Restore concrete, pavers, and stone surfaces to a like-new finish." },
      { title: "Patios & Pool Decks", description: "Remove slippery algae and grime for a safer outdoor space." },
      { title: "Siding, Brick & Stone", description: "Gentle, effective cleaning for every exterior surface type." },
    ],
    process: [
      { title: "On-Site Assessment & Clear Quote", description: "We start with a quick property review to inspect concrete, siding, brick, or other exterior surfaces, check buildup levels, and spot areas that need special care." },
      { title: "Surface Prep & Precision Cleaning", description: "Once scheduled, we prepare the work area, protect nearby landscaping and fixtures, and choose the proper nozzle, pressure level, and cleaning solution for each surface." },
      { title: "Final Rinse & Quality Walkthrough", description: "After cleaning, we complete a full rinse, tidy the area, and inspect the finished surfaces edge to edge to make sure the job meets our standard." },
    ],
    faqs: [
      { question: "What surfaces can you pressure wash?", answer: "We clean driveways, sidewalks, patios, pool decks, fences, siding, brick, stone, and many other exterior surfaces." },
      { question: "Will pressure washing damage my home?", answer: "Not when it is done the right way. We use proven techniques and adjust pressure, water flow, and cleaning methods based on the surface." },
      { question: "How often should I schedule pressure washing?", answer: "Most properties benefit from professional pressure washing about once a year, but it depends on shade, moisture, foot traffic, tree coverage, and buildup." },
      { question: "Do you remove oil stains, mildew, and algae?", answer: "Yes, we treat and clean many common surface stains and organic growth, including algae, mildew, dirt buildup, and oil-marked areas on concrete." },
      { question: "How long does pressure washing take?", answer: "Most residential jobs take a few hours, depending on the size of the area, the surface type, and how much buildup is present." },
      { question: "Why choose LR Pressure Washing?", answer: "We are a local company built on quality work, clear communication, and honest service. Since 2020, LR Pressure Washing has helped homeowners improve curb appeal and protect their property." },
    ],
    finalCtaHeading: "Restore Your Curb Appeal Today",
    finalCtaText: "Book now to remove grime fast and protect your home's curb appeal and value.",
  },
];

export const testimonials = [
  { name: "Debbie S.", rating: 5, text: "Ryan and Wil just cleaned all our windows, sills and screens they did an exceptional job! They were very professional and meticulous!" },
  { name: "Anne K.", rating: 5, text: "Fantastic results! I had the driveway, sidewalk and patio cleaned and it looks fantastic! Thank you!" },
  { name: "Jonathan W.", rating: 5, text: "Guys did a great job. Highly recommend LR Pressure Washing for anyone in the Philadelphia area." },
  { name: "Keith W.", rating: 5, text: "Fantastic job, great price, they have all the right equipment fast and excellent work." },
  { name: "Jim W.", rating: 5, text: "Great experience with LR Pressure Washing! Driveway looks like new and the service was on schedule." },
  { name: "Chris J.", rating: 5, text: "Fantastic, professional job! I was really happy with their service and communication." },
];

export const featuredTestimonial = {
  name: "Chris Robillard",
  text:
    "Fantastic Power Washing Company! I recently hired their team to clean our driveway prior to a graduation party we are hosting, and I couldn't be more thrilled with the results! From start to finish, their crew was professional, efficient, and friendly. Their attention to detail was truly impressive - they didn't miss a spot! The equipment they used was top-of-the-line and they were able to remove years of dirt and grime, leaving my driveway looking like new again. Not only was the quality of their work exceptional, but their prices were also very competitive. I appreciated their transparency and honesty throughout the entire process. I highly recommend LR Pressure Washing to anyone looking to spruce up their property. Thank you for the fantastic service - I will definitely be a returning customer!",
};

export type PricingPlan = {
  name: string;
  per?: string;
  discount: string;
  featured?: boolean;
  features: { text: string; included: boolean }[];
};

export type PricingGroup = {
  subtitle: string;
  title: string;
  highlight: string;
  plans: PricingPlan[];
};

export const pricingGroups: PricingGroup[] = [
  {
    subtitle: "SAVE BIG WITH",
    title: "CLEAN WINDOWS",
    highlight: "YEAR-ROUND",
    plans: [
      {
        name: "Triannual",
        discount: "$75 OFF",
        features: [
          { text: "FREE Screen Cleaning", included: false },
          { text: "Free Hard Water Removal", included: false },
          { text: "$50 OFF Any Pressure Washing Services", included: true },
        ],
      },
      {
        name: "Quarterly",
        per: "3 Exterior + 1 Interior",
        discount: "$100 OFF",
        featured: true,
        features: [
          { text: "FREE Screen Cleaning", included: true },
          { text: "FREE Hard Water Removal", included: true },
          { text: "$50 OFF Any Pressure Washing Services", included: true },
        ],
      },
      {
        name: "Biannual",
        discount: "$50 OFF",
        features: [
          { text: "FREE Screen Cleaning", included: false },
          { text: "Free Hard Water Removal", included: false },
          { text: "$50 OFF Any Pressure Washing Services", included: false },
        ],
      },
    ],
  },
  {
    subtitle: "AND SAVE BIG WITH",
    title: "A CLEAN EXTERIOR",
    highlight: "YEAR-ROUND",
    plans: [
      {
        name: "Every 2 Years",
        discount: "$150 OFF",
        features: [
          { text: "FREE Front Porch & Walkway Cleaning", included: false },
          { text: "Priority Scheduling", included: false },
          { text: "$50 OFF Any Window Cleaning Service", included: false },
        ],
      },
      {
        name: "Annual",
        per: "House Wash + Driveway",
        discount: "$250 OFF",
        featured: true,
        features: [
          { text: "FREE Front Porch & Walkway Cleaning", included: true },
          { text: "Priority Scheduling", included: true },
          { text: "$50 OFF Any Window Cleaning Service", included: true },
        ],
      },
      {
        name: "Every 3 Years",
        discount: "$100 OFF",
        features: [
          { text: "FREE Front Porch & Walkway Cleaning", included: false },
          { text: "Priority Scheduling", included: false },
          { text: "$50 OFF Any Window Cleaning Service", included: false },
        ],
      },
    ],
  },
];

export const whyChooseUs = {
  eyebrow: "WHY CHOOSE US",
  subtitle: "Philadelphia's Most Trusted Power Washers",
  features: [
    { icon: "Users", title: "Expert Team", description: "Experienced technicians delivering outstanding results" },
    { icon: "MapPin", title: "Local Excellence", description: "Philadelphia-based, understanding Pennsylvania & New Jersey homes" },
    { icon: "CheckCircle2", title: "Eco-Friendly", description: "Safe, environmentally responsible cleaning methods" },
    { icon: "Heart", title: "Community Driven", description: "2,000+ reviews goal, committed to customer satisfaction" },
    { icon: "Star", title: "Premium Equipment", description: "State-of-the-art tools for superior results" },
    { icon: "Clock", title: "Established Since 2020", description: "6 years of experience delivering exceptional service to Philadelphia-area homes" },
  ],
};

// Luis is the owner/contact (featured elsewhere on the site, e.g. Contact page) and is
// intentionally left out of this crew grid, which shows on-the-job technicians only.
// The first technician's name is still pending from the client.
export type TeamMember = { name: string; role?: string; initials: string; photo?: string };
export const team: TeamMember[] = [
  { name: "Technician", role: "Crew", initials: "T", photo: "/images/team/technician-1.jpg" },
  { name: "Thomas", role: "Crew", initials: "T", photo: "/images/team/thomas.jpg" },
];

export const coreValues = [
  { title: "Excellence", description: "Combining youthful energy with professional expertise, we use cutting-edge techniques to achieve pristine results." },
  { title: "Customer Satisfaction", description: "Your happiness is key to our business — through open communication and reliable service." },
  { title: "Integrity", description: "Trust is earned. We build it by practicing honesty, maintaining transparent pricing, and respecting your property." },
  { title: "Innovation", description: "Our passion for learning and testing new techniques means you always receive the best service available." },
];

type Area = { name: string; state: "PA" | "NJ" };

// Philadelphia metro area (PA suburbs)
const paAreas: string[] = [
  "Philadelphia", "Bensalem", "Levittown", "Feasterville-Trevose", "Bristol", "Doylestown",
  "Warminster", "Warrington", "Horsham", "Ambler", "Lansdale", "North Wales",
  "Willow Grove", "Abington", "Jenkintown", "Glenside", "Cheltenham", "Elkins Park",
  "King of Prussia", "Norristown", "Conshohocken", "Plymouth Meeting", "Blue Bell", "Wayne",
  "Bryn Mawr", "Radnor", "Havertown", "Media", "Springfield", "Newtown Square",
  "Chester", "Upper Darby", "Drexel Hill", "Ardmore", "Malvern", "Exton",
];

// South Jersey (across the river)
const njAreas: string[] = [
  "Cherry Hill", "Voorhees", "Mount Laurel", "Marlton", "Moorestown", "Camden", "Pennsauken",
];

function slugify(name: string, state: string) {
  return `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${state.toLowerCase()}`;
}

export const serviceAreas: (Area & { slug: string })[] = [
  ...paAreas.map((name) => ({ name, state: "PA" as const, slug: slugify(name, "PA") })),
  ...njAreas.map((name) => ({ name, state: "NJ" as const, slug: slugify(name, "NJ") })),
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Gallery", href: "/gallery" },
    { label: "Thank you", href: "/thank-you" },
    { label: "Client Testimonials", href: "/reviews" },
    { label: "Project Showcase", href: "/projects" },
    { label: "Sitemap", href: "/sitemap" },
  ],
  services: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
};
