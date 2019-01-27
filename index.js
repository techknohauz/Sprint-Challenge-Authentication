require('dotenv').config(); // load .env variables

const { server } = require('./api/server.js');

const port = process.env.PORT || 9500;


server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
