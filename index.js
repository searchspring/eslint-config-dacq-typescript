module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'max-len': ['error', 120],
        'no-continue': 'off',
        'no-prototype-builtins': 'off',
        'no-restricted-syntax': 'off',
        'no-await-in-loop': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'import/no-default-export': 'error',
        'no-use-before-define': [
            'error',
            {functions: false, classes: true, variables: true}
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {'allowExpressions': true, 'allowTypedFunctionExpressions': true}
        ],
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {functions: false, classes: true, variables: true, typedefs: true}
        ],
        '@typescript-eslint/no-inferrable-types': [
            'warn',
            {ignoreParameters: true}
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: true
                }
            }
        ]
    }
}
