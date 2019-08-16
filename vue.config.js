const path = require('path')
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'examples/main.js',
            // 模板来源
            template: 'public/index.html',
            // 输出文件名
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve('examples')) 
            .set('~', path.resolve('src'));
        config.module
            .rule('js')
            .include.add(/src/)
            .end()
            .include.add(/examples/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options;
            });
    }
}