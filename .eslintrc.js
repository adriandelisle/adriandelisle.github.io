module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'components',
            group: 'internal',
          },
          {
            pattern: 'components/**',
            group: 'internal',
          },
          {
            pattern: 'pages/**',
            group: 'internal',
          },
          {
            pattern: 'themes/**',
            group: 'internal',
          },
          {
            pattern: 'public/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-no-target-blank': 'error',
  },
}
