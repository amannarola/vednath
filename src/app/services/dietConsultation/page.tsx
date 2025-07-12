"use client";

import TopPage from "@/app/components/topPage";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function DietConsultation() {
  const { ref: whatRef, inView: whatInView } = useInView({ triggerOnce: true });

  return (
    <main className="flex flex-col items-stretch justify-center">
      <TopPage
        image="/dietConsultation/1.jpg"
        title="Personalized Diet for Holistic Health"
        subtitle="Ayurvedic Diet Consultation"
        description="Our Ayurvedic Diet Consultation focuses on creating a personalized nutrition plan based on your unique body constitution (Prakriti), health condition, and lifestyle. Rooted in ancient wisdom, it helps restore balance, improve digestion, and promote natural healing—nurturing your body, mind, and spirit through food."
      />
      <section className="py-10 px-4 md:px-16">
        <motion.div
          ref={whatRef}
          initial={{ opacity: 0, y: 20 }}
          animate={whatInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Right Image Section */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-900 mb-2">
                What is Diet Consultation?
              </h2>
              <h3 className="text-lg md:text-xl text-green-800 mb-6 font-medium">
                Ayurveda’s Personalized Path to Lasting Health & Wellness
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                In Ayurveda, food is not just nourishment—it is medicine. Our
                ancient sages emphasized that a balanced diet, aligned with your
                unique body constitution (Prakriti), is key to maintaining
                health and preventing disease.
              </p>
              <p className="text-base md:text-lg font-semibold text-green-900 mb-4">
                It empowers individuals to:
              </p>
              <ul className="list-none space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🌿</span>
                  <span>
                    <strong>Adopt a personalized diet</strong> based on
                    Prakriti, season, and lifestyle for better digestion and
                    vitality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🧬</span>
                  <span>
                    <strong>Manage chronic conditions</strong> like diabetes,
                    thyroid disorders, PCOS, obesity, and digestive issues
                    naturally
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🧠</span>
                  <span>
                    <strong>
                      Improve mental clarity and emotional balance
                    </strong>{" "}
                    through sattvic (pure and calming) foods
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">💪</span>
                  <span>
                    <strong>Boost immunity, energy, and longevity</strong> with
                    wholesome, healing nutrition
                  </span>
                </li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Rooted in classical Ayurvedic principles, our diet consultations
                are designed for real life—simple, sustainable, and deeply
                transformative.
              </p>
            </div>
          </div>

          {/* Left Text Section */}
          <div className="w-full lg:w-2/3">
            <Image
              src="/dietConsultation/2.jpg"
              alt="Doctors"
              width={450}
              height={450}
              className="w-full h-auto rounded-xl shadow-2xl object-cover 
                                hover:scale-105 transition-transform duration-200"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
