# Copilot Instructions for entry-exit-app

This project is a React application bootstrapped with Create React App. It tracks vehicle entries and exits, with a focus on clear UI components and testable code. Follow these guidelines to maximize productivity and maintain consistency:

## Architecture Overview
- **Entry/Exit Tracking:** The app's main feature is managing vehicles currently inside the premises. The core UI logic is in `src/components/ActiveVehicles.tsx`.
- **Component Structure:** All UI components are in `src/components/`. The main app logic starts in `src/App.js` and is rendered via `src/index.js`.
- **Data Flow:** Components receive data via props. For example, `ActiveVehiclesTable` expects a list of vehicles and a callback for marking exits.
- **TypeScript Usage:** Some components (e.g., `ActiveVehicles.tsx`) use TypeScript for type safety, but the main app is in JavaScript. Maintain compatibility when adding new code.

## Developer Workflows
- **Start Development Server:**
  ```shell
  npm start
  ```
- **Run Tests:**
  ```shell
  npm test
  ```
- **Build for Production:**
  ```shell
  npm run build
  ```
- **Linting:** Uses Create React App defaults. ESLint config is in `package.json`.

## Project-Specific Patterns
- **UI Libraries:** Uses `lucide-react` for icons. Import icons as needed in components.
- **Responsive Tables:** See `ActiveVehicles.tsx` for examples of responsive table layouts using Bootstrap classes.
- **Testing:** All tests are in `src/` and use React Testing Library. See `App.test.js` for a basic example.
- **No Custom Routing:** The app currently does not use React Router or custom navigation.
- **No API Integration Yet:** Data is passed via props; there is no backend or API layer in the current codebase.

## Key Files & Directories
- `src/components/ActiveVehicles.tsx`: Main table for active vehicles, demonstrates data-driven UI and event handling.
- `src/App.js`: Main app component, entry point for UI.
- `src/App.test.js`: Example test using React Testing Library.
- `package.json`: Scripts, dependencies, and ESLint config.

## Conventions
- **Prefer Functional Components** and hooks for new code.
- **TypeScript** is used for some components; keep type definitions up to date.
- **Props-Driven Data:** Pass all data and callbacks via props for easy testing and reuse.
- **Bootstrap Classes:** Use Bootstrap for layout and styling, as seen in table and card components.

## Example: Adding a New Vehicle Table
- Create a new file in `src/components/`.
- Use TypeScript for type safety if possible.
- Import icons from `lucide-react`.
- Follow the responsive table pattern in `ActiveVehicles.tsx`.

---
For questions about project structure or conventions, check `README.md` or existing components for examples.
