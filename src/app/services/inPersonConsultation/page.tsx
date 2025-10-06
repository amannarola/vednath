"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import TopPage from "@/app/components/topPage";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

const steps = [
  {
    img: "/inPersonConsultation/4.png",
    text: "In-depth health assessment by experienced Ayurvedic doctors",
  },
  {
    img: "/inPersonConsultation/5.jpg",
    text: "Nadi Pariksha (pulse diagnosis) & Prakriti (body constitution) analysis",
  },
  {
    img: "/inPersonConsultation/6.jpg",
    text: "Customized treatment plan including diet, lifestyle changes, and herbal support",
  },
  {
    img: "/inPersonConsultation/7.jpg",
    text: "Expert advice on Panchakarma therapies, if recommended",
  },
];

export default function InPersonConsultation() {
  // const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true });
  const { ref: whatRef, inView: whatInView } = useInView({
    triggerOnce: true,
  });
  const { ref: questionRef, inView: questionInView } = useInView({
    triggerOnce: true,
  });

  return (
    <main className="flex flex-col items-stretch justify-center">
      <TopPage
        image="/inPersonConsultation/1.jpg"
        title="Experience Healing, Face-to-Face"
        subtitle="In-Person Consultation"
        description="Receive personalized Ayurvedic care and expert guidance at Vednath Ayurved Multispeciality Hospital, where tradition meets trusted healing."
      />

      <section className="py-10 px-4 md:px-16">
        <motion.div
          ref={whyRef}
          initial={{ opacity: 0, y: 20 }}
          animate={whyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Left Text Section */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-green-900">
              Why Choose In-Person Consultation at Vednath Ayurved?
            </h2>
            <p className="text-lg text-gray-700">
              Imagine having a team of compassionate, experienced Ayurvedic
              doctors by your side—dedicated to helping you manage chronic
              conditions like diabetes, thyroid imbalances, PCOS, hypertension,
              arthritis, digestive disorders, as well as skin and respiratory
              issues.
            </p>
            <p className="text-lg text-gray-700">
              At Vednath Ayurved, our in-person consultations are rooted in deep
              understanding. We take the time to listen to your story, assess
              your unique body constitution (Prakriti), and design personalized
              healing plans that include Ayurvedic remedies, lifestyle guidance,
              and customized diet charts.
            </p>
            <p className="text-lg text-gray-700">
              This isn't just about treating symptoms. It&rsquo;s about empowering you
              with the knowledge and tools to restore balance, build resilience,
              and take charge of your long-term health—naturally.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-2/3">
            <Image
              src="/inPersonConsultation/3.jpg"
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
        ref={whatRef}
        initial={{ opacity: 0, y: 20 }}
        animate={whatInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-4 md:px-10 lg:px-20 py-12 bg-white text-gray-800"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-900">
            What to Expect
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg">
            Experience a personalized consultation that blends classical
            Ayurvedic wisdom with compassionate care—designed just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-3xl shadow-md overflow-hidden bg-white flex flex-col cursor-pointer"
            >
              <div className="h-72 w-full relative">
                <Image
                  src={step.img}
                  alt={`Step ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-3xl"
                />
              </div>
              <div className="bg-gradient-to-t from-black/15 to-transparent text-primary font-semibold p-4 text-center mt-auto">
                <p className="text-sm md:text-base">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.section
        ref={questionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={questionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[40vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-10"
        style={{
          backgroundImage: "url('/inPersonConsultation/question2.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Main content */}
        <div className="relative z-10 text-center text-white max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Have Questions?
          </h2>
          <p className="mb-6 text-sm md:text-base">
            Feel free to reach out to our <strong>Health Coaches</strong> for
            help with booking or consultation details.
          </p>
          <Link href="/contactUs">
            <button
              className="bg-primary text-white font-medium px-6 py-3 rounded-full inline-flex items-center transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white hover:border hover:border-white">
              Contact Support
              <FaArrowRight className="ml-2 w-4 h-4" />
            </button>
          </Link>
        </div>
      </motion.section>

      <section className="w-full pt-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Column 1: Message + Social */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-green-900">
                Message Us
              </h3>
              <p className="text-sm  flex items-center gap-2 mb-2 text-gray-700 break-all">
                <FaEnvelope className="text-green-600 flex-shrink-0" />
                vednathayurved@gmail.com
              </p>
              <p className="text-sm  flex items-center gap-2 mb-2 text-gray-700">
                <IoCall className="text-green-600" /> +91 99256 04218 (Online)
              </p>
              <p className="text-sm flex items-center gap-2 text-gray-700">
                <IoCall className="text-green-600" /> +91 87994 47243
                (Hospital)
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg lg:text-xl font-semibold mb-4 text-green-900">
                Follow Us
              </h3>
              <div className="flex gap-4 text-lg text-green-700">
                <a
                  href="https://www.facebook.com/share/19oH9JzTmN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-900 hover:scale-110 transition-all cursor-pointer"
                >
                  <FaFacebookF className="hover:text-green-900 hover:scale-110 transition-all cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com/vednathayurved?utm_source=qr&igsh=MWgxeHRmaWpnd3pqMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-900 hover:scale-110 transition-all cursor-pointer"
                >
                  <FaInstagram className="hover:text-green-900 hover:scale-110 transition-all cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Working Hours */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-green-900">
              Working Hours
            </h3>
            <p className="text-sm lg:text-base font-medium text-green-700">
              Hospital
            </p>
            <p className="text-sm lg:text-base text-gray-700">
              Monday–Saturday
            </p>
            <p className="text-sm lg:text-base mb-4 text-gray-700">
              <strong>10:00 AM – 7:00 PM</strong>
            </p>
            <p className="text-sm lg:text-base font-medium text-green-700">
              Online Consultation
            </p>
            <p className="text-sm lg:text-base text-gray-700">
              Monday–Saturday
            </p>
            <p className="text-sm lg:text-base mb-2 text-gray-700">
              <strong>10:00 AM – 6:00 PM</strong>
            </p>
          </div>

          {/* Column 3: Map */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-2 lg:p-2 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-green-900 px-3 pt-2">
              Our Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.34876820506!2d72.7946281750504!3d21.18760818257251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f6765c68eacde63%3A0x1e88186830564726!2sVednath%20Ayurved!5e0!3m2!1sen!2sin!4v1726900000000!5m2!1sen!2sin"
              width="100%"
              height="240"
              className="rounded-md border-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
