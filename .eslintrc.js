module.exports = {
  extends: [
    'eslint:recommended', // eslint
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/stylistic', // @typescript-eslint/eslint-plugin
    'plugin:jest/recommended', // eslint-plugin-jest
    'plugin:jest/style', // eslint-plugin-jest
    'plugin:import/recommended', // eslint-plugin-import
    'plugin:import/typescript', // eslint-import-resolver-typescript
    // 'plugin:react/recommended', // eslint-plugin-react  // TODO: enable for React
    // 'plugin:react-hooks/recommended', // eslint-plugin-react-hooks  // TODO: enable for React
    // 'plugin:jsx-a11y/recommended', // eslint-plugin-jsx-a11y  // TODO: enable for React
    'prettier', // eslint-config-prettier
  ],
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
    es2022: true,
  },
  plugins: ['@typescript-eslint', 'jest'], // TODO: add 'react', 'react-hooks', 'jsx-a11y' when Using React
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: false, // TODO: set to true for React
    },
  },
  settings: {
    jest: {
      version: require('jest/package.json').version,
    },
    'import/resolver': { typescript: true, node: true }, // eslint-plugin-import
    // react: {
    //   version: require('react/package.json').version,  // TODO: uncocmment for React
    // },
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme'], location: 'anywhere' }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'warn',
    'import/export': 'warn',
    'import/no-deprecated': 'warn',
    'import/no-empty-named-blocks': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-mutable-exports': 'warn',
    'import/no-unused-modules': ['off', { missingExports: false, unusedExports: false }], // set { missingExports: true, unusedExports: true } for more strict linting
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error', // circular dependencies
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'warn',
    'import/no-named-as-default-member': 'off',
    'import/consistent-type-specifier-style': 'warn',
    'import/exports-last': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-default-export': 'warn',
    'import/no-unassigned-import': 'error',
  },
  reportUnusedDisableDirectives: true,
};
