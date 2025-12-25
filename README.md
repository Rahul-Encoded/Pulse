# Pulse - Next.js Trading Dashboard

Pulse is a high-performance trading dashboard built with Next.js, styled with TailwindCSS, and powered by Redux-Toolkit for robust state management.

## 📁 Project Structure

This project follows a modular and scalable folder structure:

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts)
├── components/           # UI Component Library
│   ├── app-components/   # Feature-specific components
│   │   ├── ComonComponents/
│   │   ├── PopUpComponents/
│   │   └── TableComponents/
│   ├── ui/               # Shadcn Components
│   └── next-components/
├── lib/                  # Core Application Logic
│   ├── features/         # Redux Slices (presets, etc.)
│   ├── interface/        # TypeScript Definitions
│   ├── hooks.ts          # Typed Redux Hooks
│   ├── store.ts          # Root Store Configuration
│   └── utils.ts          # Utility Functions
```

### 🧠 State Management (Redux-Toolkit)

The application uses **Redux-Toolkit** to manage complex trading configurations, specifically focused on **Presets (P1, P2, P3)**.

- **Modular Slices**: Logic is encapsulated in feature-based slices (e.g., `presetsSlice.ts`).
- **Normalized Data**: Preset settings are stored in a map-like structure (`presets: Record<string, PresetSettings>`) to allow independent configuration for each preset ID.
- **Unified Actions**: Settings are updated via unified actions like `updatePresetSettings`, ensuring consistency across the UI.
- **Typed Hooks**: The app uses `useAppSelector` and `useAppDispatch` for type-safe state access and updates.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
