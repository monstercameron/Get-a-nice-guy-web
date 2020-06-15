module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ["google", "prettier"],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
};
