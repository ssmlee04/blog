---
layout: article
title: Introduction to webpack
---
# {{ page.title }}

Webpack is a module bundler that reads the dependencies in your projects and bundle them into javascript files for the browser to use. This way you can reuse many of the modules in node.js but webpack makes them able to use in a browser environment. It is also really smart that you can specify rules to load files / CSS / fonts / images... etc  and webpack would put them in corresponding places for you so you can access them very easily.  Also in a browser there is no `require`, `process` variables as in node.js but somehow webpack converts those variables to something that browser can understand.

Also you can write rules for the webpack to run tasks before bundling the modules. 

When you run webpack it will look for `webpack.config.js` in the project folder. You can also specify what config to read with `--config` flag.

A sample webpack config lookes like this.

```
let config = {
  entry: [
    'babel-polyfill',
    './app/index.js'
  ],
  output: {
    path: 'dist',
    // filename: 'main.js'
    filename: 'bundle2.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          // presets: ['es2015', 'react', 'stage-0'],
          plugins: [
            ['transform-decorators-legacy']
          ]
        }
      }
    ]
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname) + '/app/js'
    }
  },
  node: {
    fs: 'empty'
  },
  plugins: [

  ],
  devServer: {
    contentBase: 'build'
  }
};


config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    __DEV__: true,
    'process.env': {
      // NODE_ENV: JSON.stringify('production')
    }
  }),
  new ExtractTextPlugin('style.css', { allChunks: true })
);


config.module.loaders.push({
  test: /\.global\.css$/,
  loaders: [
    'style-loader',
    'css-loader?sourceMap'
  ]
}, {
  test: /^((?!\.global).)*\.css$/,
  loaders: [
    'style-loader',
    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
  ]
}, {
  test: /\.scss$/,
  loader: 'style-loader!css-loader'
}, {
  test: /\.(ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
}, {
  test: /\.(png|jpg)$/,
  loader: 'file-loader'
});

config.plugins.push(
  // new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    __DEV__: false,
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  })
);
```

It does a few things here
* your browser will know how to parse css, images, fonts when it sees the links
* sets the environment variables for `process.env`
* project entry is `app/index.js`, which recursively read the entire project and reads the dependencies
* a few other things about es6 

bundle stuff to make it a single bundle is helpful when you have to do cross-platform things. in many cases you might not have `fs` but you can always use indexeddb or localstorage to come up with something similar and solve this issue. 

{{ page.date | date_to_string }}
