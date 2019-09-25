let node_resolve = require('rollup-plugin-node-resolve');
let commonjs = require('rollup-plugin-commonjs-alternate');

module.exports = ['esm', 'cjs'].map(format => ({
    input: './src/preact-render-spy.js',
    output: {
        dir: './dist',
        format: format,
        entryFileNames: `[name].${format}.js`
    },
    external: ['preact'],
    plugins: [
        node_resolve(),
        commonjs()
    ]
}));