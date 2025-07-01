"use client";

import './footer.css'
import Image from "next/image"
import Link from "next/link"
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";

interface ProductType {
    id: number;
    section: string;
    link: string[]
}
interface ContactData {
    id: number;
    content: Array<{ description: string, icon: React.ReactElement }>;
}

const products: ProductType[] = [
    {
        id: 1,
        section: 'Quick Links',
        link: ['Home', 'About', 'Services']
    },
    {
        id: 2,
        section: 'Quick Links',
        link: ['Products', 'Team', 'Blogs']
    }
]

const contactData: ContactData[] = [
    {
        id: 1,
        content: [{
            description: 'Vednath ayurveda & panchkarm hospital Shop no 7-8 Devi plaza 3rd floor , Anand mahal road ,Opp. Shree ram petrol pump, Adajan- Surat -395009',
            icon: <FaLocationDot
                size={15}
            />
        }]
    },
    {
        id: 2,
        content: [{
            description: '+91 8799447243',
            icon: <IoMdCall
                size={16}
            />
        }]
    },
    {
        id: 3,
        content: [{
            description: 'vednathayurved@gmail.com',
            icon: <IoMdMail
                size={16}
            />
        }]
    }
]

const Footer = () => {
    return (
        <footer className="bg-primary mt-20">
            <div className="mx-auto max-w-4xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-12 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-6 lg:grid-cols-12">

                    <div className="lg:col-span-4 md:col-span-3 sm:col-span-3">
                        <Image
                            className="footer-img"
                            alt="image-footer"
                            src={"/footer/footer-img.png"}
                            width={350} height={350}
                        />
                    </div>

                    <div className="lg:col-span-3 md:col-span-2 sm:col-span-3 
                    flex lg:flex-col md:flex-col sm:flex-col xs:flex-row xs:justify-between">
                        <div>
                            <p className="text-white font-semibold text-lg">Quick Links</p>
                            <div className="flex items-center gap-x-20 mt-3">
                                {products.map((product) => (
                                    <div key={product.id}>
                                        <ul>
                                            {product.link.map((link: string, index: number) => (
                                                <li className="mb-2.5" key={index}>
                                                    <Link className="text-white text-md" href={"/"}>
                                                        {link}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-white font-semibold text-md mt-4 xs:mt-0">Get in touch</p>
                            <div className="flex items-center gap-4 mt-3">
                                <Image src="/footer/facebook.png" alt="logo" width={30} height={30}
                                    className='btn-facebook'
                                />
                                <Image src="/footer/instagram.png" alt="logo" width={30} height={30}
                                    className='btn-instagram'
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 md:col-span-5 sm:col-span-6">
                        <div className="sm:col-span-6 lg:col-span-4">
                            <div className="flex flex-shrink-0 items-center">
                                <Image src="/footer/ayurveda.png" alt="logo" width={40} height={40} />
                                <Link href={"/"} className="text-white ml-4 font-semibold mt-2">Vednath Ayurved</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 mt-5 ml-1">
                            {contactData?.map((contact) => (
                                <div key={contact?.id} className="flex items-center gap-12">
                                    {contact?.content?.map((subItem, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <button
                                                className="flex p-2 items-center place-self-start justify-center rounded-full
transition duration-300 ease-in-out bg-white hover:bg-hover hover:text-primary align-top"
                                            >
                                                {subItem?.icon}
                                            </button>

                                            <Link
                                                href={`https://www.google.com/maps?q=${21.1702},${72.8311}`}
                                                target="_blank"
                                                className="text-white text-sm leading-6"
                                            >
                                                {subItem?.description}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="fixed bottom-2 left-2 p-2 bg-gray-800 text-white text-sm">
                        <span className="sm:hidden">Default (XS)</span>
                        <span className="hidden sm:block md:hidden">sm (≥640px)</span>
                        <span className="hidden md:block lg:hidden">md (≥768px)</span>
                        <span className="hidden lg:block xl:hidden">lg (≥1024px)</span>
                        <span className="hidden xl:block 2xl:hidden">xl (≥1280px)</span>
                        <span className="hidden 2xl:block">2xl (≥1536px)</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer