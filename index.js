module.exports = {
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "@searchspring/eslint-config",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: true,
        },
      },
    ],
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      { ignoreParameters: true },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { classes: true, functions: false, typedefs: true, variables: true },
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-undef": "off",
  },
};
