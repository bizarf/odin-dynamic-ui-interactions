const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    entry: './src/modules/drop-down.js',
    output: {
        filename: './js/drop-down.js',
        path: path.resolve(__dirname, 'dist'),
    },
    entry: './src/modules/mobile-nav-menu.js',
    output: {
        filename: './js/mobile-nav-menu.js',
        path: path.resolve(__dirname, 'dist'),
    },
    entry: './src/modules/image-slider.js',
    output: {
        filename: './js/image-slider.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // optimization: {
    //     minimize: false
    // },
};