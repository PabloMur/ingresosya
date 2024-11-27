"use client";
import { motion } from "framer-motion";
import { StartBtn } from "@/components/buttons/StartBtn";
import { WelcomeSlider } from "@/components/ui/WelcomeSlider";

const WelcomePage = () => {
  return (
    <div className="bg-red-600 h-screen w-full flex flex-col md:flex-row">
      <div className="flex-1 p-5 md:p-20 flex flex-col justify-center items-start gap-3">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          IngresosYa!
        </motion.h1>

        <motion.p
          className="text-lg text-white mb-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Controla tus ingresos y gastos desde un solo lugar. <br /> Una
          herramienta de gestión hecha por y para Riders
        </motion.p>

        <StartBtn />
      </div>

      <div className="flex justify-center items-center py-10 md:py-20 relative w-[55%]">
        <div
          className="absolute h-full w-[80%] right-0 bg-[#00DAFD] z-0"
          style={{
            clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        ></div>

        <WelcomeSlider />
      </div>
    </div>
  );
};

export default WelcomePage;
