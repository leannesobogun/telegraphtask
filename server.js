const express = require('express')
const cors = require('cors');
const path = require('path');

const port = 3000;
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

const routes = require("./controller");
app.use('/', routes);

app.listen(port, () => {
  console.log(`Shmoogle listening on port ${port}`);
});