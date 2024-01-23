const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const queryString = require("querystring");

const server = http.createServer();
const PORT = 3001;

const mimetypes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
};

const getResource = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

server.on("request", (req, res) => {
  let url = req.url;
  switch (url) {
    case "/":
      getResource("./public/index.html")
        .then((resource) => res.end(resource))
        .catch((err) => console.log(err));
      break;
    case `/success${queryString}`:
      getResource("./public/success.html")
        .then((resource) => res.end(resource))
        .catch((err) => console.log(err));
      break;
    case "/css/reset.css":
      getResource("./public/css/reset.css")
        .then((resource) => res.end(resource))
        .catch((err) => console.log(err));
      break;
    case "/css/styles.css":
      getResource("./public/css/styles.css")
        .then((resource) => res.end(resource))
        .catch((err) => console.log(err));
      break;
    case "/index.js":
      getResource("./public/index.js")
        .then((resource) => res.end(resource))
        .catch((err) => console.log(err));
      break;
    case "/assets/images/illustration-sign-up-mobile.svg":
      getResource("./public/assets/images/illustration-sign-up-mobile.svg")
        .then((resource) => res.end(resource))
        .catch((err) => console.log(err));
      break;
    case "/assets/images/favicon-32x32.png":
      getResource("./public/assets/images/favicon-32x32.png")
        .then((resource) => res.end(resource))
        .catch((err) => console.log(err));
      break;
    default:
      console.log(req.url);
    /* let query = queryString.parse(req.url);
      console.log(query); */
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
