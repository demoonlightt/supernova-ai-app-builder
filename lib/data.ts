import { Sparkles, Zap, Code2, Eye, Package, ImageIcon } from "lucide-react";

export const SUGGESTIONS = [
  "A pastel Spotify stats dashboard",
  "A cute kanban board with stickers",
  "A cozy weather app with cute icons",
  "A sweet budget & shopping tracker",
  "A cafe-inspired aesthetic recipe finder",
  "A cute pomodoro timer with tasks",
  ,
];

export const FEATURES = [
  {
    icon: Zap,
    label: "Instant generation",
    desc: "Describe your app in plain English. Gemini 3.5 Flash returns production-ready React + Tailwind code in seconds.",
  },
  {
    icon: Eye,
    label: "Live preview",
    desc: "Your app renders instantly in the browser via Sandpack. No install, no build step — just a working preview.",
  },
  {
    icon: Code2,
    label: "Full source code",
    desc: "Browse every generated file. Edit directly in the built-in editor and watch the preview update in real time.",
  },
  {
    icon: Package,
    label: "Smart packages",
    desc: "AI picks the right npm packages. We validate them against the npm registry and filter hallucinated ones silently.",
  },
  {
    icon: Sparkles,
    label: "AI error recovery",
    desc: "When your preview throws an error, a banner appears. One click sends the error to AI and auto-fixes the code.",
  },
  {
    icon: ImageIcon,
    label: "Image-aware prompts",
    desc: "Attach screenshots or mockups to your prompt. The AI reads them and generates code that matches your design.",
  },
];

export const STEPS = [
  {
    number: "01",
    label: "Share your vision",
    desc: "Type a prompt, pick a cute suggestion, or drop in screenshots for inspiration.",
  },
  {
    number: "02",
    label: "AI works its magic",
    desc: "Supernova writes clean React + Tailwind components and structures your layout instantly.",
  },
  {
    number: "03",
    label: "Preview & aesthetic check",
    desc: "See your app live instantly. Chat with the AI to tweak colors, fonts, or add features.",
  },
  {
    number: "04",
    label: "Launch it live",
    desc: "Export your code to CodeSandbox, copy the source, or deploy it to share with friends.",
  },
];

export const PLACEHOLDERS = [
  "A pastel agenda planner with aesthetic stickers and mood-based sorting…",

  "A coquette coin tracker with pink aesthetic graphs and sparkling assets…",

  "A dreamy diary studio with soft fonts and instant magic rendering…",

  "A boutique spending ledger with cute monthly aesthetics and lifestyle diaries…",

  "A self-care ritual companion with glowing streaks and glittery habit grids…",
];
