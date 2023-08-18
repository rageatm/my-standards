module.exports = {
  root: true,
  env: { jest: true, node: true },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2021, lib: ['es2021'], sourceType: 'module' },
  plugins: ['import', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    'import/newline-after-import': 'error',
    'no-console': ['error'],
    'eol-last': 'error',
  },
};
