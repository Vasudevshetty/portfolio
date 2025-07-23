# 🧑‍💻 Vasudev D M — Terminal Portfolio (VS Code Style)

A clean, minimal, and interactive terminal-themed developer portfolio — now with **light/dark theme switching**. Inspired by the comfort of the terminal and the elegance of modern IDEs like VS Code.

Built using **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, this project is designed to showcase your engineering personality, not just your skills.

> 📂 All portfolio content is modularly maintained in `src/data/portfolio.ts`

---

## 🎯 Project Goals

- Reflect developer personality through an immersive CLI interface  
- Avoid cookie-cutter portfolios — offer interactivity and substance  
- Keep the UI minimal, elegant, and familiar to developers  
- Ensure high performance, accessibility, and clean mobile support  

---

## ✨ Features

### 🌐 UI & Interaction
- **Command-line Interface**: Supports commands like `whoami`, `skills`, `projects`, `cat resume.md`, etc.
- **VS Code Layout**: Sidebar navigation, tabbed view, terminal with file explorer
- **Light/Dark Theme Switcher**: Customizable themes with persistence (e.g. Matrix, Cyberpunk, Ocean, Minimal)
- **Keyboard Navigation**: Supports CLI-like shortcuts and command history
- **Mobile Responsive**: Works across devices with gesture support

| Feature                            | Description                                                                                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 🧠 **AI Assistant (ask)**          | Add `ask <question>` command that connects to OpenAI API to answer questions like: “Tell me about DeployIO” or “What skills does Vasudev know?” |
| 🗃 **Markdown File Viewer**        | Enable `cat resume.md` or `cat about.md` to render formatted Markdown using a lightweight viewer (like `react-markdown`)                        |
| 🎨 **Theme Switching (CLI + UI)**  | Support light/dark + presets like `Matrix`, `Ocean`, `Cyberpunk`. Toggle via CLI (`theme`) or button                                            |
| 🧪 **Easter Egg Commands**         | Add fun extras like `sudo`, `matrix`, `reboot`, `vasudev --dev-mode` to show animations or jokes                                                |
| 📁 **Fake File System Navigation** | Use `cd`, `ls`, and `tree` to explore virtual folders like `~/projects`, `~/experience`, `~/skills`                                             |
| 🐙 **GitHub Integration**          | `git log` command shows recent commits from your public GitHub repos using the GitHub API                                                       |
| 🧩 **Command Autocomplete**        | Show suggestions as users type (`tab` key support), with descriptions for commands                                                              |
| 🕹️ **Mini Game Mode**             | Optional command like `play` or `hack` that opens a tiny CLI-based puzzle (e.g., type-based challenge)                                          |
| 📈 **Analytics Integration**       | Track which sections users visit most (`projects`, `contact`, etc.) via lightweight analytics (Plausible, Umami)                                |
| 💾 **Download Commands**           | `download resume` triggers a PDF download of your resume directly via CLI                                                                       |
| 🔐 **Access Control Mode**         | Lock certain sections (like hidden projects) behind a password or special command (`access pro-mode`)                                           |


### 🧩 Terminal Commands

```bash
help          # Show all available commands
ls            # List files and directories
cat <file>    # Show file contents (e.g., resume.md)
pwd           # Current directory
whoami        # About Me
skills        # Technical stack
projects      # Portfolio projects
experience    # Work experience
education     # Education background
contact       # Contact info
theme         # Toggle light/dark/theme variants
clear         # Clear terminal
````

---

## 🛠️ Tech Stack

| Layer       | Technology                                    |
| ----------- | --------------------------------------------- |
| Frontend    | Next.js 15 (App Router)                       |
| Language    | TypeScript                                    |
| Styling     | Tailwind CSS with theme variants              |
| Animations  | Framer Motion                                 |
| Icons       | React Icons                                   |
| Data Source | `src/data/portfolio.ts`                       |
| Deployment  | Vercel                                        |
| SEO         | Meta tags, Open Graph, Twitter Cards, JSON-LD |

---

## 🧱 Folder Structure

```
src/
├── app/                     # Next.js pages & layouts
├── components/              # Terminal, Sidebar, Tabs, Viewer, etc.
├── data/portfolio.ts        # Central config for all content
├── utils/terminalCommands.ts# Terminal command logic
├── styles/                  # Tailwind config & global CSS
public/                      # Static files
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/vasudevshetty/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

---

## 🧳 Featured Projects

* **DeployIO** – Auto-generating DevOps Deployments
* **Voxalize** – Voice-based SQL Chat Assistant
* **StudySync** – Personalized AI Learning Platform

---

## 🧠 Skills Summary

* **Languages**: JavaScript, TypeScript, Python, C++, Java
* **Frameworks**: React, Next.js, Express, FastAPI
* **Databases**: MongoDB, PostgreSQL, Redis
* **DevOps**: Docker, GitHub Actions, AWS, Kubernetes
* **AI/ML**: LangChain, Hugging Face, OpenAI API

---

## 🧑‍💼 Professional Experience

* **Tech Officer**, Fauxigent Innovations (2024–Present)
* **Web Dev Lead**, GDSC (2024–Present)
* **Tech Member**, Programming Community (2024–Present)

---

## 🧪 Optional Enhancements

| Feature Idea           | Description                             |
| ---------------------- | --------------------------------------- |
| AI CLI Assistant       | `ask <question>` → responds with OpenAI |
| Easter Egg Commands    | `sudo`, `matrix`, `glitch`, `reboot`    |
| GitHub API Integration | `git log` to show recent commits/PRs    |
| Game Mode              | Terminal-based mini puzzle for fun      |

---

## 🌍 Live Demo

🔗 [https://vasudevshetty.xyz](https://vasudevshetty.xyz)

---

## 📬 Contact

* 🐙 GitHub: [@vasudevshetty](https://github.com/vasudevshetty)
* 💼 LinkedIn: [linkedin.com/in/vasudevshetty](https://linkedin.com/in/vasudevshetty)
* 🧠 Portfolio: [vasudevshetty.xyz](https://vasudevshetty.xyz)
* 💻 LeetCode: [leetcode.com/vasudevshetty](https://leetcode.com/vasudevshetty)

---

## 📄 License

MIT License © 2025 Vasudev D M

---

> *"Built for developers, by a developer. Not just a portfolio — an experience."*
