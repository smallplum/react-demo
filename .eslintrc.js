module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  // plugins: ['prettier'],
  rules: {
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-wrap-multilines': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-one-expression-per-line': 0,
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parser: 'babel-eslint',
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  }
};
