const mix = require('laravel-mix');
const path = require("path");
const webpack = require('webpack')

mix.webpackConfig({
    resolve: {
        alias: {
            CSS: path.resolve(__dirname, './resources/css'),
            JS: path.resolve(__dirname, './resources/js'),
            Vue: path.resolve(__dirname, './resources/js/vue'),
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false,
        }),
    ],
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss"),
    ]);
