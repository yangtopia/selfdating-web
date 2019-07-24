const express = require('express');
const path = require('path');
const compression = require('compression');
const serveStatic = require('serve-static');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = ['test', 'production'].indexOf(process.env.NODE_ENV) === -1;
const app = next({ dev });
const handle = app.getRequestHandler();

const _nextRoute = (server, path, nextPath, addedQuery = {}) => {
  server.get(path, (req, res) => {
    const { params = {}, query = {} } = req;
    return app.render(req, res, nextPath, { ...query, ...params, ...addedQuery });
  });
};

app.prepare().then(() => {
  const server = express();
  server.use(serveStatic(path.join(__dirname, '../static/_root')));
  if (!dev) server.use(compression());

  _nextRoute(server, '/viral/:id', '/viral');

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
