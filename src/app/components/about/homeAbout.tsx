"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BiSolidMessageRoundedDots } from 'react-icons/bi';
import { FaClipboardList, FaLeaf } from 'react-icons/fa6';
import { ImHome } from 'react-icons/im';

const HomeAbout = () => {
    const tags = [
        {
            id: 1,
            icon: <BiSolidMessageRoundedDots size={18} />,
            content: "24/7 Online Support"
        },
        {
            id: 2,
            icon: <FaLeaf size={18} />,
            content: "Natural Products"
        },
        {
            id: 3,
            icon: <FaClipboardList size={18} />,
            content: "Personalized Wellness Plans"
        },
        {
            id: 4,
            icon: <ImHome size={18} />,
            content: "Holistic Healing Environment"
        }
    ]

    return (
        <section className="flex flex-col lg:grid-cols-12 lg:flex-row items-stretch justify-center px-6 py-16 space-y-6 lg:space-y-0 lg:space-x-10 xl:space-x-20">
            {/* Left Content & Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col flex-1 lg:max-w-xl xs:text-center md:text-left gap-4"
            >
                <h2 className="text-5xl font-bold text-primary mb-4">Who We Are</h2>
                <p className="text-md font-medium text-gray-700 leading-relaxed mb-6">
                    At Vednath Ayurved, we are dedicated to preserving and promoting the ancient wisdom of Ayurveda, a holistic approach to health and wellness that has been practiced for thousands of years.
                </p>


                <div className='flex flex-row'>
                    <Image
                        src="/about/about1.jpg"
                        alt="Team Image 1"
                        width={450}
                        height={450}
                        className="lg:w-full xs:mx-auto md:mx-auto xs:w-[80%] md:w-[48%] md:items-center lg:h-auto rounded-xl shadow-2xl object-cover 
                    hover:scale-105 transition-transform duration-300"
                    />
                    <Image
                        src="/about/about2.jpg"
                        alt="Team Image 1"
                        width={450}
                        height={450}
                        className="lg:hidden xs:hidden md:block lg:w-full md:mx-auto md:w-[48%] md:items-center lg:h-auto rounded-xl shadow-2xl object-cover 
                    hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </motion.div>

            {/* Right Image & Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col flex-1 justify-between lg:max-w-xl xs:text-center md:text-left"
            >
                <Image
                    src="/about/about2.jpg"
                    alt="Team Image 2"
                    width={450}
                    height={450}
                    className="md:hidden xs:mx-auto lg:block lg:w-full xs:w-[80%] md:mx-auto md:w-[600px] md:items-center lg:h-auto
                    rounded-xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300 mb-8"
                />
                <p className="text-md font-medium text-gray-700 leading-relaxed mb-6">
                    Our mission is to provide natural and effective Ayurvedic treatments and products to help you achieve optimal health and well-being.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start sm:justify-start">
                    {tags.map((tag, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            className="flex items-center gap-3 px-3 py-3 border border-primary 
                            text-primary font-semibold rounded-lg cursor-pointer 
                            text-sm shadow-md transform transition duration-300 ease-in-out 
                            hover:bg-primary hover:text-white hover:shadow-xl 
                            sm:w-[48%] xs:w-auto lg:w-[48%] md:w-auto xl:w-auto xs:text-left"
                        >
                            {tag?.icon} {tag?.content}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default HomeAbout