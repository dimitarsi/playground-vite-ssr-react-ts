const fs = require("fs");
const https = require("https");

module.exports = function (app) {
  let credentials = null;
  const tlsPort = process.env.TLS_PORT || 3443;

  if (fs.existsSync("./certificates/snake-oil.pfx")) {
    const pfx = fs.readFileSync("./certificates/snake-oil.pfx");
    credentials = { pfx, passphrase: process.env.PFX_PASSPHRASE };
  }

  if (credentials) {
    const server = https.createServer(credentials, app);

    server.listen(tlsPort, () => {
      console.log(`https listens on ${tlsPort}`);
    });
  }
};
