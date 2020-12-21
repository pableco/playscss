/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const packageJSON = require('./package.json');
const common = require('./webpack.common.js');

const ENTRY_POINTS = {
    index: ['./template/index.js'],
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
    mode: 'production',
    entry: ENTRY_POINTS,
    output: OUTPUT_CONFIG,
    plugins: [
        new webpack.DefinePlugin({
            // removes a lot of debugging code in React
            'process.env': {
                BROWSER: true,
                VERSION: JSON.stringify(packageJSON.version),
            },
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
        }),
    ],
});
