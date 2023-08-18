module.exports = {
  root: true,
  env: { browser: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2021, lib: ['es2021'], sourceType: 'module' },
  plugins: ['import', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    'import/newline-after-import': 'error',
    'react/react-in-jsx-scope': 'off',
    'eol-last': 'error',
  },
};
