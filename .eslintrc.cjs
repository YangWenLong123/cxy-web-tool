/*
 * @Author: along
 * @Description:
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-09 16:34:29
 * @FilePath: /cxy-web-tool/.eslintrc.cjs
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ],
    indent: 'off',
    semi: [2, 'always'],
    quotes: [0, 'single'],
    "import/no-duplicates": ["error", { considerQueryString: true }]
  }
};
