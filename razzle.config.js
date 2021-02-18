const path = require('path');

module.exports = {
    experimental: {
        newBabel: true,
        newExternals: true,
        newSplitChunks: true,
        newContentHash: true,
        newMainFields: true,
        reactRefresh: true,
    },
    modifyWebpackConfig: ({webpackConfig}) => {


        webpackConfig.resolve['alias'] = {
            'components': path.resolve('src/js/components/'),
            'containers': path.resolve('src/js/containers/'),
            '@root': path.resolve('src/'),
            '@images': path.resolve('public/images'),
            '@core': path.resolve('src/core'),
            '@hooks': path.resolve('src/hooks'),
            '@pages': path.resolve('src/pages'),
            '@sharedComponents': path.resolve('src/sharedComponents'),
            '@data': path.resolve('src/data'),
            '@services': path.resolve('src/services'),
        };

        return webpackConfig;
    }
};