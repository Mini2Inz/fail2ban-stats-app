module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  rules: {
    'no-console':      process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger':     process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent':          ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'quotes':          ['error', 'single'],
    'semi':            ['error', 'always'],
    'no-var':          ['error']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
