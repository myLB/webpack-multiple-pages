const path = require('path')
const { project, vendor, lib, dll } = require('./__entries')

module.exports = {
  ...require('./dev-server'),
  ...require('./loaders'),
  ...require('./plugins'),

  devtool: 'cheap-module-eval-source-map',
  entry: project,
  output: {
    filename: 'project/[name].js',
    /**
     * chunkFilename 只用来打包 require.ensure 或 import() 方法中引入的异步模块，若无异步模块则不会生成任何 chunk 块文件
     * 民间资料：https://www.cnblogs.com/toward-the-sun/p/6147324.html?utm_source=itdadao&utm_medium=referral
     */
    chunkFilename: 'async/[name].js'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.css',
      '.scss',
      '.sass',
      '.less'
    ],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      'react-dom': '@hot-loader/react-dom',
      'lodash/fp': path.resolve(__dirname, '../../utils/lodash/fp'),
      __src__: path.resolve(__dirname, '../../../src'),
      __prefix__: path.resolve(__dirname, '../../../src/__prefix__'),
      __assets__: path.resolve(__dirname, '../../../src/assets'),
      ...Object.entries(vendor).reduce(
        (alias, [key, value]) =>
          Object.assign(
            {
              [`@${key}`]: value
            },
            alias
          ),
        {}
      )
    }
  },
  context: path.resolve(__dirname, '../../../')
}
