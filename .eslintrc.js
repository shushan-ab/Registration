module.exports = {
    env: {
        browser: true,
        es6: true,
        jquery: true
    },
    extends: [
        'airbnb'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier',
    ],
    rules: {
        'no-debugger': 'off',
        'no-console': 'off',
        'no-param-reassign': 'off',
        'radix': 'off'
    },
};








