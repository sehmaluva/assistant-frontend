# Personal AI Assistant Dashboard

## Overview
This project is a personal AI assistant dashboard focused on daily productivity, lightweight note capture, task tracking, planning, and contextual memory. Instead of feeling like a generic “AI control panel”, the interface aims to be calm, utility‑driven, and something you can leave open all day.

- **Chat** – Natural interaction (ask, recall, summarize, plan)
- **Tasks** – Simple focused task list your assistant can reference
- **Notes** – Quick scratchpad for ideas and meeting context
- **Planner** – Time blocks + energy guidance for intentional work
- **Memory** – View how contextual stores are filling up
- **Models & Tools** – Still available, but secondary to daily flow
- **Insights** – Light analytics for usage + performance

## Tech Stack
- **React 18** - For the main UI framework
- **TypeScript** - Because my professor said it's important for large projects
- **Vite** - Super fast build tool (way better than Create React App!)
- **Tailwind CSS** - For styling (no more CSS headaches!)
- **Shadcn/ui** - Beautiful pre-built components
- **React Router** - For navigation between pages
- **React Query** - For handling API calls and caching
- **Lucide Icons** - Pretty icons everywhere
- **Recharts** - For those sweet data visualizations

## Project Structure (simplified)
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn components (buttons, cards, etc.)
│   ├── ChatInterface.tsx
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   └── StatusCard.tsx
├── pages/              # Different app pages
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Tasks.tsx       # Personal task list
│   ├── Notes.tsx       # Note capture & recall
│   ├── Planner.tsx     # Time blocks + guidance
│   ├── Models.tsx      # Models (now secondary)
│   ├── Memory.tsx      # Memory stores
│   ├── Tools.tsx       # Tool management
│   ├── Analytics.tsx   # Insights
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main app component
```

## Getting Started (How to Run This Thing)

### Prerequisites
Make sure you have these installed:
- Node.js (version 18 or higher)
- npm, pnpm, or bun (I personally use pnpm because it's faster)

### Installation
1. Clone this repo (or download if you're not into git yet):
```bash
git clone [repo-url]
cd assistant-frontend
```

2. Install all the dependencies:
```bash
npm install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
# or
bun dev
```

4. Open your browser and go to `http://localhost:8080`

That's it! You should see the dashboard running.

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run build:dev` - Build in development mode
- `npm run lint` - Check for code issues
- `npm run preview` - Preview production build

## Core Features 
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark Theme** - Because dark mode is cool (and easier on the eyes)
- **Modern UI** - Uses the latest design patterns
- **Type Safety** - TypeScript catches bugs before they happen
- **Fast Performance** - Vite makes everything super snappy
- **Modular Components** - Easy to maintain and extend

## Pages
1. **Dashboard** – High‑level overview (focus tasks, active models, progress)
2. **Tasks** – Fast capture + completion tracking
3. **Notes** – Small, disposable context entries the assistant can reference
4. **Planner** – Daily time blocks + energy‑based guidance
5. **Memory** – Structured stores (short‑term, long‑term, episodic, cache)
6. **Models** – Visibility into model set (local / hosted / tuned)
7. **Tools** – Enable / configure functional tools
8. **Insights** – Usage, response time, distribution

## Roadmap
- [ ] Routines (automated morning / evening summary)
- [ ] Preferences panel (tone, verbosity, focus areas)
- [ ] Local-first encrypted note store
- [ ] Calendar + email integrations (privacy‑aware)
- [ ] Inline summarization of selected text
- [ ] Voice capture + quick transcript to notes
- [ ] Lightweight mobile layout optimizations
- [ ] Model selection per conversation thread

## What I Learned Building This
- How to structure a large React application
- TypeScript best practices (still learning tbh)
- Modern CSS with Tailwind
- Component composition patterns
- State management without Redux (React Query is amazing!)
- Building responsive layouts

## Design Notes
- Color palette intentionally muted & natural (teal + warm neutrals) to avoid “neon AI” aesthetic
- Gradients and glow effects removed/reduced for a calmer workspace feel
- Components biased toward dense information without feeling noisy
- Chat phrasing adjusted to feel like a personal helper, not a marketing bot
- Pages mapped to real workflows: capture → plan → execute → reflect

## Contributing
If you want to contribute (or if this is a group project):
1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Test everything works
5. Create a pull request

## Contact / Use
This is a personal project. Feel free to fork and adapt. Attribution appreciated but not required.

---
*Built with ❤️ and lots of coffee during late-night coding sessions* ☕
