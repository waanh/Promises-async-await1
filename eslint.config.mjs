export default [
  {
    ignores: ["dist/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      "semi": ["error", "always"],
      "no-unused-vars": "warn",
      "eqeqeq": ["error", "always"],
      "no-console": "off",
    },
  },
];
