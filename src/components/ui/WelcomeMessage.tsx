"use client";
import { useWelcomeMessage } from "@/hooks/uiHooks";
import { motion } from "framer-motion";

const WelcomeMessage = () => {
  const { active, firstName, firstLetterName } = useWelcomeMessage();

  return (
    active && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex justify-center items-center"
      >
        <p className="text-black font-bold">
          Bienvenido de nuevo {firstName} 👋
        </p>
        <div className="bg-purple-700 rounded-full p-2 h-8 w-8 flex justify-center items-center ml-2">
          <p>{firstLetterName}</p>
        </div>
      </motion.div>
    )
  );
};

export { WelcomeMessage };
