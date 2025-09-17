import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "src/aboutMe.html",
        service: "src/service.html",
        learning: "src/Learning.html",
        learningDetail: "src/LearningDetail.html",
        contact: "src/contact.html",
      },
    },
  },
});
