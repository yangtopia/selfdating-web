const express = require('express');
const path = require('path');
const compression = require('compression');
const serveStatic = require('serve-static');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = ['test', 'production'].indexOf(process.env.NODE_ENV) === -1;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // Static 파일 중 서버 루트에 반드시 있어야 하는 것은 /static/_root 에 넣는다.
  // "/mainfest.json", "/tas-sw.js" 등...
  server.use(serveStatic(path.join(__dirname, '../static/_root')));
  if (!dev) server.use(compression());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
