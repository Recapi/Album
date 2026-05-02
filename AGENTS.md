# Repository Guidelines

## Project Structure & Module Organization

This repository currently contains a standalone static web app:

- `figurinhas-copa-2026-clean-v3.html`: complete HTML document with inline CSS and JavaScript for tracking Copa 2026 sticker album progress.
- `AGENTS.md`: contributor and agent guidance.

There is no separate `src/`, `tests/`, or asset directory yet. If the app grows, split reusable JavaScript into `src/`, styles into `styles/`, and browser tests into `tests/` while keeping the HTML entry point clear.

## Build, Test, and Development Commands

No install or build step is required.

- Open locally: double-click `figurinhas-copa-2026-clean-v3.html` or open it from a browser with `Ctrl+O`.
- Quick syntax inspection: use browser DevTools Console after loading the page.
- Optional static server: `python -m http.server 8000`, then visit `http://localhost:8000/figurinhas-copa-2026-clean-v3.html`.

Use a local server if browser behavior differs when loading from `file://`.

## Coding Style & Naming Conventions

Use two-space indentation for HTML, CSS, and JavaScript, matching the existing file. Keep CSS custom properties in `:root` for shared colors and spacing. Use descriptive camelCase names for JavaScript variables and functions, such as `renderAlbumTable()` and `saveValue()`.

Prefer small render/update functions over adding large anonymous event handlers. Preserve the current Portuguese UI text unless the change explicitly updates product copy.

## Testing Guidelines

There is no automated test suite. Manually verify changes in a modern browser:

- Album cells toggle correctly.
- Envelope and extra counters persist after refresh.
- `localStorage` migration or key changes preserve existing user data.
- Tables and charts remain usable on narrow and wide screens.

When adding tests later, use browser-focused tests under `tests/` and name files by behavior, for example `album-persistence.spec.js`.

## Commit & Pull Request Guidelines

This folder is not currently a Git repository, so no commit history conventions are available. Use concise imperative commit messages, for example `Add sticker counter filters` or `Fix mobile table layout`.

Pull requests should include a short summary, manual test notes, and screenshots or screen recordings for visible UI changes. Mention any storage key or migration changes clearly because they can affect existing browser data.

## Security & Configuration Tips

The app stores data only in browser `localStorage`. Do not add external scripts, analytics, or network requests without documenting the purpose and privacy impact.
