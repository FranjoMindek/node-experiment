import js from "@eslint/js";
import stylisticPlugin from '@stylistic/eslint-plugin';
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from "eslint/config";
import globals from "globals";
import eslintTypescript from "typescript-eslint";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  eslintTypescript.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
  eslintPluginReactHooks.configs['recommended-latest'],
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintPluginUnicorn.configs.recommended,
  // Stylistic settings
  {
    plugins: {
      '@stylistic': stylisticPlugin
    },
    rules: {
      '@stylistic/indent': ['error', 2]
    }
  },
  // Functional settings
  {
    settings: {
      react: {
        version: "19"
      },
    },
    rules: {
      "unicorn/filename-case": ["error", {
        "case": "kebabCase", "ignore": [
          String.raw`.*\.(jsx|tsx)`
        ]
      }]
    }
  },

]);

