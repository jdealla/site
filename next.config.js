const path = require("path");

module.exports = {
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
        return config;
    }
}