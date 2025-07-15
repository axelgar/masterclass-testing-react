import js from "@eslint/js";
// import eslintPluginJestDom from "eslint-plugin-jest-dom";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
// import eslintPluginTestingLibrary from "eslint-plugin-testing-library";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    plugins: { react },
    extends: [js.configs.recommended, reactHooks.configs["recommended-latest"], reactRefresh.configs.vite],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.vitest },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Enable this to have eslint best practices rules for React Testing Library
  // {
  //   files: ["**/*.test.{js,jsx}", "**/*.spec.{js,jsx}", "**/__tests__/**/*.{js,jsx}"],
  //   extends: [eslintPluginJestDom.configs["flat/recommended"], eslintPluginTestingLibrary.configs["flat/react"]],
  //   languageOptions: {
  //     globals: {
  //       ...globals.vitest,
  //     },
  //   },
  // },
]);
