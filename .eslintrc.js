module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'project': ['./tsconfig.json']
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
  }
}
