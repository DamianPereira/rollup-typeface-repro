// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/main.js',
    plugins: [nodeResolve(), postcss()],
    output: {
        dir: 'dist/',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
        preserveModules: true,
    }
};
