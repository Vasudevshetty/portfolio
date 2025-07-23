# Project Plan: The Interactive Interview Portfolio

This document outlines the development plan for creating a unique, interactive portfolio experience designed to engage visitors in a simulated conversation.

---

## 1. Core Concept: The Interview

The website will function as a minimalist, simulated chat/interview interface. The visitor, taking on the role of an interviewer, will ask questions from a pre-defined list. Your "answers" will be presented as beautifully designed, interactive sections of your portfolio. This active, conversational approach is designed to be more engaging and memorable than a traditional passive portfolio.

### User Journey:

1.  **The Greeting:** The page loads to a clean screen with a single line of text typing out: `Hi, I'm Vasudev. Thanks for making the time. Ready to start?` followed by a `[Let's begin]` button.
2.  **The Interview Room:** The main interface is a two-panel layout.
    - **Left Panel (Interviewer):** A clean, scrollable list of questions serves as the primary navigation.
    - **Right Panel (Candidate):** The main content area where your answers are displayed with rich, dynamic formatting.
3.  **The Conversation Flow:** Clicking a question in the left panel will render the corresponding "answer" in the right panel, using the most effective layout for that content (e.g., a timeline for experience, a grid for projects).

---

## 2. Phased Development Plan

### Phase 1: Setup and Core UI (`v1.0`)

- **Objective:** Build the foundational structure of the application.
- **Tasks:**
  1.  **Project Setup:** Initialize a new Next.js project with TypeScript and Tailwind CSS.
  2.  **Greeting Screen:** Implement the initial landing page with the typing animation and entry button.
  3.  **Main Layout:** Create the two-panel "Interview Room" layout.
  4.  **Component Scaffolding:** Build placeholder components for each portfolio section (About, Experience, Projects, Skills, Contact).
  5.  **State Management:** Set up a simple state management solution (e.g., React Context or Zustand) to manage the "active question" and corresponding view in the right panel.

### Phase 2: Content Integration (`v1.1`)

- **Objective:** Populate the UI with your professional data from `RESUME.md`.
- **Tasks:**
  1.  **About Section:** Integrate the professional summary.
  2.  **Experience Timeline:** Design and build a sleek, animated vertical timeline to display your roles at Fauxigent, GDSC, etc.
  3.  **Projects Showcase:** Implement a Bento Grid to display `DeployIO`, `Voxalize`, and `StudySyncs`. Each project card will be interactive, potentially expanding for more details.
  4.  **Skills Grid:** Create a clean, categorized grid for your technical skills.
  5.  **Contact Information:** Add a section for your contact details and links.

### Phase 3: The "Super Rare" Command Palette (`v2.0`)

- **Objective:** Introduce the advanced, interactive command palette for a unique user experience.
- **Tasks:**
  1.  **Input Field:** Add a text input at the bottom of the question list that prompts the user to `[Or, ask a custom question...]`.
  2.  **Search Logic:** Implement the logic to parse user input and filter the content.
      - Typing `docker` should highlight the Docker skill and any projects that used it.
      - Typing `hackathon` should highlight the Voxalize project.
      - Typing `contact` should display your contact information.
  3.  **UI Feedback:** Ensure the UI provides clear visual feedback, instantly highlighting relevant content as the user types.

### Phase 4: Enhancements & Polish (`v2.1`)

- **Objective:** Refine the user experience with animations, optimizations, and additional features.
- **Tasks:**
  1.  **Animations:** Use a library like Framer Motion to add smooth, meaningful transitions between content sections.
  2.  **Responsive Design:** Ensure the entire experience is fully responsive and accessible on all devices.
  3.  **Theme Switcher:** Implement a light/dark mode toggle.
  4.  **Download Resume:** Add a prominent button to download `vasudev_resume.pdf`.
  5.  **SEO Optimization:** Implement basic SEO best practices to ensure the portfolio is discoverable.
  6.  **Accessibility (A11y):** Review the site for accessibility, ensuring proper ARIA roles, keyboard navigation, and screen reader support.

---

## 3. Technology Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **State Management:** Zustand (lightweight and effective)
- **Deployment:** Vercel

---

## 4. Copilot Instructions for Next Steps

The following instructions will be used to guide the AI in the subsequent development phases.

```
Okay, let's start building.

**Phase 1: Setup and Core UI**

1.  **Clean the project:** Remove the existing content in `src/app/page.tsx` and `src/app/globals.css`.
2.  **Install dependencies:** Install `framer-motion` for animations and `zustand` for state management.
3.  **Create the data structure:** Create a new file `src/app/data.ts` to hold the portfolio content, structured by sections (e.g., `about`, `experience`, `projects`). For now, just use placeholder text.
4.  **Create the state:** Create a new file `src/app/store.ts` using Zustand to manage the application state. It should hold the `activeSection` (e.g., 'home', 'about', 'experience').
5.  **Build the UI components:**
    *   `components/Greeting.tsx`: The initial screen with the typing animation.
    *   `components/LeftPanel.tsx`: The navigation panel with the list of questions. Clicking a question should update the `activeSection` in the Zustand store.
    *   `components/RightPanel.tsx`: The content panel that conditionally renders different components based on the `activeSection`.
    *   `components/sections/About.tsx`, `components/sections/Experience.tsx`, etc.: Placeholder components for each content section.
6.  **Assemble the main page:** In `src/app/page.tsx`, implement the logic to show the `Greeting` component first. After the user clicks "begin," show the main two-panel layout (`LeftPanel` and `RightPanel`).
```
