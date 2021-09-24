import fs from "fs";
import path from "path";
import express from "express";
import { createServer } from "vite";

async function createExpressServer() {
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
        "./src/server/server-entry.tsx"
      );
      const appHtml = await render(url);
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res
        .status(200)
        .set({
          "Content-Type": "text/html",
        })
        .end(html);
    } catch (e) {
      // hmm, probably fs error
      vite.ssrFixStacktrace(e);
      console.log(e);
      res.status(500).end(e?.message || e);
    }
  });

  app.listen(3000, () => console.log("Express is listening on localhost:3000"));
}

createExpressServer();
