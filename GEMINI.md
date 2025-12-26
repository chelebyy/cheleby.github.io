# Digital Artifacts OS

## Project Overview

**Digital Artifacts OS** is a personal portfolio website designed with a distinct "brutalist" and cyberpunk/terminal aesthetic. It presents the user's projects ("artifacts") and activity logs in a system-like interface, complete with a command palette, boot sequences, and a "secure sector" for additional content.

The application is built using **React** (v19) and **TypeScript**, leveraging **Vite** for a fast development experience and build process. It features a bilingual interface (English and Turkish).

## Tech Stack

* **Framework:** React 19
* **Language:** TypeScript 5.8
* **Build Tool:** Vite 6.2
* **Styling:** Tailwind CSS (inferred from class usage)
* **Icons:** Material Symbols (via CDN or similar)

## Key Features

* **Terminal Aesthetic:** Custom cursor, boot animations, and a command-line interface (Command Palette).
* **GitHub Integration:** Fetches repositories dynamically from the GitHub API (user: `chelebyy`), falling back to mock data if the API fails.
* **Localization:** Built-in support for English (EN) and Turkish (TR).
* **Interactive Elements:**
  * **Command Palette:** Accessible via UI or shortcuts, supports commands like `theme`, `clear`, `contact`.
  * **System Control Panel:** Access user identity card and toggle system settings (e.g., CRT effects) via the header terminal.
  * **Secure Sector:** A "locked" section of projects that can be unlocked by the user.
  * **System Logs:** A scrolling terminal view of pseudo-system activities.

## Building and Running

### Prerequisites

* Node.js (version compatible with Vite/React 19)

### Commands

1. **Install Dependencies:**

    ```bash
    npm install
    ```

2. **Run Development Server:**

    ```bash
    npm run dev
    ```

    Starts the app at `http://localhost:3000` (or configured port).

3. **Build for Production:**

    ```bash
    npm run build
    ```

4. **Preview Production Build:**

    ```bash
    npm run preview
    ```

## Key Files & Structure

* **`App.tsx`**: The core of the application. Currently contains the main `App` component as well as all sub-components (`Header`, `Hero`, `Sidebar`, `ProjectCard`, `CommandPalette`, etc.). *Note: This is a large file and a candidate for refactoring into smaller, separate component files.*
* **`services/geminiService.ts`**: Despite the name, this file currently exports static **mock data** (`mockProjects`, `mockLogs`) used when API calls fail or for static content.
* **`types.ts`**: Contains TypeScript definitions for `Project`, `ActivityLog`, and `Language`.
* **`vite.config.ts`**: Vite configuration, setting the base path and server options.

## Development Conventions

* **Styling:** Extensive use of Tailwind CSS utility classes directly within JSX.
* **State Management:** Local state using `useState` and `useEffect` hooks.
* **Localization:** Translations are managed via a `translations` object within `App.tsx`.
* **Data Fetching:** The app attempts to fetch from GitHub first; error handling ensures the app remains functional by serving mock data.
