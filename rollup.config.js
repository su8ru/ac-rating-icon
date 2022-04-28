import typescript from "rollup-plugin-typescript";
import packageJson from "./package.json";

const userScriptBanner = `
// ==UserScript==
// @name        ${packageJson.name}
// @namespace   https://su8ru.dev/
// @version     ${packageJson.version}
// @description ${packageJson.description}
// @author      ${packageJson.author}
// @license     ${packageJson.license}
// @match       https://atcoder.jp/*
// @exclude     https://atcoder.jp/*/json
// ==/UserScript==`.trim();

export default [
  {
    input: "src/index.ts",
    output: {
      banner: userScriptBanner,
      file: "dist/dist.js",
    },
    plugins: [typescript()],
  },
];
