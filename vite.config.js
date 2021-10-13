import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
   plugins: [reactRefresh()],
   build: {
      outDir: "./dist",
   },
   server: {
      strictPort: true,
      hmr: {
         protocol: "ws",
         host: "localhost",
         //port: 443, // Run the websocket server on the SSL port
      },
   },
});

// ! Before pushing
// - change localhost:3000 on index.html
