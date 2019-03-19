module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    'sa': true,
    'wx': true,
    'pingpp_ui': true,
    'fundebug': true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'comma-dangle': 'off',    // 要求或禁止末尾逗号
    'no-param-reassign': ['error', {          //禁止对 function 的参数进行重新赋值
      props: true,
      ignorePropertyModificationsFor: [
        'Vue',
        'vm',
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    'vue/html-no-self-closing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-expressions': 0,
    'no-mixed-operators': 0,    //禁止混合使用不同的操作符
    'no-underscore-dangle': 0,   //禁止标识符中有悬空下划线(结尾下划线)
    'linebreak-style': 0,        //强制使用一致的换行风格 (导致windows报错)
    'vue/no-parsing-error': 0,
    'import/prefer-default-export': 0,
    'arrow-parens': 0,           // 要求箭头函数的参数使用圆括号
    'max-len': ["error", {
      "code": 120
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
