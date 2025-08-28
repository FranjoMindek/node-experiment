import js from "@eslint/js";
import stylisticPlugin from "@stylistic/eslint-plugin";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import globals from "globals";
import eslintTypescript from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  eslintTypescript.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
  eslintPluginReactHooks.configs["recommended-latest"],
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintPluginUnicorn.configs.recommended,
  stylisticPlugin.configs.customize({
    indent: 2,
    arrowParens: true,
    blockSpacing: true,
    braceStyle: "1tbs",
    commaDangle: "always-multiline",
    jsx: true,
    pluginName: "@stylistic",
    quoteProps: "consistent-as-needed",
    quotes: "double",
    semi: true,
    severity: "error",
  }),
  // Stylistic overrides
  {
    rules: {
      "@stylistic/jsx-one-expression-per-line": [
        "error",
        { allow: "single-line" }, // "single-child" is too restrictive
      ],
    },
  },
  // Functional overrides
  {
    settings: {
      react: {
        version: "19",
      },
    },
    rules: {
      "unicorn/filename-case": ["error", {
        case: "kebabCase",
        ignore: [
          String.raw`.*\.(jsx|tsx)`,
        ],
      }],
      "jsx-a11y/label-has-associated-control": [2, {
        labelComponents: ["Label"],
        labelAttributes: ["label"],
        controlComponents: ["Input"],
        depth: 2,
      }],
    },
  },

]);
