const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const hostname = 'localhost';
const port = 8088;

app.get("/orders/:orderId", (req, res, next) => {
    console.log('received orderId: ' + req.params.orderId);
    res.json({
      "orderId": req.params.orderId
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
