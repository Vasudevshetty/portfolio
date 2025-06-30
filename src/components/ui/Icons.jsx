import { motion } from "framer-motion";
import { cn } from "../../utils";

/**
 * Animated Icon Wrapper Component
 * Provides consistent animation behaviors for React Icons
 */
const AnimatedIcon = ({
  icon: Icon,
  size = 24,
  className,
  variant = "default",
  animation = "hover",
  ...props
}) => {
  // Animation variants
  const animations = {
    hover: {
      whileHover: { scale: 1.1, rotate: 5 },
      transition: { duration: 0.2 },
    },
    bounce: {
      animate: { y: [0, -10, 0] },
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    spin: {
      animate: { rotate: 360 },
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
    pulse: {
      animate: { scale: [1, 1.1, 1] },
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    none: {},
  };

  // Style variants
  const variants = {
    default: "text-white",
    primary: "text-blue-400",
    secondary: "text-gray-400",
    accent: "text-purple-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400",
    muted: "text-gray-500",
  };

  return (
    <motion.div
      className={cn(
        "inline-flex items-center justify-center",
        "transition-colors duration-200",
        variants[variant],
        className
      )}
      {...animations[animation]}
      {...props}
    >
      <Icon size={size} />
    </motion.div>
  );
};

/**
 * Icon Button Component
 * Interactive button with icon and hover effects
 */
const IconButton = ({
  icon: Icon,
  variant = "primary",
  size = "md",
  onClick,
  className,
  children,
  ...props
}) => {
  // Size configurations
  const sizeConfig = {
    sm: { padding: "p-2", iconSize: 16 },
    md: { padding: "p-3", iconSize: 20 },
    lg: { padding: "p-4", iconSize: 24 },
  };

  const { padding, iconSize } = sizeConfig[size];

  // Variant styles
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700",
    secondary:
      "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600",
    ghost: "text-gray-400 hover:text-white hover:bg-gray-800",
    outline:
      "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
  };

  return (
    <motion.button
      className={cn(
        "rounded-lg transition-all duration-200 flex items-center gap-2",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900",
        padding,
        variants[variant],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      <Icon size={iconSize} />
      {children}
    </motion.button>
  );
};

/**
 * Social Icon Component
 * Specialized for social media links with glow effects
 */
const SocialIcon = ({
  icon: Icon,
  href,
  label,
  size = 24,
  className,
  ...props
}) => {
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center",
        "text-gray-400 hover:text-white",
        "transition-all duration-300",
        "p-3 rounded-lg",
        "hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/20",
        className
      )}
      whileHover={{
        scale: 1.1,
        y: -2,
      }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      <Icon size={size} />
    </motion.a>
  );
};

/**
 * Tech Stack Icon Component
 * For displaying technology icons with proficiency indicators
 */
const TechIcon = ({
  icon: Icon,
  name,
  proficiency = 0,
  size = 32,
  showProficiency = false,
  className,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center gap-2 p-4",
        "bg-gray-800/50 rounded-lg border border-gray-700",
        "hover:border-blue-500/50 hover:bg-gray-800",
        "transition-all duration-300",
        className
      )}
      whileHover={{ scale: 1.05, y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <div className="text-gray-300 hover:text-white transition-colors">
        <Icon size={size} />
      </div>

      {name && (
        <span className="text-sm text-gray-400 font-medium text-center">
          {name}
        </span>
      )}

      {showProficiency && proficiency > 0 && (
        <div className="w-full bg-gray-700 rounded-full h-1.5">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${proficiency}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      )}
    </motion.div>
  );
};

/**
 * Navigation Icon Component
 * For navigation menu items with active states
 */
const NavIcon = ({
  icon: Icon,
  label,
  isActive = false,
  onClick,
  className,
  ...props
}) => {
  return (
    <motion.button
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-lg",
        "transition-all duration-200",
        "text-left w-full",
        isActive
          ? "bg-blue-500/20 text-blue-400 border-l-2 border-blue-500"
          : "text-gray-400 hover:text-white hover:bg-gray-800",
        className
      )}
      whileHover={{ x: 4 }}
      onClick={onClick}
      {...props}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </motion.button>
  );
};

export { AnimatedIcon, IconButton, SocialIcon, TechIcon, NavIcon };
