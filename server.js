const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const proxyMatch = /^\/proxy\/(.+)/;

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: path.join(__dirname, '.env.development')
  });
}

const server = http.createServer((req, res) => {
  if (proxyMatch.test(req.url)) {
    const match = req.url.match(proxyMatch);
    const url = match[1];
    http.get(url, (response) => {
      response.on('error', err => {
        res.statusCode = 400;
        res.end(err.message);
      }).pipe(res);
    });
  } else {
    // If requesting a file
    if (/\.[^/]+$/.test(req.url)) {
      try {
        res.setHeader('Content-Type', mime.lookup(req.url));

        // Try reading file
        fs.createReadStream(path.join(__dirname, 'build', req.url)).on('error', err => {
          res.statusCode = 404;
          res.end(err.message);
        }).pipe(res);
      } catch (err) {
        res.statusCode = 404;
        res.end();
      }
    } else {
      res.setHeader('Content-Type', 'text/html');

      // Any other path, yields index.html
      fs.createReadStream(path.join(__dirname, 'build/index.html')).pipe(res);
    }
  }
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`server listening on localhost:${server.address().port}`);
});
