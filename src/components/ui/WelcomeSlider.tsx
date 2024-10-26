"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

import sliderOne from "../../../public/sliderOne.jpg";
import sliderTwo from "../../../public/sliderTwo.jpg";
import sliderThree from "../../../public/sliderThree.jpg";

const images = [sliderOne, sliderTwo, sliderThree];

const WelcomeSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white h-64 w-full md:h-full rounded-tl-3xl rounded-bl-3xl z-10 overflow-hidden relative flex justify-center items-center">
      <AnimatePresence>
        <motion.div
          key={currentImage}
          className="absolute h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={images[currentImage]}
            alt={`Slider image ${currentImage + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-tl-3xl rounded-bl-3xl"
            priority={currentImage === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { WelcomeSlider };
