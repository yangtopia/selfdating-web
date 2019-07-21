const withCss = require('@zeit/next-css');
const appConfig = require('./app.config');

module.exports = withCss({
  env: {
    ...appConfig
  }
});
