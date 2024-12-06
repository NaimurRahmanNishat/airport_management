import { motion } from "framer-motion";
import React from "react";

const PassernerGuide = () => {
  return (
    <main>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.8,
          }}
          className="text-3xl md:text-5xl text-orange-600 pt-5 text-center font-bold pb-5"
        >
          Departure Guideline
        </motion.h1>
      </div>
    </main>
  );
};

export default PassernerGuide;
