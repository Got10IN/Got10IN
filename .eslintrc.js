module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'plugin:react/jsx-runtime',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        'react-hooks/exhaustive-deps': 0,
    },
}
