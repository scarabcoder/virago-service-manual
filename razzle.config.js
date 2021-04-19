'use strict';

module.exports = {
    modifyWebpackConfig(
        {
            env: {
                target,
                dev
            },
            webpackConfig
        }) {
        return webpackConfig;
    }
}