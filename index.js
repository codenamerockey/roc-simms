const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'Node 22' });
});

//for heroku we need a dynamic port
// we can read the port value added by the environment
const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`\n**api running on ${port}\n`));
