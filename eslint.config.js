import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist', 'node_modules'], // pastas ignoradas
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 0
    }
  }
];