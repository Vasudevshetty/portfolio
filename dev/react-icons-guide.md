# 📦 React Icons Usage Guide

## 🎯 Icon Library Strategy

We're using **React Icons** (v5.5.0) which provides access to multiple icon libraries:

- **Feather Icons** (`Fi`) - Clean, minimal line icons
- **Heroicons** (`Hi2`) - Modern outline and solid icons
- **Bootstrap Icons** (`Bs`) - Versatile web icons
- **Material Design Icons** (`Md`) - Google's material icons
- **Font Awesome** (`Fa`) - Popular icon set
- **Tabler Icons** (`Tb`) - Crisp SVG icons

## 🎨 Icon Categories for Portfolio

### Navigation Icons

```jsx
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiMail,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiArrowUp,
  FiArrowRight,
} from "react-icons/fi";
```

### Social Media Icons

```jsx
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
```

### Technology Stack Icons

```jsx
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiAws,
  SiVercel,
  SiGit,
  SiVite,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
```

### Action Icons

```jsx
import {
  FiDownload,
  FiExternalLink,
  FiEye,
  FiCode,
  FiPlay,
  FiPause,
  FiSend,
  FiCopy,
  FiHeart,
  FiStar,
  FiShare2,
  FiBookmark,
} from "react-icons/fi";
```

### Status & Feedback Icons

```jsx
import {
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiXCircle,
  FiLoader,
  FiWifi,
  FiWifiOff,
  FiBattery,
  FiSun,
  FiMoon,
  FiMonitor,
} from "react-icons/fi";
```

## 🎭 Icon Animation Patterns

### Hover Effects

```jsx
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const AnimatedIcon = () => (
  <motion.div
    whileHover={{
      scale: 1.1,
      rotate: 5,
      color: "#58A6FF",
    }}
    transition={{ duration: 0.2 }}
  >
    <FiGithub size={24} />
  </motion.div>
);
```

### Loading Spinner

```jsx
import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";

const LoadingSpinner = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <FiLoader size={20} />
  </motion.div>
);
```

### Bounce Animation

```jsx
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const BounceIcon = () => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <FiArrowDown size={24} />
  </motion.div>
);
```

## 🎨 Icon Styling Utilities

### Size Classes

```css
.icon-xs {
  width: 12px;
  height: 12px;
}
.icon-sm {
  width: 16px;
  height: 16px;
}
.icon-md {
  width: 20px;
  height: 20px;
}
.icon-lg {
  width: 24px;
  height: 24px;
}
.icon-xl {
  width: 32px;
  height: 32px;
}
.icon-2xl {
  width: 48px;
  height: 48px;
}
```

### Color Variants

```css
.icon-primary {
  color: var(--accent-primary);
}
.icon-secondary {
  color: var(--text-secondary);
}
.icon-muted {
  color: var(--text-muted);
}
.icon-success {
  color: var(--accent-success);
}
.icon-warning {
  color: var(--accent-warning);
}
.icon-error {
  color: var(--accent-error);
}
```

### Interactive States

```css
.icon-interactive {
  transition: all 0.2s ease;
  cursor: pointer;
}

.icon-interactive:hover {
  color: var(--accent-primary);
  transform: scale(1.1);
}

.icon-interactive:active {
  transform: scale(0.95);
}
```

## 🧩 Reusable Icon Components

### IconButton Component

```jsx
import { motion } from "framer-motion";
import { clsx } from "clsx";

const IconButton = ({
  icon: Icon,
  variant = "primary",
  size = "md",
  onClick,
  className,
  ...props
}) => {
  return (
    <motion.button
      className={clsx(
        "icon-button",
        `icon-button--${variant}`,
        `icon-button--${size}`,
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      <Icon />
    </motion.button>
  );
};
```

### SocialIcon Component

```jsx
import { motion } from "framer-motion";

const SocialIcon = ({ icon: Icon, href, label, size = 24 }) => {
  return (
    <motion.a
      href={href}
      aria-label={label}
      className="social-icon"
      whileHover={{
        scale: 1.2,
        y: -2,
        color: "var(--accent-primary)",
      }}
      transition={{ duration: 0.2 }}
    >
      <Icon size={size} />
    </motion.a>
  );
};
```

### TechIcon Component

```jsx
import { motion } from "framer-motion";

const TechIcon = ({ icon: Icon, name, proficiency }) => {
  return (
    <motion.div
      className="tech-icon"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="tech-icon__image">
        <Icon size={32} />
      </div>
      <div className="tech-icon__name">{name}</div>
      <div className="tech-icon__proficiency">
        <div className="tech-icon__bar" style={{ width: `${proficiency}%` }} />
      </div>
    </motion.div>
  );
};
```

## 📱 Responsive Icon Considerations

### Mobile Icon Sizes

```jsx
const ResponsiveIcon = ({ icon: Icon }) => (
  <Icon
    className="
      w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7
    "
  />
);
```

### Touch-Friendly Icon Buttons

```css
@media (max-width: 768px) {
  .icon-button {
    min-width: 44px;
    min-height: 44px;
    padding: 12px;
  }
}
```

This guide ensures consistent and effective use of React Icons throughout the portfolio while maintaining the unique, modern aesthetic we're aiming for.
