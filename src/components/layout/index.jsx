import { motion } from "framer-motion";
import { cn } from "../../utils";

/**
 * Main Layout Container
 * Provides the foundational structure for the portfolio
 */
const Layout = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "min-h-screen bg-gray-900",
        "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Container Component
 * Responsive container with consistent padding
 */
const Container = ({ children, size = "default", className, ...props }) => {
  const sizeConfig = {
    sm: "max-w-4xl",
    default: "max-w-6xl",
    lg: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto px-6 sm:px-8 lg:px-12",
        sizeConfig[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Section Component
 * Standard section with spacing and animation
 */
const Section = ({ children, id, className, animate = true, ...props }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const Component = animate ? motion.section : "section";

  return (
    <Component
      id={id}
      className={cn("py-20 sm:py-24 lg:py-32", className)}
      variants={animate ? sectionVariants : undefined}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={animate ? { once: true, margin: "-100px" } : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * Card Component
 * Glassmorphism card with hover effects
 */
const Card = ({ children, variant = "default", className, ...props }) => {
  const variants = {
    default: "bg-gray-800/50 border-gray-700",
    glass: "bg-gray-800/30 backdrop-blur-lg border-gray-600/30",
    solid: "bg-gray-800 border-gray-700",
    gradient:
      "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600",
  };

  return (
    <motion.div
      className={cn(
        "rounded-xl border p-6",
        "transition-all duration-300",
        "hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10",
        variants[variant],
        className
      )}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Grid Component
 * Responsive grid system
 */
const Grid = ({ children, cols = 1, gap = 6, className, ...props }) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
  };
  const gridGap = {
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
    12: "gap-12",
  };
  return (
    <div
      className={cn("grid", gridCols[cols], gridGap[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Heading Component
 * Styled headings with consistent typography
 */
const Heading = ({
  level = 2,
  children,
  className,
  gradient = false,
  ...props
}) => {
  const HeadingTag = `h${level}`;

  const levelStyles = {
    1: "text-4xl sm:text-5xl lg:text-6xl font-bold",
    2: "text-3xl sm:text-4xl lg:text-5xl font-semibold",
    3: "text-2xl sm:text-3xl lg:text-4xl font-semibold",
    4: "text-xl sm:text-2xl lg:text-3xl font-medium",
    5: "text-lg sm:text-xl lg:text-2xl font-medium",
    6: "text-base sm:text-lg lg:text-xl font-medium",
  };

  return (
    <HeadingTag
      className={cn(
        levelStyles[level],
        "leading-tight",
        gradient
          ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          : "text-white",
        className
      )}
      {...props}
    >
      {children}
    </HeadingTag>
  );
};

/**
 * Text Component
 * Styled text with variants
 */
const Text = ({ variant = "body", children, className, ...props }) => {
  const variants = {
    body: "text-gray-300 text-base sm:text-lg leading-relaxed",
    lead: "text-gray-200 text-lg sm:text-xl leading-relaxed",
    small: "text-gray-400 text-sm",
    muted: "text-gray-500 text-sm",
  };

  return (
    <p className={cn(variants[variant], className)} {...props}>
      {children}
    </p>
  );
};

export { Layout, Container, Section, Card, Grid, Heading, Text };
