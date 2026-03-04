import { motion } from "framer-motion";

export function TextGenerateEffect({ words, className = "" }) {
  const tokens = words.split(" ");

  return (
    <h1 className={className}>
      {tokens.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="hero-heading-word"
          initial={{ opacity: 0, filter: "blur(12px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            delay: 0.25 + idx * 0.05,
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          {word}
          {idx < tokens.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </h1>
  );
}
