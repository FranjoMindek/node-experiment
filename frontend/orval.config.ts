import "dotenv/config";
import { defineConfig } from "orval";

export default defineConfig({
  "backend-api": {
    output: {
      namingConvention: "kebab-case",
      mode: "tags-split",
      target: "./src/api/endpoints",
      schemas: "./src/api/models",
      client: "react-query",
      httpClient: "fetch",
      // TODO: Why does this not work for models?
      fileExtension: ".generated.ts",
      clean: true,
      prettier: true,
      baseUrl: import.meta.env.VITE_API_URL,
    },
    input: {
      target: `${import.meta.env.VITE_API_URL}/swagger/json`,
    },
  },
});
