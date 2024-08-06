import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
});
