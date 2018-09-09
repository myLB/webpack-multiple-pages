const { argv: { env = {} } } = require('yargs')

/**
 * 定制 webpack 的日志输出，文档参考：https://webpack.js.org/configuration/stats/
 */
module.exports =
  env.ANALYZE === true
    ? {
        stats: 'none'
      }
    : {
        stats: {
          assets: true,
          chunks: false,
          modules: false,
          children: false,
          errors: true,
          errorDetails: true,
          warnings: true
        }
      }
