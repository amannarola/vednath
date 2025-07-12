"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaSearchPlus,
  FaHandHoldingHeart,
  FaCertificate,
} from "react-icons/fa";

const values = [
  {
    icon: <FaHeart className="text-green-700 text-2xl" />,
    title: "Authenticity",
    description:
      "We stay true to the roots of Ayurveda, offering treatments based on classical texts and time-honored practices.",
  },
  {
    icon: <FaSearchPlus className="text-green-700 text-2xl" />,
    title: "Growth",
    description:
      "We nurture continuous growth—empowering our patients, team, and community to thrive in health and well-being.",
  },
  {
    icon: <FaHandHoldingHeart className="text-green-700 text-2xl" />,
    title: "Empathy",
    description:
      "We listen deeply and care genuinely, treating every individual with respect, compassion, and understanding.",
  },
  {
    icon: <FaCertificate className="text-green-700 text-2xl" />,
    title: "Transparency",
    description:
      "We believe in open, honest communication—building trust through clarity and integrity in everything we do.",
  },
];

const About = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: whoRef, inView: whoInView } = useInView({ triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
  });
  const { ref: valueRef, inView: valueInView } = useInView({
    triggerOnce: true,
  });

  return (
    <main className="flex flex-col items-stretch justify-center">
      <div className="px-4 md:px-10 lg:px-20 my-2">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full min-h-[75vh] bg-cover bg-center rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url('/aboutUs/1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-2xl text-white mb-2">About Us</h3>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-screen-xl">
              Your Journey to Wellness Begins with Vednath Ayurved
            </h1>
            <p className="text-base md:text-lg text-white max-w-[75vw]">
              At Vednath Ayurved, we believe true healing begins from within.
              Our mission is to guide you toward a balanced and healthier life
              through time-tested Ayurvedic wisdom. Each treatment is
              personalized, rooted in holistic care, and designed not just to
              treat illness, but to prevent it—helping you live in harmony with
              your body, mind, and nature.
            </p>
          </div>
        </motion.div>
      </div>

      <section className="py-10 px-4 md:px-16">
        <motion.div
          ref={whoRef}
          initial={{ opacity: 0, y: 20 }}
          animate={whoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Left Text Section */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-green-900">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700">
              We are Vednath Ayurved, a dedicated team of compassionate doctors
              and wellness experts committed to natural, long-lasting healing.
              Based in [your location], we support individuals of all ages on
              their journey to better health through simple, effective Ayurvedic
              treatments.
            </p>
            <p className="text-lg text-gray-700">
              Whether you meet us in person or connect with us online, we take
              the time to truly listen and understand your health concerns. We
              don’t just treat the symptoms—we identify and address the root
              cause to help your body heal from within.
            </p>
            <p className="text-lg text-gray-700">
              Thousands trust Vednath Ayurved for honest guidance, personalized
              care, and results that make a real difference. Our mission is to
              help you live a healthier, more balanced, and joyful life.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-2/3">
            <Image
              src="/aboutUs/2.jpg"
              alt="Doctors"
              width={450}
              height={450}
              className="w-full h-auto rounded-xl shadow-2xl object-cover 
              hover:scale-105 transition-transform duration-200"
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100 py-12 px-4 md:px-16 mt-5">
        <motion.div
          ref={missionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={missionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-green-900">
              Mission & Vision
            </h2>
            <p className="text-gray-700 mt-4">
              Rooted in tradition, guided by trust, and committed to your
              well-being.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaBullseye className="text-green-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700 text-base">
                To evolve as a globally trusted provider of authentic,
                affordable, and accessible Ayurvedic care—offering treatments
                and products that promote natural healing and healthier, happier
                lives in today’s modern world.
              </p>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaEye className="text-green-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700 text-base">
                To provide effective, result-driven Ayurvedic treatments that
                build trust and showcase the true power of Ayurveda—creating
                lasting impact among individuals, healthcare professionals, and
                communities alike.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-12 px-4 md:px-16">
        <motion.div
          ref={valueRef}
          initial={{ opacity: 0, y: 20 }}
          animate={valueInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-green-900">
              Core Values
            </h2>
            <p className="text-gray-700 mt-4 text-base md:text-lg">
              The principles that guide every step of our healing journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 text-center transition duration-300 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-4 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
