module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    "no-await-in-loop":'off',
    "class-methods-use-this": 'off',
    "import/prefer-default-export": 'off',
    "no-use-before-define": 'off',
    "no-restricted-properties": 'off',
    "space-in-parens": 'off',
    'eol-last': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ]
};
