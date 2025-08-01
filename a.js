var app = require("http");

app
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World");
    console.log("Request received:", req.method, req.url);
    res.end();
  })
  .listen(5000, () => {
    console.log("Server is up at 5000");
  });
