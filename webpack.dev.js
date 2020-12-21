/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const ENTRY_POINTS = {
    index: ['./src/index.js'],
};

const OUTPUT_CONFIG = {
    // An absolute path to the desired output directory.
    path: path.resolve(__dirname, 'dist/'),

    // A filename pattern for the output files
    filename: 'index.js',

    // IMPORTANT!: This is the name of the global variable exported in browsers
    // Change it for the name you want your component to have as window.NAME
    library: 'PlayScss',

    libraryTarget: 'umd',
};

module.exports = merge(common, {
    mode: 'development',
    entry: ENTRY_POINTS,
    output: OUTPUT_CONFIG,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 8000,
    },
});
