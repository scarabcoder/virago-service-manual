const path = require('path');
// razzle.config.js
'use strict';
module.exports = {
    options: {
        buildType: 'serverless'
    },
    modifyPaths({
                    paths,
                }) {
        paths.prodAppServerIndexJs = path.join(paths.appSrc, 'index.prod');
        return paths;
    },
    modifyWebpackConfig({
                            env: {
                                target,
                                dev,
                            },
                            webpackConfig,
                            paths,
                        }) {
        if (target === 'node') {
            if (!dev) {
                webpackConfig.entry.server = [paths.prodAppServerIndexJs];
            }
        }
        return webpackConfig;
    },
};