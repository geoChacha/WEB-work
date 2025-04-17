import { motion } from "framer-motion";

const Animation = () => {
  return (
    <motion.div
      className="h-5 w-50 bg-white p-4"
      animate={{ x: ["0%", "100%", "0%"] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default Animation;
