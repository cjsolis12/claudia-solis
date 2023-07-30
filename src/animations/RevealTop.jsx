import React from "react";
import {motion, useInView, useAnimation } from "framer-motion"

const RevealTop = ({ children}) => {
    return (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
    );
  };
  
  export {RevealTop};