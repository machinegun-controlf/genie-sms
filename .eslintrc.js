module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:promise/recommended',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    plugins: ['unused-imports', 'react-hooks', 'promise', 'import'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        '@typescript-eslint/ban-ts-comment': 1,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/consistent-type-assertions': 2,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 2,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-empty-function': 1,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/no-non-null-assertion': 2,
        '@typescript-eslint/no-unnecessary-type-constraint': 0,
        '@typescript-eslint/no-unused-vars': [
            1, // FIXME: 2로 변경
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/ban-types': 1, // FIXME: 2로 변경
        'import/order': [
            2,
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'unknown'],
                pathGroups: [
                    {
                        pattern: '{react*,react*/**}',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react', 'react-dom'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
        'no-else-return': 2,
        'no-restricted-syntax': [
            2,
            {
                selector: "LogicalExpression[right.type='AssignmentExpression']",
                message: 'right-hand assign is not allowed',
            },
        ],
        'promise/param-names': 0,
        'promise/catch-or-return': 0,
        'promise/always-return': 0,
        'react/prop-types': 0,
        'react/jsx-no-target-blank': 0,
        'react-hooks/exhaustive-deps': 1,
        'react-hooks/rules-of-hooks': 0,
        'react/display-name': 0,
        'react/no-unknown-property': 0,
        'react/jsx-key': 0,
        'react/react-in-jsx-scope': 0,
        'unused-imports/no-unused-imports-ts': 2,
        'unused-imports/no-unused-vars-ts': 0,
    },
    settings: {
        react: {
            pragma: 'React',
            version: '18.0',
        },
    },
};
