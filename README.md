# template



## eslint library

| library                           | Description                                          | dependencies                                                 |
| --------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| @typescript-eslint/eslint-plugin  | typescript 규칙들 포함                               |                                                              |
| @typescript-eslint/parser         | Eslint 가 TypeScript 를 lint 하도록 설정             |                                                              |
| eslint-config-airbnb-typescript   | airbnb rule 사용 위함                                | @typescript-eslint/eslint-plugin<br/>@typescript-eslint/parser |
| eslint-config-prettier            | eslint중 prettier와 충돌나는 부분 비활성화           |                                                              |
| eslint-import-resolver-typescript | typescript 내 path alias 를 lint 에서 지원하기 위함  | eslint-plugin-import                                         |
| eslint-plugin-import              | ES2015+의 import/export 구문 지원                    |                                                              |
| eslint-plugin-jsx-a11y            | JSX 지원                                             |                                                              |
| eslint-plugin-prettier            | prettier 에서 코드 포맷 상 문제를 eslint 에러로 출력 |                                                              |
| eslint-plugin-react               | react lint                                           |                                                              |
| eslint-plugin-react-hooks         | react hook lint                                      |                                                              |



## eslintrc

```json
{
  "env": {
    "browser": true // browser 실행
  },
  "settings": {
    "react": {
      "version": "17.0" // react 17 사용, React 필수 로드 옵션에서 제외(React 17+) https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md
    },
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] }, //ts,tsx 는 @typescript-eslint/parser 으로 파싱하기 위함
    "import/resolver": { "typescript": "./tsconfig.json" } // tsconfig내 path alias 지원
  },
  "plugins": ["import", "react", "prettier"],
  "extends": [
    "eslint:recommended", // https://eslint.org/docs/rules/
    "plugin:react/recommended", //https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    "plugin:react/jsx-runtime", // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
    "plugin:@typescript-eslint/recommended", // https://github.com/typescript-eslint/typescript-eslint/tree/3cf8e10b6928cc8b4ab1dcd63a84892549d63941/packages/eslint-plugin
    "plugin:import/recommended", // https://github.com/import-js/eslint-plugin-import#rules
    "plugin:import/typescript", // typescript 내 path alias 를 lint 에서 지원
    "airbnb-typescript", // https://github.com/airbnb/javascript 참고
    "plugin:prettier/recommended" //https://prettier.io/docs/en/integrating-with-linters.html
  ],
  "parserOptions": {
    "project": ["./tsconfig.json"] //@typescript-eslint/parser 에서 tsconfig에 규칙 로드
  },
  "rules": {
    "prettier/prettier": "error", // perttier 포맷과 맞지 않을 경우 error 노출
  }
}

```

