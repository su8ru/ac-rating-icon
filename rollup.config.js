import typescript from "rollup-plugin-typescript";
import packageJson from "./package.json";

const userScriptBanner = `
// ==UserScript==
// @name        ${packageJson.name}
// @namespace   https://su8ru.dev/
// @version     ${packageJson.version}
// @description ${packageJson.description}
// @author      ${packageJson.author}
// @supportURL  ${packageJson.bugs.url}
// @license     ${packageJson.license}
// @match       https://atcoder.jp/*
// @exclude     https://atcoder.jp/*/json
// ==/UserScript==

// ================================================
//   View source code before bundling on GitHub:
//   https://github.com/su8ru/ac-rating-icon
// ================================================ 
`.trim();

export default [
  {
    input: "src/index.ts",
    output: {
      banner: userScriptBanner,
      file: "dist/bundle.js",
    },
    plugins: [typescript()],
  },
];
