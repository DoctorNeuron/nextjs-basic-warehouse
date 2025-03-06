import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    files: ["**/*.{ts,js,tsx,jsx}"],
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "eqeqeq": "error",
      "semi": "error",
      "no-multiple-empty-lines": "error",
      "no-var": "error"
    },
  }
];

export default eslintConfig;
