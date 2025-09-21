"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "In-Person Consultation",
    description:
      "Visit us for a face-to-face Ayurvedic consultation where expert doctors assess your health and create a personalized treatment plan rooted in traditional healing.",
    image: "/services/1.jpg",
    href: "/services/inPersonConsultation",
  },
  {
    title: "Panchakarma Treatment",
    description:
      "Panchakarma is a five-step Ayurvedic detox that removes toxins, boosts immunity, and restores energy.",
    image: "/services/2.jpg",
    href: "/services/panchakarmaTreatment",
  },
  {
    title: "Garbh Sanskar",
    description:
      "Garbh Sanskar supports the well-being of both mother and child using Ayurvedic principles. Pre planning pregnancy and Post pregnancy",
    image: "/services/3.jpeg",
    href: "/services/garbhSanskar",
  },
  {
    title: "Diet Consultation",
    description:
      "Get a personalized Ayurvedic diet plan based on your body type and health needs—designed to restore balance, improve digestion, and support long-term wellness.",
    image: "/services/4.jpg",
    href: "/services/dietConsultation",
  },
];

// Scroll animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function ServicesSection() {
  return (
    <section className="px-4 py-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary mb-2">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our range of specialized services is designed to support your unique
            path to wellness—naturally, effectively, and with compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group rounded-2xl overflow-hidden h-[400px] shadow-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              <div className="absolute inset-0 bg-black/15 transition-opacity duration-300 pointer-events-none group-hover:bg-black/60 z-10" />

              <div className="absolute bottom-0 left-0 w-full z-20">
                <div className="p-6 transition-transform duration-500 group-hover:-translate-y-16">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm mt-1 text-white opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-32">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-[-60px] left-0 w-full flex justify-start pl-6 z-30 transition-all duration-500 ease-in-out group-hover:bottom-6">
                <Link
                  href={service.href}
                  className="flex items-center gap-2 px-5 py-2 rounded-full border border-transparent bg-primary text-white text-sm font-medium shadow-md transition-all duration-300 ease-in-out
                    hover:bg-transparent hover:border-white hover:shadow-lg"
                >
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
