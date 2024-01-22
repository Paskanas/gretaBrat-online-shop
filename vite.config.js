import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel([
            "resources/js/app.tsx",
            "resources/js/backBootstrap.ts",
            "resources/css/app.css",
            "resources/css/appblade.css",
        ]),
        react(),
    ],
});
