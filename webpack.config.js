const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
   mode: 'production',
   // entry: './src/index.js',
   output: {
      path: `${__dirname}/dist`,
      clean: true,
   },
   stats: {
      preset: 'normal',
      children: true,
   },
   resolve: {
      extensions: ['.js'],
      alias: {
         '@': `${__dirname}/src`,
      },
   },
   cache: {
      // type: 'memory',
      type: 'filesystem',
      buildDependencies: {
         config: [__filename],
      },
   },
   module: {
      rules: [{
         test: /\.(png|jpe?g|webp|avif|svg|gif|ico)$/i,
         type: 'asset/resource',
      }],
   },
   plugins: [
      new HtmlBundlerPlugin({
         entry: {
            'index': './src/index.html',
         },
      }),
   ],
};
