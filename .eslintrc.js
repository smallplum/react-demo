module.exports = {
  // 指定编译运行环境
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  // 继承aribnb和airbnb/hooks代码检查规则
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  // extends: ['plugin:prettier/recommended'],
  // plugins: ['prettier'],
  // 使用pulgin-import, 包含在了airbnb里边了
  // plugins: ['import'],
  // 转换es6
  parser: 'babel-eslint',
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/self-closing-comp': 0,
    'react/jsx-closing-tag-location': 0,
    'react/prop-types': 0,
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-wrap-multilines': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'only-multiline'],
    'no-plusplus': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-console': 1,
    // 'max-len': ['error', { code: 230 }],
    'operator-linebreak': ['error', 'after'],
    'object-curly-newline': 0,
    'template-curly-spacing': 0,
    'arrow-body-style': 0,
    indent: 0,
    'implicit-arrow-linebreak': 0,
    'react/no-unknown-property': 0,
    'operator-linebreak': 0,
    'react/jsx-curly-newline': 0,
    // indent: [
    //   'error',
    //   2,
    //   {
    //     ignoredNodes: ['TemplateLiteral'],
    //   },
    // ],
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        // Unexpected use of file extension "jpg" for "@/assets/hot_scale.jpg"
        png: 'ignorePackages',
        jpg: 'ignorePackages',
      },
    ],
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码，ESLint-plugin-React,已经包含在airbnb里边了
    // react: {
    //   pragma: 'React',
    //   version: 'detect',
    // },
  },
  //
};
