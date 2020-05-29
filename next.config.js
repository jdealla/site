const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    webpack(config) {
        config.node = { 
            console: false,
            fs: 'empty',
            net: 'empty',
            tls: 'empty'
        }
        return config
    },
})