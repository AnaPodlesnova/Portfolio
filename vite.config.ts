// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: ["babel-plugin-styled-components"],
//       },
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   }
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/repo-name/" : "/",
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));