import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/main.js',
    output: {
        file: "build/main.js",
        format: 'esm',
        inlineDynamicImports: true, //Necessary for jspdf
    },
    plugins: [nodeResolve(), commonjs()]
};
