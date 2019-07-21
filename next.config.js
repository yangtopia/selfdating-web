const withSass = require('@zeit/next-sass');
const appConfig = require('./app.config');

module.exports = withSass({
  cssModules: true,
  webpack(config, options) {
    // src 폴더를 config.resolve.modules에 추가
    config.resolve.modules.unshift(__dirname + '/src');
    return config;
  },
  env: {
    ...appConfig
  }
});
