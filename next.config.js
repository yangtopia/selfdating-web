const withSass = require('@zeit/next-sass');
module.exports = withSass({
  cssModules: true,
  target: 'serverless',
  webpack(config, options) {
    config.resolve.alias = Object.assign(config.resolve.alias, { 'react-dom': '@hot-loader/react-dom' });
    return config;
  }
});
