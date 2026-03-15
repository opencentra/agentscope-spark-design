module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
   "@typescript-eslint/no-use-before-define": "off",
   "no-useless-escape": "off",
   "@typescript-eslint/no-unused-vars": "off",
  }
};
