module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    globals: {
        React: "writable",
        module: "readonly", // module 변수를 읽기 전용으로 선언
    },
    rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "no-unused-vars": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": "error",
        "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".jsx"] }],
        "linebreak-style": 0,
        quotes: ["error", "double"],
        "@typescript-eslint/no-explicit-any": "warn",
        "react/prop-types": 0,
    },
}
