# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website with an integrated blog system. The project uses a monorepo structure with separate frontend and backend applications.

**Stack:**
- Frontend: React 18 + TypeScript + Vite + SASS + React Router
- Backend: Express + TypeScript (minimal API, primarily serves static frontend)
- Database: MongoDB (configured but minimal usage)
- Node Version: >=18

## Project Structure

```
/
├── frontend/          # React SPA
│   ├── src/
│   │   ├── pages/     # Route-level components (Home, Blog, AboutMe, etc.)
│   │   ├── posts/     # Individual blog post components (TSX files)
│   │   ├── components/# Reusable UI components
│   │   ├── data/      # Static data definitions (post metadata)
│   │   ├── services/  # API client functions
│   │   ├── styles/    # SASS stylesheets
│   │   └── App.tsx    # Main routing configuration
│   └── dist/          # Production build output
└── backend/           # Express server
    ├── src/
    │   └── index.ts   # Main server file
    ├── routes/        # API route handlers
    ├── controllers/   # Business logic
    ├── models/        # MongoDB models
    └── dist/          # Compiled JavaScript output
```

## Development Commands

### Initial Setup
```bash
npm run install:all      # Install all dependencies (frontend + backend)
npm run install:front    # Install frontend dependencies only
npm run install:back     # Install backend dependencies only
```

### Running Development Servers
```bash
npm run dev:front        # Start frontend dev server (Vite)
npm run dev:back         # Start backend dev server (ts-node)
```

**Note:** Run both dev servers in separate terminals for full-stack development.

### Building for Production
```bash
npm run build:all        # Build both frontend and backend
npm run build:front      # Build frontend only (outputs to frontend/dist)
npm run build:back       # Build backend only (compiles TS to backend/dist)
```

### Linting
```bash
cd frontend && npm run lint    # Run ESLint on frontend code
```

### Starting Production Server
```bash
cd backend && npm start        # Runs compiled backend which serves frontend static files
```

## Architecture Notes

### Blog System Architecture
The blog uses a **file-based content system** rather than a database:

1. **Post Content**: Each blog post is a React component in `frontend/src/posts/`
2. **Post Metadata**: Centrally managed in `frontend/src/data/post.ts` as a `Posts` array
3. **Post Type Definition**: `PostMeta` type defines slug, title, description, date, tags, image, and lazy-loaded component
4. **Routing**: Dynamic routes handle individual posts via `/blog/:slug` pattern in `App.tsx`

**To add a new blog post:**
1. Create a new TSX component in `frontend/src/posts/` (e.g., `MyNewPost.tsx`)
2. Add metadata entry to the `Posts` array in `frontend/src/data/post.ts`
3. Use `React.lazy()` to import the component for code-splitting

### Frontend Routing
- Uses React Router v6 with `<Routes>` and `<Route>` in `App.tsx`
- Main routes: `/`, `/Blog`, `/blog/:slug`, `/contact`, `/about`, `/skills`, `/portfolio`, `/testimonials`
- Path aliases configured: `@/` maps to `frontend/src/` (defined in `vite.config.ts` and `tsconfig.app.json`)

### Backend Server
- Minimal Express server in `backend/src/index.ts`
- Serves static files from `frontend/dist` in production
- API endpoints prefixed with `/api`
- SPA fallback: All non-API routes serve `index.html` for client-side routing
- CORS enabled for development

### Tempo DevTools Integration
The project includes Tempo DevTools for development:
- Configured in `vite.config.ts` via `tempo()` plugin
- Routes dynamically loaded in `TempoRoutes.tsx`
- Activated via `VITE_TEMPO` environment variable

### TypeScript Configuration
- **Frontend**: Uses project references (`tsconfig.app.json` for app, `tsconfig.node.json` for Vite config)
  - Strict mode enabled
  - Path alias: `@/*` → `src/*`
  - Module resolution: bundler mode
- **Backend**: Compiles from `src/` to `dist/` using CommonJS modules

### Styling Approach
- Primary: SASS (`.scss` files in `frontend/src/styles/`)
- Main entry: `frontend/src/styles/index.scss` imported in `App.tsx`

## Environment Configuration

Backend requires a `.env` file in `backend/` directory (already exists, not tracked in git). Typical variables:
- `PORT`: Server port (defaults to 8080)
- MongoDB connection strings (if database features are used)

## Key Implementation Patterns

1. **Component Organization**: Pages are route-level containers, components are reusable UI elements
2. **Code Splitting**: Blog posts use `React.lazy()` for automatic code splitting
3. **Static Assets**: Stored in `frontend/public/assets/` (referenced as `/assets/` in code)
4. **API Communication**: Centralized in `frontend/src/services/api.ts` with `BASE_URL` configuration
5. **Content is Code**: Blog posts are TypeScript/React components, not markdown or CMS entries
