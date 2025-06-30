import { motion } from "framer-motion";
import { cn } from "../../utils";

/**
 * VS Logo Component - Serpentine Heart Design
 * A unique logo where 'S' curves into 'V' creating a half-heart shape
 */
const VSLogo = ({
  size = "md",
  variant = "default",
  animated = true,
  className,
  ...props
}) => {
  // Size configurations
  const sizeConfig = {
    xs: { width: 24, height: 24, strokeWidth: 2 },
    sm: { width: 32, height: 32, strokeWidth: 2.5 },
    md: { width: 48, height: 48, strokeWidth: 3 },
    lg: { width: 64, height: 64, strokeWidth: 3.5 },
    xl: { width: 80, height: 80, strokeWidth: 4 },
    "2xl": { width: 120, height: 120, strokeWidth: 5 },
  };

  const { width, height, strokeWidth } = sizeConfig[size];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2,
      },
    },
  };

  const vVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const sVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 0.6, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Style variants
  const variantStyles = {
    default: "text-white",
    primary: "text-blue-400",
    accent: "text-purple-400",
    muted: "text-gray-400",
  };

  const MotionSVG = animated ? motion.svg : "svg";
  const MotionPath = animated ? motion.path : "path";
  const MotionCircle = animated ? motion.circle : "circle";

  return (
    <MotionSVG
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "logo-vs",
        variantStyles[variant],
        "drop-shadow-lg",
        className
      )}
      variants={animated ? containerVariants : undefined}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
      whileHover={animated ? { scale: 1.05 } : undefined}
      {...props}
    >
      {/* Background glow effect */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Glow circle for intersection point */}
      {animated && (
        <MotionCircle
          cx="50"
          cy="45"
          r="3"
          fill="currentColor"
          opacity="0.8"
          filter="url(#glow)"
          variants={glowVariants}
        />
      )}

      {/* Letter V - Two diagonal lines meeting at bottom */}
      <MotionPath
        d="M 25 20 L 45 70 L 50 80 L 55 70 L 75 20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={animated ? vVariants : undefined}
      />

      {/* Letter S - Curved line that flows into V creating heart shape */}
      <MotionPath
        d="M 15 30 Q 10 20 20 15 Q 35 10 45 25 Q 55 40 50 45 Q 45 50 35 45 Q 20 40 15 30"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={animated ? sVariants : undefined}
      />

      {/* Heart connection - Subtle curve connecting S to V */}
      <MotionPath
        d="M 45 25 Q 47 35 50 45"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        variants={animated ? sVariants : undefined}
      />
    </MotionSVG>
  );
};

export default VSLogo;
