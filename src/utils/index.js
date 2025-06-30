import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper precedence
 * @param inputs - Class names to merge
 * @returns Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to create CSS custom properties from an object
 * @param vars - Object with CSS variable names and values
 * @returns CSS custom properties object
 */
export function createCSSVars(vars) {
  return Object.entries(vars).reduce((acc, [key, value]) => {
    acc[`--${key}`] = value;
    return acc;
  }, {});
}

/**
 * Utility function to generate responsive breakpoint classes
 * @param base - Base classes
 * @param responsive - Object with breakpoint classes
 * @returns Combined responsive classes
 */
export function responsive(base, responsive = {}) {
  const breakpoints = ["sm", "md", "lg", "xl", "2xl"];
  const classes = [base];

  breakpoints.forEach((breakpoint) => {
    if (responsive[breakpoint]) {
      classes.push(`${breakpoint}:${responsive[breakpoint]}`);
    }
  });

  return classes.join(" ");
}

/**
 * Utility function to create animation delay classes
 * @param index - Index for staggered animations
 * @param baseDelay - Base delay in milliseconds
 * @returns Animation delay value
 */
export function staggerDelay(index, baseDelay = 100) {
  return `${index * baseDelay}ms`;
}

/**
 * Utility function to format duration for animations
 * @param ms - Duration in milliseconds
 * @returns Formatted duration string
 */
export function formatDuration(ms) {
  return `${ms}ms`;
}

/**
 * Utility function to check if user prefers reduced motion
 * @returns Boolean indicating reduced motion preference
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Utility function to generate random number within range
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random number
 */
export function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Utility function to create smooth scroll behavior
 * @param elementId - Target element ID
 * @param offset - Optional offset from top
 */
export function smoothScrollTo(elementId, offset = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

/**
 * Utility function to check if element is in viewport
 * @param element - DOM element to check
 * @param threshold - Intersection threshold (0-1)
 * @returns Boolean indicating if element is in viewport
 */
export function isInViewport(element, threshold = 0.1) {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView =
    rect.top <= windowHeight && rect.top + rect.height * threshold >= 0;
  const horInView =
    rect.left <= windowWidth && rect.left + rect.width * threshold >= 0;

  return vertInView && horInView;
}
