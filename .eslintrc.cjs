/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'arrow-body-style': ['error', 'always'],
    'spaced-comment': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never',
      },
    ],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true,
      },
    ],
    'line-comment-position': [
      'error',
      {
        'position': 'above',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'default-case': 'error',
    'default-case-last': 'error',
    'eqeqeq': 'error',
    'block-scoped-var': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-inline-comments': 'error',
    'no-invalid-this': 'error',
    'no-lone-blocks': 'error',
    'no-undef-init': 'error',
    'no-useless-catch': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'require-await': 'error',
    'arrow-spacing': 'error',
    'brace-style': 'error',
    'no-whitespace-before-property': 'error',
    'switch-colon-spacing': 'error',
    'no-case-declarations': 'off',
  },
};
