"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

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
                        backgroundImage: "url('/contactUs/contactUs.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
                        <h3 className="text-2xl text-white mb-2">Contact Us</h3>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-screen-xl">
                            Consult with Our Health Coach!
                        </h1>
                        <p className="text-base md:text-lg text-white max-w-[75vw]">
                            Your health, our Ayurvedic expertise—let’s begin.
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="flex flex-col md:flex-row mt-20">
                {/* Left Image with Animation */}
                <motion.div
                    className="relative w-full md:w-1/2 h-64 md:h-auto"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/contactUs/contact.png" // replace with Ayurvedic theme image
                        alt="Hospital"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Right Content with Animation */}
                <motion.div
                    className="w-full md:w-1/2 flex items-stretch"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col justify-center bg-green-50 px-6 md:px-12 py-8 w-full">
                        {/* Description */}
                        <h2 className="text-3xl font-bold mb-4 text-green-900">Contact Us</h2>
                        <p className="text-gray-700 mb-6">
                            Reach out to us for expert Ayurvedic care, consultation, and
                            guidance.
                        </p>

                        {/* Address */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-green-800">
                                Visit Our Hospital
                            </h3>
                            <p className="flex items-start text-gray-600 leading-relaxed">
                                <FaMapMarkerAlt className="text-green-600 mt-1 mr-2 shrink-0" />
                                Shop no 7-8 Devi plaza
                                3rd floor, Anand mahal road, Opp. Shree ram petrol pump,
                                Adajan- Surat -395009
                            </p>
                        </div>

                        {/* Message Us */}
                        <div className="mb-6 space-y-2">
                            <h3 className="text-xl font-semibold text-green-800">Message Us</h3>
                            <p className="flex items-center text-gray-600">
                                <FaEnvelope className="text-green-600 mr-2" />  vednathayurved@gmail.com
                            </p>
                            <p className="flex items-center text-gray-600">
                                <FaPhoneAlt className="text-green-600 mr-2" /> +91 99256 04218 (For Online Consultation)
                            </p>
                            <p className="flex items-center text-gray-600">
                                <FaPhoneAlt className="text-green-600 mr-2" /> +91 87994 47243 (Hospital)
                            </p>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-green-800">
                                Follow Us
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.facebook.com/share/19oH9JzTmN/"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-green-100 text-green-700"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.instagram.com/vednathayurved?utm_source=qr&igsh=MWgxeHRmaWpnd3pqMw=="
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-green-100 text-green-700"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}

export default ContactUs