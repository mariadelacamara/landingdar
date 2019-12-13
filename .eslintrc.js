module.exports = {
  
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
    "eslint-config-airbnb"
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  "parser": "babel-eslint",
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "react/state-in-constructor": 0,
    "react/jsx-fragments": 0,
    "require-jsdoc" : 0,
    "react/jsx-filename-extension": 0,
    "comma-dangle": 0,
    "import/prefer-default-export": 0,
    "arrow-parens": 0
  },
};
