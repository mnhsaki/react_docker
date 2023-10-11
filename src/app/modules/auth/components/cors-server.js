const cors_proxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = 8080;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins during development
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere server is running on ${host}:${port}`);
  });
