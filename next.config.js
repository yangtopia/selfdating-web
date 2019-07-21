const withSass = require('@zeit/next-sass');
const appConfig = require('./app.config');

module.exports = withSass({
  cssModules: true,
  env: {
    ...appConfig
  }
});
