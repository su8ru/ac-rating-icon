module.exports = {
  extends: ["typescript", "prettier"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { ignoreRestSiblings: true },
        ],
      },
    },
  ],
};
