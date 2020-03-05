var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    node: true
  },
  extends: ['@vue/prettier', 'eslint:recommended', 'plugin:vue/essential'],
  overrides: [
    {
      env: {
        jest: true
      },
      files: ['**/__tests__/*.js', '**/tests/unit/**/*.spec.js']
    }
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  root: true,
  rules: {
    'no-console': isProduction ? 'error' : 'off',
    'no-debugger': isProduction ? 'error' : 'off'
  }
}
