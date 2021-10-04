const fs = require("fs");
const express = require("express");
const ssrEntry = require("../../dist/server/server-entry.js");
const compression = require("compression");
const { SSR_PLACEHOLDER } = require("./constants.js");
const dotenv = require("dotenv");
const path = require("path");
const https = require("./https");

dotenv.config();

async function createProdServer() {
  const app = express();
  const port = process.env.PORT || 3000;
  const template = fs.readFileSync("./dist/client/index.html", "utf-8");

  app.use(compression());
  app.use(express.static("./dist/client", { index: false }));
  app.use(express.static("./public"));
  app.use("*", (req, res) => {
    const appHtml = ssrEntry.render(req.url);
    const response = template.replace(SSR_PLACEHOLDER, appHtml);
    res.set("Content-Type", "text/html");
    res.send(response);
  });

  https(app);

  app.listen(port, () => {
    console.log(`production server running on http://localhost:${port}`);
  });
}

createProdServer();
