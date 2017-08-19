module.exports = {
    //文件名 .eslintrc.json
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        //"semi": ["error", "always"],
        "no-empty": 0,
        "comma-dangle": 0,
        "no-unused-vars": 1,
        "react/jsx-uses-vars": 1,
        "react/jsx-uses-react": 1,
        "no-console": 1,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-spaced-func": 2,
        "no-use-before-define": 2,
        "no-duplicate-case": 2,
        "no-extra-parens": [2, "functions"],
        "no-multiple-empty-lines": [1, { "max": 2 }],
        "no-self-compare": 2,
        "accessor-pairs": 2,
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        "constructor-super": 2,
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": false
        }],
        "new-parens": 2,
        "indent": [1, 4],
        "no-array-constructor": 2,
        "newline-after-var": 1,
        "no-class-assign": 2,
        "no-cond-assign": 2,
        "no-mixed-spaces-and-tabs": [2, false]//禁止混用tab和空格
    }
}