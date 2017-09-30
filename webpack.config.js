var webpack = require('webpack')
var path = require('path')
const packageJSON = require('./package.json')

const env = process.env.ENV

let plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: ((e) => {
        const m = {
          dev: 'development',
          beta: 'production',
          prod: 'production',
        }
        return JSON.stringify(m[e])
      })(env),
    },
    ENV: env,
    __VERSION_NUMBER__: JSON.stringify(packageJSON.version),
  }),
  new webpack.BannerPlugin('This file is created by TongZhao'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
]

if (env === 'dev') {
  plugins.push(new webpack.HotModuleReplacementPlugin())
  plugins.push(new webpack.NamedModulesPlugin())
} else {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
  output: {
    comments: false,
  },
  compressor: {
    sequences: false,     // join consecutive statemets with the “comma operator”
    properties: false,    // optimize property access: a['foo'] → a.foo
    dead_code: false,     // discard unreachable code
    drop_debugger: true,  // discard “debugger” statements
    unsafe: false,        // some unsafe optimizations (see below)
    conditionals: true,   // optimize if-s and conditional expressions
    comparisons: true,    // optimize comparisons
    evaluate: false,      // evaluate constant expressions
    booleans: true,       // optimize boolean expressions
    loops: true,          // optimize loops
    unused: true,         // drop unused variables/functions
    hoist_funs: true,     // hoist function declarations
    hoist_vars: true,     // hoist variable declarations
    if_return: true,      // optimize if-s followed by return/continue
    join_vars: true,      // join var declarations
    cascade: false,       // try to cascade `right` into `left` in sequences
    side_effects: false,  // drop side-effect-free statements
    warnings: true,       // warn about potentially dangerous optimizations/code
    global_defs: {},      // global definitions
  },
}))
}

const webpackConfig = {
  entry: {
    src: [path.join(__dirname, 'src/index.js')],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:8].dist.js',
    publicPath: ((e) => {
        const m = {
          dev: '/static',
          beta: '//s3.cn-north-1.amazonaws.com.cn/planet-assets/static-ops-local/',
          prod: '//s3.cn-north-1.amazonaws.com.cn/planet-assets/static-ops/',
        }
        return m[e]
      })(env),
  },
  devServer: {
    port: 48770,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
  },
  plugins,
}

module.exports = webpackConfig
