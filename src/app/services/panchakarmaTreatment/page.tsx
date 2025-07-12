"use client";

import TopPage from "@/app/components/topPage";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPhoneAlt,
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";
import React, { useRef, useState } from "react";

const benefits = [
  {
    title: "Deep Body Detoxification",
    desc: "Effectively eliminates accumulated toxins and impurities, leaving your body lighter, cleaner, and rejuvenated.",
  },
  {
    title: "Holistic Balance Restoration",
    desc: "Brings harmony to the body’s systems by balancing Vata, Pitta, and Kapha—promoting overall well-being.",
  },
  {
    title: "Improved Digestive Health",
    desc: "Boosts digestive fire (Agni), enhances nutrient absorption, and supports a more efficient metabolism.",
  },
  {
    title: "Renewed Energy & Vitality",
    desc: "Energizes both body and mind, helping you feel more active, focused, and revitalized throughout the day.",
  },
  {
    title: "Stress Relief & Mental Calm",
    desc: "Promotes emotional balance, reduces anxiety, and fosters a sense of inner peace and mental clarity.",
  },
  {
    title: "Healthier, Glowing Skin",
    desc: "Purifies the blood and enhances skin health, bringing out a radiant, natural glow.",
  },
  {
    title: "Improved Sleep & Weight Balance",
    desc: "Supports restful, quality sleep and assists in achieving a healthy, sustainable body weight.",
  },
  {
    title: "Stronger Immunity",
    desc: "Strengthens the immune system, increasing your body’s natural defenses against illness and fatigue.",
  },
  {
    title: "Sharper Mental Focus",
    desc: "Clears mental fog, sharpens focus, and enhances memory and decision-making capacity.",
  },
];

const treatments = [
  {
    title: "Greeva Basti",
    desc: "Warm medicated oil is retained over the neck in a dough ring. Relieves cervical pain, stiffness, and spondylosis.",
    image: "/panchakarma/Greeva.jpg",
  },
  {
    title: "Janu Basti",
    desc: "Warm medicated oil is held over the knees to nourish joints and relieve pain. Useful for osteoarthritis and knee degeneration.",
    image: "/panchakarma/Janu.jpg",
  },
  {
    title: "Kati Basti",
    desc: "Warm oil is pooled over the lower back to reduce inflammation and pain. Effective in sciatica, lumbar spondylosis, and disc issues.",
    image: "/panchakarma/kati.jpg",
  },
  {
    title: "Netra Tarpan",
    desc: "A therapeutic ghee bath for the eyes that relieves dryness, fatigue, and improves vision.",
    image: "/panchakarma/Netra.jpg",
  },
  {
    title: "Udhvartan",
    desc: "This treatment is aimed at exfoliating the skin, improving blood circulation, and reducing body fat.",
    image: "/panchakarma/udvartana.jpg",
  },
];

const faqData = [
  {
    question:
      "Do I need to go for panchakarma even if I am not suffering from any disease?",
    answer:
      "Yes, Panchakarma is a therapy that can be done regularly (quarterly, half–yearly, or yearly) to rid the body of toxins and provide protection from all kinds of diseases. As such, Panchakarma is ideal not only for people with health problems but also for the healthy since it helps in cleansing and rejuvenation.",
  },
  {
    question: "Will Panchakarma provide me quick relief?",
    answer:
      "Panchakarma is a holistic approach and may take time depending on the individual's condition, but it provides long-term benefits by addressing root causes.",
  },
  {
    question: "How much ghee or oil will I have to take?",
    answer:
      "The quantity is prescribed individually by your Ayurvedic doctor based on your constitution and condition.",
  },
  {
    question: "What is my diet plan during panchakarma?",
    answer:
      "A light, easily digestible diet is recommended. This often includes khichdi, soups, and herbal teas, avoiding heavy, spicy, and fried foods.",
  },
  {
    question:
      "Any lifestyle changes I need to make during panchakarma procedure?",
    answer:
      "Yes, rest is crucial. Avoid stress, screen time, exertion, and follow a gentle routine as advised.",
  },
  {
    question:
      "Can I continue my job or work when I am going through the panchakarma procedure?",
    answer:
      "Ideally, take a break. Panchakarma works best with rest and minimal distractions.",
  },
];

export default function PanchakarmaTreatment() {
  const { ref: whatRef, inView: whatInView } = useInView({ triggerOnce: true });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: mainRef, inView: mainInView } = useInView({ triggerOnce: true });
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true });

  const sliderRef = useRef<HTMLDivElement>(null);
  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="flex flex-col items-stretch justify-center">
      <TopPage
        image="/panchakarma/1.jpg"
        title="A Natural Process of Deep Healing and Balance"
        subtitle="Panchakarma"
        description="In Ayurveda, true wellness begins with understanding your Prakriti—your unique mind-body constitution. Through Prakriti Parikshan, we assess the natural balance of your energies: Vata, Pitta, and Kapha."
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
            <div className="max-w-5xl mx-auto text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-900 mb-4">
                What is Panchakarma?
              </h2>
              <p className="italic text-gray-700 mb-2 text-sm md:text-base">
                समदोष: समाग्निश्च समधातु मलक्रिया:। प्रसन्नात्मेन्द्रियमना:
                स्वस्थ इत्यभिधीयते। <br />
                <span className="text-xs">– Charaka Samhita</span>
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <p className="text-base md:text-lg mb-6">
                <strong>Panchakarma</strong>, meaning <em>“five actions”</em>,
                is Ayurveda’s signature detoxification and rejuvenation therapy.
                It consists of five core treatments:
              </p>

              <ul className="space-y-3 list-disc pl-5 text-gray-800">
                <li>
                  <strong>Vamana</strong> – Therapeutic emesis (cleansing upper
                  GI tract)
                </li>
                <li>
                  <strong>Virechana</strong> – Purgation therapy (cleansing
                  liver and intestines)
                </li>
                <li>
                  <strong>Basti</strong> – Medicated enema (nourishing and
                  detoxifying colon)
                </li>
                <li>
                  <strong>Nasya</strong> – Nasal therapy (cleansing head and
                  sinuses)
                </li>
                <li>
                  <strong>Raktamokshana</strong> – Bloodletting (purifying blood
                  circulation)
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  Properly administered, Panchakarma can :
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
                  <li className="flex items-center gap-2">
                    🌿 <span>Eliminate toxins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    🌿 <span>Restore dosha balance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    🌿 <span>Boost immunity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    🌿 <span>Rejuvenate body and mind</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Left Text Section */}
          <div className="w-full lg:w-2/3">
            <Image
              src="/panchakarma/2.jpg"
              alt="Doctors"
              width={450}
              height={450}
              className="w-full h-auto rounded-xl shadow-2xl object-cover 
                    hover:scale-105 transition-transform duration-200"
            />
          </div>
        </motion.div>
      </section>

      <motion.div
        ref={benefitsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <section className="bg-[#FAF7F3] w-full px-4 md:px-10 lg:px-24 py-14 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-900 mb-3">
            Key Benefits of Panchakarma Treatment
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-10">
            Discover the transformative power of ancient Ayurvedic healing
          </p>

          {/* Grid of Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-6 text-left shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-start gap-4">
                  <div className="min-w-[32px] min-h-[32px] rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center text-sm">
                    ✦
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-2xl p-6 md:p-8 shadow-md border border-green-100">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-900 mb-2">
              Ready to Begin Your Panchakarma Journey?
            </h3>
            <p className="text-sm md:text-base text-green-700 mb-5">
              Book your Free consultation for authentic Panchakarma treatment
              today
            </p>
            <a
              href="tel:+918320305210"
              className="inline-flex items-center gap-2 bg-green-900 text-white font-medium text-sm md:text-base px-6 py-3 rounded-full border border-transparent hover:bg-transparent hover:text-green-900 hover:border-green-900 transition"
            >
              <FaPhoneAlt className="text-current text-sm" />
              Call Now: +91 83203 05210
            </a>
          </div>
        </section>
      </motion.div>

      <motion.div
        ref={mainRef}
        initial={{ opacity: 0, y: 20 }}
        animate={mainInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-between"
      >
        <section className="w-full bg-white py-12 px-4 md:px-6 lg:px-16 overflow-hidden">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-900 mb-2">
                Restoring Harmony With Panchakarma Treatments
              </h2>
              <p className="text-gray-700">
                Panchakarma is designed to help your body recover its natural
                balance. Through gentle detoxification, revitalizing therapies,
                and a customized treatment approach, it works to remove toxins,
                improve digestion, and restore energy levels.
              </p>
            </div>

            <div className="hidden md:flex gap-2 flex-shrink-0">
              <button
                className="bg-green-900 hover:bg-green-800 text-white p-3 rounded-full shadow-lg"
                onClick={() => handleScroll("left")}
              >
                <FaArrowLeft />
              </button>
              <button
                className="bg-green-900 hover:bg-green-800 text-white p-3 rounded-full shadow-lg"
                onClick={() => handleScroll("right")}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x overscroll-x-contain max-w-full pb-2"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              touchAction: "auto",
            }}
          >
            {treatments.concat(treatments).map((treatment, index) => (
              <div
                key={index}
                className="min-w-[250px] md:min-w-[320px] h-[350px] snap-start flex-shrink-0 rounded-3xl overflow-hidden relative group shadow-lg"
              >
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 text-white p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-sm leading-snug">{treatment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>

      <motion.div
        ref={faqRef}
        initial={{ opacity: 0, y: 20 }}
        animate={faqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full px-4 md:px-6 lg:px-10 "
      >
        <section className="w-full max-w-5xl mx-auto bg-white">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-900 mb-2">
              FAQs
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-8 px-2 md:px-10">
              Answers to your most common questions about Ayurveda and our
              services.
            </p>
          </div>

          <div className="space-y-4 text-left">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="w-full rounded-md overflow-hidden bg-[#F8FAFC] transition-all duration-300 shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-2 px-4 py-4 text-green-800 font-medium text-left hover:bg-[#e1ffea] focus:outline-none"
                >
                  <span className="text-left">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <FaChevronDown className="text-green-800" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="wrapper"
                      className="w-full"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <motion.div
                        key="content"
                        className="px-4 pt-2 pb-4 text-sm text-gray-700 max-h-full lg:max-h-[140px] overflow-y-auto scrollbar-hide"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </main>
  );
}
