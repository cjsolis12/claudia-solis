import React, {useEffect, useRef } from "react";
import {motion, useInView, useAnimation } from "framer-motion"

const RevealLeft = ({ children}) => {
    return (
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0},
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
    );
  };
  
  export {RevealLeft};