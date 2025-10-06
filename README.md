# AI Assistant Dashboard - Frontend

## Overview
Hey there! This is my AI Assistant Dashboard project that I built for funny. It's basically a cool web app that lets you manage and interact with different AI models in one place. Think of it like a control center for AI stuff!

- **Monitor AI Models**  - See which models are running (GPT-4, Claude, local models, etc.)
- **Check System Status** - Keep track of memory usage, performance metrics
- **Chat Interface**  - Actually talk to your AI assistants
- **Analytics**  - View usage stats and performance data
- **Memory Management**  - Handle vector embeddings and context storage
- **Tools Integration**  - Manage different AI tools and utilities

## Tech Stack (The Cool Stuff I Used)
- **React 18** - For the main UI framework
- **TypeScript** - Because my professor said it's important for large projects
- **Vite** - Super fast build tool (way better than Create React App!)
- **Tailwind CSS** - For styling (no more CSS headaches!)
- **Shadcn/ui** - Beautiful pre-built components
- **React Router** - For navigation between pages
- **React Query** - For handling API calls and caching
- **Lucide Icons** - Pretty icons everywhere
- **Recharts** - For those sweet data visualizations

## Project Structure
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
│   ├── Models.tsx      # AI models management
│   ├── Memory.tsx      # Memory & storage
│   ├── Tools.tsx       # Tools integration
│   ├── Analytics.tsx   # Data visualization
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

## Features I'm Proud Of 
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark Theme** - Because dark mode is cool (and easier on the eyes)
- **Modern UI** - Uses the latest design patterns
- **Type Safety** - TypeScript catches bugs before they happen
- **Fast Performance** - Vite makes everything super snappy
- **Modular Components** - Easy to maintain and extend

## Pages Breakdown
1. **Dashboard** - Main overview with status cards and metrics
2. **Models** - Manage different AI models (GPT-4, Claude, custom models)
3. **Memory** - Handle vector databases and context storage
4. **Tools** - Integration with various AI tools and APIs
5. **Analytics** - Charts and graphs showing usage patterns

## Future Features (My TODO List)
- [ ] Internship Assistant integration
- [ ] Email Assistant module
- [ ] Research Assistant tools
- [ ] Training Pipeline management
- [ ] System Health monitoring
- [ ] Real-time notifications
- [ ] User authentication
- [ ] Custom model fine-tuning interface

## What I Learned Building This
- How to structure a large React application
- TypeScript best practices (still learning tbh)
- Modern CSS with Tailwind
- Component composition patterns
- State management without Redux (React Query is amazing!)
- Building responsive layouts

## Issues I Ran Into (And How I Fixed Them)
- **Initial Bundle Size** - Fixed by using Vite's code splitting
- **Type Errors** - Learned to properly type my components and props
- **Responsive Layout** - Tailwind's grid system saved me here
- **Component Re-renders** - Used React.memo and useCallback for optimization

## Contributing
If you want to contribute (or if this is a group project):
1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Test everything works
5. Create a pull request

## Contact
If you have questions about this project, feel free to reach out! I'm always happy to explain how something works or help debug issues.

---
*Built with ❤️ and lots of coffee during late-night coding sessions* ☕
