Place your exported Figma assets in this folder.

Usage:
- Import assets in code using the `figma:asset/*` alias.
  Example:
    import connectDataImg from 'figma:asset/307636bf87994c31716a2c02068ffa1ecb15c425.png'

Notes:
- This project includes a TypeScript `paths` mapping in `tsconfig.json` that
  maps `figma:asset/*` -> `src/figma/assets/*` for editor resolution.
- You'll still need to ensure your bundler (Vite, Webpack, Next.js) understands
  the same alias or configure it accordingly (e.g., `vite.config.ts` or
  `next.config.js`). If you want, I can add bundler config for your setup.
