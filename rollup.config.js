import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import path from 'path';
import json from "@rollup/plugin-json";

// 获取当前文件所在目录的绝对路径
const projectRootDir = path.dirname(import.meta.url);

export default [
  {
    input: "src/main.ts",
    plugins: [
      json(),
      typescript(),
      babel({
        babelrc: false,
        presets: [["@babel/preset-env", { modules: false, loose: true }]],
        plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]],
        exclude: "node_modules/**",
      }),
      alias({
        entries: [
          { find: '@', replacement: path.resolve(projectRootDir, 'src') }
        ]
      }),
    ],
    output: [{ file: "bin/www.js", format: "esm" }],
  },
];
