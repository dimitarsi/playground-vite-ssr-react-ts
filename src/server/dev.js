const fs = require("fs");
const path = require("path");
const express = require("express");
const { createServer } = require("vite");
const { SSR_PLACEHOLDER } = require("./constants.js");

async function createDevServer() {
  const app = express();

  const vite = await createServer({
    server: { middlewareMode: "ssr" },
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve("./index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);
      const { render } = await vite.ssrLoadModule(
        "./src/server/server-entry.tsx",
        {
          isolated: false,
        }
      );
      const context = {};
      const appHtml = await render(url, req.cookies, context);
      const html = template.replace(SSR_PLACEHOLDER, appHtml);

      if (context.url) {
        res.redirect(context.url);
      } else {
        res
          .status(200)
          .set({
            "Content-Type": "text/html",
          })
          .end(html);
      }
    } catch (e) {
      // hmm, probably fs error
      vite.ssrFixStacktrace(e);
      console.log(e);
      res.status(500).end(e?.message || e);
    }
  });

  app.listen(3000, () =>
    console.log("Dev server started on http://localhost:3000")
  );
}

createDevServer();
