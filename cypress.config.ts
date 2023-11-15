import { defineConfig } from "cypress";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

export default defineConfig({
  env: { ...process.env },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.test.{js,jsx,ts,tsx,feature}",
  },
});
