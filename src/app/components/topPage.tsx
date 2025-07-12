// components/TopPage.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TopPageProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function TopPage({
  image,
  title,
  subtitle,
  description,
}: TopPageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  return (
    <div className="px-4 md:px-10 lg:px-20 my-2">
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full min-h-[75vh] bg-cover bg-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-2xl text-white mb-2">{subtitle}</h3>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-screen-xl">
            {title}
          </h1>
          <p className="text-base md:text-lg text-white max-w-[75vw]">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
