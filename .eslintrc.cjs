module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // 可临时清空以调试问题
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "19.0" } }, // 更新 React 版本
  plugins: [],
  rules: {
    // 可暂时移除 react-refresh 的规则
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
  },
};
