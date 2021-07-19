module.exports = {
  globals: {
    JSX: true
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
    'cypress/globals': true
  },
  extends: [
    'plugin:cypress/recommended',
    'plugin:react/recommended',
    'prettier',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/resolver': {
      node: { extensions: ['.js', '.ts', '.tsx'] },
      typescript: { project: './tsconfig.json' }
    },
    react: {
      version: 'detect'
    }
  },
  plugins: [
    '@typescript-eslint',
    'cypress',
    'import',
    'prettier',
    'react-hooks',
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'generator-star-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', ts: 'never', tsx: 'never' }
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '.jest/setup.ts',
          'src/__tests__/**/*.ts',
          'src/__tests__/**/*.tsx',
          'src/mirage/**/*.js',
          '**/*.spec.tsx',
          '**/*.stories.tsx',
          '**/*.stories.mdx',
          'tools/plop/*.ts',
          'src/services/**/*.ts'
        ]
      }
    ],
    'multiline-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    'prettier/prettier': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.tsx', '.ts'] }
    ],
    'react/jsx-indent': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'space-before-function-paren': 'off'
  }
}
