"use client";

import TopPage from "@/app/components/topPage";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function GarbhSanskar() {
  const { ref: whatRef, inView: whatInView } = useInView({ triggerOnce: true });

  return (
    <main className="flex flex-col items-stretch justify-center">
      <TopPage
        image="/garbhSanskar/1.jpg"
        title="Ancient Science to Nurture a Healthy, Virtuous Child"
        subtitle="Garbh Sanskar"
        description="Garbh Sanskar is a time-honored Ayurvedic practice that supports the physical, mental, and spiritual well-being of both mother and child during pregnancy. Rooted in the belief that a child’s development begins in the womb, it aims to instill positive traits and balanced health even before birth."
      />

      <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
          <FaQuoteLeft className="text-3xl md:text-4xl text-[#d5d6b5]" />
          <p className="text-xl md:text-2xl lg:text-3xl text-green-900 font-medium leading-relaxed">
            अहिरसि आयुरसि सर्वतः प्रतिष्ठासि धाता त्वा दधातु विधाता त्वा दधातु
            ब्रह्मवर्चसा भव इति ।
          </p>
          <FaQuoteRight className="text-3xl md:text-4xl text-[#d5d6b5]" />
        </div>
      </section>

      <section className="pb-10 px-4 md:px-16">
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
                What is Garbh Sanskar?
              </h2>
              <h3 className="text-lg md:text-xl text-green-800 mb-6 font-medium">
                Ayurveda’s Timeless Wisdom for a Healthier, Brighter Generation
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Garbh Sanskar is an ancient Ayurvedic science that believes
                parenthood begins before birth. Our sages understood that a
                child’s physical, emotional, intellectual, and spiritual traits
                can be positively influenced during pregnancy through conscious
                living.
              </p>
              <p className="text-base md:text-lg font-semibold text-green-900 mb-4">
                It empowers parents to:
              </p>
              <ul className="list-none space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🌿</span>
                  <span>
                    <strong>Consciously shape</strong> the baby’s qualities
                    through diet, thoughts, and environment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🧬</span>
                  <span>
                    <strong>Minimize hereditary disorders</strong> by balancing
                    body energies and purifying the system
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🧠</span>
                  <span>
                    <strong>Enhance brain and personality development</strong>{" "}
                    from the earliest stages of life
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">💫</span>
                  <span>
                    <strong>
                      Instill positive values and emotional strength
                    </strong>{" "}
                    in the growing fetus
                  </span>
                </li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                This ancient practice blends modern needs with time-tested
                Ayurvedic principles—making it a powerful, dependable choice for
                today’s mindful parents.
              </p>
            </div>
          </div>

          {/* Left Text Section */}
          <div className="w-full lg:w-2/3">
            <Image
              src="/garbhSanskar/2.jpg"
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
