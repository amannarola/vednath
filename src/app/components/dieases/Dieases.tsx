"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const diseases = [
  {
    title: "Endocrine Diseases",
    icon: "🩺",
    list: ["Diabetes", "Obesity", "Thyroid", "Hypoglycemia"],
  },
  {
    title: "Neurological Disorders",
    icon: "🧠",
    list: ["Parkinson’s", "Migraine", "Paralysis", "Sciatica"],
  },
  {
    title: "Respiratory Disorders",
    icon: "🌬️",
    list: ["Asthma", "Bronchitis", "Rhinitis", "Sinus"],
  },
  {
    title: "Digestive Disorders",
    icon: "🍽️",
    list: ["Constipation", "GERD", "IBS", "Gastritis"],
  },
  {
    title: "Mental Health",
    icon: "🧘‍♂️",
    list: ["Anxiety", "Depression", "Sleep Apnea", "Insomnia"],
  },
  {
    title: "Cardiovascular",
    icon: "❤️",
    list: ["Hypertension", "Heart Disease", "Cholesterol", "PAD"],
  },
  {
    title: "Skin",
    icon: "🧴",
    list: ["Psoriasis", "Urticaria", "Vitiligo", "Hyperpigmentation"],
  },
  {
    title: "Hair",
    icon: "💇‍♀️",
    list: ["Hair Loss", "Dandruff", "Scalp Psoriasis", "Alopecia"],
  },
  {
    title: "Anorectal Disease",
    icon: "🚽",
    list: ["Piles", "Fissure", "Fistula", "Pilonidal sinus"],
  },
  {
    title: "ENT",
    icon: "👂",
    list: ["Conjunctivitis", "Deafness", "Nasal Polyps", "Adenoids"],
  },
  {
    title: "Gynecology",
    icon: "👩‍⚕️",
    list: ["PCOD/PCOS", "Infertility", "Leucorrhoea", "Ovarian Cyst"],
  },
  {
    title: "Nephrology",
    icon: "🚻",
    list: ["UTI", "Kidney Stones", "Cystitis", "Prostate"],
  },
  {
    title: "Pediatrics",
    icon: "🧒",
    list: ["Child Bed-Wetting", "Worm", "Constipation", "Diarrhea"],
  },
  {
    title: "Sexual Problems",
    icon: "⚤",
    list: ["Erectile Dysfunction", "Oligospermia", "PE", "Varicocele"],
  },
  {
    title: "Joints Pain",
    icon: "🦴",
    list: ["Spondylitis", "Arthritis", "Sciatica", "AVN"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.02,
      ease: "easeOut",
    },
  }),
};

export default function Dieases() {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
            Diseases We Treat
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto">
            Ayurveda is an ancient healing system that restores balance in the
            body’s energies. It uses herbal remedies, dietary changes, and
            lifestyle adjustments to alleviate symptoms and enhance overall
            well-being.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseases.map((disease, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative p-6 rounded-tl-[60px] rounded-br-[60px] rounded-tr-[20px] rounded-bl-[20px] bg-[#FAF7F3] border-2 hover:border-green-900 border-[#e2e2e2] hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Decorative background hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-100/20 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

              {/* Floating icon */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center text-3xl bg-green-50 text-green-800 rounded-full shadow-sm mb-4 transition-all duration-300 group-hover:scale-110">
                {disease.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-semibold text-green-900 mb-3 group-hover:text-green-800 transition-colors duration-300">
                {disease.title}
              </h3>

              {/* List */}
              <ul className="relative z-10 space-y-2 text-gray-700 text-sm">
                {disease.list.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheck className="text-green-700 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
