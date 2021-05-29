module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['react-hooks', 'import'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Specify ESLint rules here. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'no-undef': 0,
    'no-restricted-syntax': 0,
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', { objects: 'never' }],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'arrow-parens': [2, 'as-needed'],
    'import/newline-after-import': ['error', { count: 2 }],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'react/destructuring-assignment': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off'
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
