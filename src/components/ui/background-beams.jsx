import { motion } from "framer-motion";

const beams = [
  { left: "8%", delay: 0.2, duration: 7.5, height: 240, opacity: 0.45 },
  { left: "22%", delay: 1.1, duration: 9.2, height: 320, opacity: 0.35 },
  { left: "40%", delay: 0.8, duration: 8.4, height: 280, opacity: 0.4 },
  { left: "58%", delay: 1.9, duration: 10, height: 360, opacity: 0.34 },
  { left: "76%", delay: 0.4, duration: 8.8, height: 300, opacity: 0.42 },
  { left: "90%", delay: 1.4, duration: 9.6, height: 340, opacity: 0.32 },
];

export function BackgroundBeams() {
  return (
    <div className="background-beams" aria-hidden="true">
      {beams.map((beam) => (
        <motion.span
          key={beam.left}
          className="beam"
          style={{ left: beam.left, height: `${beam.height}px`, opacity: beam.opacity }}
          initial={{ y: "-35vh" }}
          animate={{ y: ["-35vh", "115vh"] }}
          transition={{
            duration: beam.duration,
            delay: beam.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
