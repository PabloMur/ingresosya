"use client";

import React from "react";
import { motion } from "framer-motion";
import { loaderAtom } from "@/lib/Atoms";
import { useRecoilValue } from "recoil";

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = "Cargando" }) => {
  const active = useRecoilValue(loaderAtom);
  return (
    active && (
      <div className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0 bottom-0 right-0 bg-black/60">
        <p className="mt-4 text-lg font-semibold bg-white text-black p-4 rounded-xl flex items-center">
          {message}
          <motion.span
            className="ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
            }}
          >
            ...
          </motion.span>
        </p>
      </div>
    )
  );
};

export { Loader };
