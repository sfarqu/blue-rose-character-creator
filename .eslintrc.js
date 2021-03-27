module.exports = {
    "env": {
        "commonjs": true,
        "node": true,
        "browser": true,
        "es6": true,
        "jest": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
        "react-hooks"
    ],
    "ignorePatterns": [
        "node_modules"
    ],
    "rules": {
        "react/prop-types": 0
    },
    "settings": {
        "react": {
          "version": "detect",
        },
    },
};
