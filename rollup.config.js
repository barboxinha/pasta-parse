import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

export default [
  {
    input: "src/pastaparse.js",
    output: {
      name: "pastaparse",
      file: pkg.browser,
      format: "umd",
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: [
            "node_modules/**",
            "src/tests/**",
            "docs/**"
        ],
      }),
    ],
  },
  {
    input: "src/pastaparse.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      babel({
        exclude: [
            "node_modules/**",
            "src/tests/**",
            "docs/**"
        ],
      }),
    ],
  },
];