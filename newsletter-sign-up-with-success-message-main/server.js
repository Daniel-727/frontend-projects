const http = require("http");
const path = require("path");
const fs = require("fs");

const host = "localhost";

const PORT = process.env.PORT || 8000;

const requestListener = function (req, res) {
  // Inefficient implementation of handling requests and responses
  /* if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  }

  if (req.url === "/success") {
    fs.readFile(path.join(__dirname, "success.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Tyoe": "text/html" });
      res.end(content);
    }); 
  } */

  // Better implementation of handling requests and responses
  // Build file path
  let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);

  // Get file extension
  let extname = path.extname(filePath);

  // Set initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".svg": // Correct svg content-type below
      contentType = "image/svg+xml";
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(content, "utf8");
        });
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
};

const server = http.createServer(requestListener);

server.listen(PORT, host, () => {
  console.log(`Server is running on http://${host}:${PORT}`);
});
