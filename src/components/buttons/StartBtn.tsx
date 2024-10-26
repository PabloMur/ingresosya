"use client";
import { useStartBtnHook } from "@/hooks/uiHooks";
import { motion } from "framer-motion";

const StartBtn = () => {
  const start = useStartBtnHook();
  return (
    <motion.button
      className="bg-[#00DAFD] text-black px-10 py-3 rounded-lg text-lg font-medium hover:bg-red-500 transition mt-2"
      onClick={start}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    >
      Comenzar
    </motion.button>
  );
};

export { StartBtn };
