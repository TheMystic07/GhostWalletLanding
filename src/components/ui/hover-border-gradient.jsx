import { motion } from "framer-motion";

export function HoverBorderGradient({
  as = "button",
  className = "",
  innerClassName = "",
  children,
  ...props
}) {
  const Component = motion[as] || motion.button;

  return (
    <Component
      className={`hover-border-gradient ${className}`.trim()}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      {...props}
    >
      <span className="hover-border-gradient__border" />
      <span className={`hover-border-gradient__inner ${innerClassName}`.trim()}>{children}</span>
    </Component>
  );
}
