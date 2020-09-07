module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'project': './tsconfig.json',
    },
    'plugins': [
        '@typescript-eslint',
        'react'
    ],
    'rules': {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
}
