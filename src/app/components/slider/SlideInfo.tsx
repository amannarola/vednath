import React from "react"
import { CurrentSlideData, Data } from "../HomeSliders"
import { motion } from 'framer-motion'
import OtherInfo from "./OtherInfo"

type Props = {
    transitionData: Data
    currentSlideData: CurrentSlideData
}

const SlideInfo = ({ transitionData, currentSlideData }: Props) => {
    return (
        <React.Fragment>
            <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
            <OtherInfo
                data={transitionData ? transitionData : currentSlideData?.data}
            />
        </React.Fragment>
    )
}

export default SlideInfo