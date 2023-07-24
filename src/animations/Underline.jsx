import { motion } from "framer-motion";

const Underline = ({ children, isHovered, pageName }) => {
  return (
    <motion.div
      className="underline"
      initial={{ width: 0 }}
      animate={{ width: isHovered === pageName ? "100%" : 0 }}
      transition={{ duration: 0.3 }} 
    >
        {children}
    </motion.div>
  );
};

export { Underline };
