"use client";

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FiMousePointer } from "react-icons/fi";

const Services = () => {
    return (
        <div className="grid w-full place-content-center px-4 py-12">
            <TiltCard />
        </div>
        // <motion.div
        //     className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg shadow-lg"
        //     whileHover={{ y: 10, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
        //     initial={{ opacity: 0, y: 50 }}
        //     animate={{ opacity: 1, y: 0 }}
        //     transition={{ duration: 0.5 }}
        // >
        //     <Image
        //         src={"/services/service1.jpg"}
        //         alt={"service image"}
        //         width={400}
        //         height={250}
        //         className="w-full h-60"
        //     />
        //     <div className="p-4 text-black bg-grey-900">
        //         <h2 className="text-xl font-semibold">Prikriti Parikshna</h2>
        //     </div>
        // </motion.div>
    )
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
    const ref = useRef<any>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: any) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
                height: "350px",
            }}
            className="relative w-72 rounded-2xl bg-gradient-to-br from-[#D3ECCD] to-[#9FC87E]"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-2 grid rounded-xl bg-[#FFFDF6] shadow-lg overflow-hidden"
            >
                <Image
                    src={"/services/service1.png"}
                    alt="Service Image"
                    width={500}
                    height={350}
                    className="w-full h-[280px] object-cover"
                />
                <p className="mx-2 color-primary font-medium">Panchakarma Treatment</p>
            </div>
        </motion.div>
    );
};

export default Services