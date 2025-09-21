"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";

const serviceLinks = [
  { label: "Online Consultation", href: "/services/onlineConsultation" },
  { label: "Panchakarma Treatment", href: "/services/panchakarmaTreatment" },
  { label: "Garbh Sanskar", href: "/services/garbhSanskar" },
  { label: "Herbal Remedies", href: "/services/herbalRemedies" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* 1️⃣  Grid  layout switches at break‑points */}
        <div
          className="   grid gap-10
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-[1.5fr_0.75fr_0.75fr]
    md:auto-rows-auto
    lg:grid-cols-[1.5fr_0.75fr_0.75fr_1fr]"
        >
          {/* ── Column 1 ── */}
          <div className="md:col-span-1 lg:col-span-1 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[400px]">
              <Image
                src="/footer/footer-img.png"
                alt="footer-logo"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* ── Column 2 (Quick Links) ── */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.filter((link) => link.label !== "Services").map(
                (link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="hover:text-hover transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ── Column 3 (Services + Social) ── */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 mb-6">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-hover transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-3">Get in touch</h3>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/share/19oH9JzTmN/">
                <Image
                  src="/footer/facebook.png"
                  alt="facebook"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://www.instagram.com/vednathayurved?utm_source=qr&igsh=MWgxeHRmaWpnd3pqMw==">
                <Image
                  src="/footer/instagram.png"
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>

          {/* ── Column 4 (Contact Info) ── */}
          <div className="md:col-span-3 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/footer/ayurveda.png"
                alt="logo"
                width={40}
                height={40}
              />
              <Link href="/" className="ml-3 font-semibold text-lg">
                Vednath Ayurved
              </Link>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <span className="bg-white text-primary p-2 rounded-full">
                  <FaLocationDot size={16} />
                </span>
                <Link
                  href="https://maps.app.goo.gl/X1JmmZFWkUDVWXL87?g_st=aw"
                  target="_blank"
                  className="text-sm leading-6"
                >
                  Vednath ayurveda & panchkarm hospital, Shop no 7-8 Devi plaza
                  3rd floor, Anand mahal road, Opp. Shree ram petrol pump,
                  Adajan- Surat -395009
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-white text-primary p-2 rounded-full">
                  <IoMdCall size={16} />
                </span>
                <span className="text-sm">+91 99256 04218</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-white text-primary p-2 rounded-full">
                  <IoMdMail size={16} />
                </span>
                <span className="text-sm">vednathayurved@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
