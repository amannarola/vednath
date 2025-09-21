"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "919925604218"; // e.g. India number
    const defaultMessage = "Hello, Vednath Aayurved Hospital";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        defaultMessage
    )}`;

    return (
        <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        >
            <FaWhatsapp className="w-10 h-10" />
        </Link>
    );
};

export default WhatsAppButton;
