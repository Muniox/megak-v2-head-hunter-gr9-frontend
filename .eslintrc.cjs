module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "eslint-config-prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": ["./tsconfig.json"]
      },
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    "linebreak-style": ["error", "unix"],
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": [0],
    "import/extensions": [0],
    "import/no-unresolved": [
      2,
      {
        "ignore": ["^types$"]
      }
    ]
  }
}
