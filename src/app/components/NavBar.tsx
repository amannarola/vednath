"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { NAV_LINKS } from "@/constants";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [showServices, setShowServices] = useState(false); // desktop submenu
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile submenu
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowServices(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 500); // 1 second delay before hiding
  };

  return (
    <nav className="sticky top-0 z-50 bg-white w-full shadow-md">
      <div className="flexBetween max-container padding-container relative py-5">
        {/* Logo */}
        <Link href="/">
          <Image src="/header/logo.png" alt="logo" width={120} height={60} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-12">
          {NAV_LINKS.map((link) =>
            link.label === "Services" ? (
              <li
                key={link.key}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="group relative flex items-center cursor-pointer transition-colors duration-300 hover:text-primary">
                  <span>{link.label}</span>
                  <IoChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </div>

                <div
                  className={`absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 origin-top transform
                  ${showServices
                      ? "scale-100 opacity-100 visible"
                      : "scale-95 opacity-0 invisible"
                    }`}
                >
                  <ul className="text-sm text-black">
                    <li>
                      <Link
                        href="/services/inPersonConsultation"
                        className="block px-5 py-3 hover:bg-gray-100 hover:text-primary transition-all duration-300"
                      >
                        In-Person Consultation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/panchakarmaTreatment"
                        className="block px-5 py-3 hover:bg-gray-100 hover:text-primary transition-all duration-300"
                      >
                        Panchakarma Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/garbhSanskar"
                        className="block px-5 py-3 hover:bg-gray-100 hover:text-primary transition-all duration-300"
                      >
                        Garbh Sanskar
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/dietConsultation"
                        className="block px-5 py-3 hover:bg-gray-100 hover:text-primary transition-all duration-300"
                      >
                        Diet Consultation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-black-50 relative pb-1 transition-colors duration-300 hover:text-primary group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-primary"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="absolute top-full right-0 w-full bg-white shadow-md p-6 flex flex-col gap-4 z-40 animate-slide-down">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <div key={link.key}>
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="w-full text-left text-black text-lg font-medium flex items-center justify-between"
                  >
                    Services
                    <IoChevronDown
                      className={`ml-1 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileServicesOpen ? "max-h-60 mt-2" : "max-h-0"
                      }`}
                  >
                    <ul className="ml-4 text-black text-base space-y-1 pt-1">
                      <li>
                        <Link
                          href="/services/inPersonConsultation"
                          onClick={() => setMenuOpen(false)}
                          className="block px-2 py-1 hover:text-primary transition-all duration-300"
                        >
                          In-Person Consultation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/panchakarmaTreatment"
                          onClick={() => setMenuOpen(false)}
                          className="block px-2 py-1 hover:text-primary transition-all duration-300"
                        >
                          Panchakarma Treatment
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/garbhSanskar"
                          onClick={() => setMenuOpen(false)}
                          className="block px-2 py-1 hover:text-primary transition-all duration-300"
                        >
                          Garbh Sanskar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/dietConsultation"
                          onClick={() => setMenuOpen(false)}
                          className="block px-2 py-1 hover:text-primary transition-all duration-300"
                        >
                          Diet Consultation
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-black text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}

      </div>
    </nav>
  );
};

export default NavBar;
