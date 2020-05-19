const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require("path");

const csvConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.csv$/,
            loader: 'csv-loader',
            options: {
                dynamicTyping: true,
                header: true,
                skipEmptyLines: true,
                fastMode: true,
            }
        })
        config.resolve.alias.images = path.join(__dirname, "images");
        return config
    }
}

module.exports = withPlugins([
    [optimizedImages, {
        optimizeImagesInDev: false,
        mozjpeg: {
            dct: "fast",
            
        },
        pngquant: {
            speed: 10,
        },
    }]
], csvConfig);