"use client";

import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import BackgroundImage from "./slider/BackgroundImage"
import SlideInfo from "./slider/SlideInfo"
import Slides from "./slider/Slides"
import Controls from "./slider/Controls"
import { getSliderData } from "@/lib/contentful/client";

export type Data = {
    img: string
    title: string
    description: string
    location: string
}

export type CurrentSlideData = {
    data: Data
    index: number
}

const HomeSliders = ({ items }: any) => {
    const sliderData = [
        {
            img: 'slider/1.png',
            location: 'Ayurved',
            description: 'India’s Trusted Ayurvedic Clinic for Root-Cause Treatments',
            title: 'Vednath'
        },
        {
            img: 'slider/2.png',
            location: 'Wellness',
            description: 'Ancient Ayurvedic care with personalized therapies and herbal healing for mind, body, and spirit.',
            title: 'Heal Naturally'
        },
        {
            img: 'slider/3.jpg',
            location: 'Cleanse Deeply',
            description: 'Restore energy with authentic Ayurvedic detox',
            title: 'Panchakarma Care'
        }
    ]

    const [data, setData] = useState<Data[]>(sliderData.slice(1))
    const [transitionData, setTransitionData] = useState<Data>(sliderData[0])
    const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
        data: sliderData[0],
        index: 0
    })

    return (
        <main className="relative min-h-screen select-none overflow-hidden text-white antialiased">
            <AnimatePresence>
                <BackgroundImage
                    key={transitionData.img}
                    transitionData={transitionData}
                    currentSlideData={currentSlideData}
                />
                <div className="absolute z-20 h-full w-full">
                    <div className="flex h-full w-full grid-cols-10 flex-col lg:grid">
                        <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 lg:justify-center md:px-10">
                            <SlideInfo
                                transitionData={transitionData}
                                currentSlideData={currentSlideData}
                            />
                        </div>

                        <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center
                        md:p-10">
                            <Slides data={data} />
                            <Controls
                                currentSlideData={currentSlideData}
                                data={data}
                                transitionData={transitionData}
                                initData={sliderData[0]}
                                handleData={setData}
                                handleTransitionData={setTransitionData}
                                handleCurrentSlideData={setCurrentSlideData}
                                sliderData={sliderData}
                            />
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </main>
    )
}

export default HomeSliders

