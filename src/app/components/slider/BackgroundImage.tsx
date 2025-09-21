import React from "react";
import { CurrentSlideData, Data } from "../HomeSliders";
import { motion } from "framer-motion";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

const BackgroundImage = ({ transitionData, currentSlideData }: Props) => {
  return (
    <React.Fragment>
      {transitionData && (
        <motion.img
          key={transitionData?.img}
          layoutId={transitionData?.img}
          alt="Transition Image"
          initial={{ scale: 0.5 }} // Start zoomed out
          animate={{ scale: 1 }} // Zoom to full size
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute left-0 top-0 z-10 h-[75vh] lg:h-full w-full object-cover brightness-50"
          src={transitionData?.img}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData?.data?.img + "transition"}
        src={currentSlideData?.data?.img}
        className="absolute left-0 top-0 h-[75vh] lg:h-full w-full object-cover brightness-50"
      />
    </React.Fragment>
  );
};

export default BackgroundImage;
