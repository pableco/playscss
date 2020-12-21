/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const JS_RULES = {
    test: /\.(js|jsx)$/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-react',
                '@babel/preset-env',
            ],
        },
    },
};

const SCSS_RULES = {
    test: /\.s[ac]ss$/i,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
    ],
};

const CSS_RULES = {
    test: /\.css$/i,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
    ],
};

const IMAGES_RULES = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
};

const SVG_RULES = {
    test: /\.(svg)/,
    use: [
        {
            loader: 'babel-loader',
        },
        {
            loader: '@svgr/webpack',
        },
    ],
};

module.exports = {
    module: {
        rules: [
            JS_RULES,
            CSS_RULES,
            SCSS_RULES,
            IMAGES_RULES,
            SVG_RULES,
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'template/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    devtool: 'source-map',
};
