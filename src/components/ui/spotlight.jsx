import { motion } from "framer-motion";

export function Spotlight({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`spotlight ${className}`.trim()}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      aria-hidden="true"
    />
  );
}
