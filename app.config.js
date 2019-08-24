const packageJson = require('./package.json');
const APP_VERSION = packageJson.version;

const envConfig = {
  development: {
    APP_VERSION,
    APP_ENV: 'dev',
    API_DOMAIN: 'https://api.dev.selfdating.org'
  },
  production: {
    APP_VERSION,
    APP_ENV: 'prod',
    API_DOMAIN: 'https://api.selfdating.org'
  }
};

module.exports = envConfig[process.env.NODE_ENV || 'development'];
