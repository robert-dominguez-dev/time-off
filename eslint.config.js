import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default tseslint.config(
    {
        ignores: ['dist', 'node_modules/**', 'cypress.config.ts'],
    },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react': reactPlugin,
            'react-hooks': reactHooksPlugin,
            'react-refresh': reactRefreshPlugin,
        },
        settings: {
            react: {version: 'detect'},
        },
        rules: {
            quotes: ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
            semi: ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            indent: ['error', 2, {SwitchCase: 1}],
            'array-bracket-spacing': ['error', 'always'],
            'object-curly-spacing': ['error', 'always'],
            'object-curly-newline': ['error', {multiline: true}],
            'object-property-newline': ['error', {allowAllPropertiesOnSameLine: false}],
            'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0}],
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'react/self-closing-comp': 'warn',
            'react/jsx-indent': ['error', 2],
            'react/jsx-indent-props': ['error', 2],
            'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
            'react/jsx-closing-tag-location': 'error',
            'react/jsx-first-prop-new-line': ['error', 'multiline'],
            'react/jsx-tag-spacing': [
                'error',
                {
                    closingSlash: 'never',
                    beforeSelfClosing: 'always',
                    afterOpening: 'never',
                    beforeClosing: 'never',
                },
            ],
            'react-hooks/rules-of-hooks': 'error',
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
        },
    }
);