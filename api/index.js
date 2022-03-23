const express = require('express')
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
//const { Client } = require('pg')
//const client = new Client()
app.use(express.urlencoded({ extended: true }));

const port = 3000;
app.use(express.static(path.join(__dirname, "./public")));
const storyRoutes = require("./routes/story");
app.use("/story", storyRoutes);

app.listen(port, () => {
  console.log(`Telegraph app listening on port ${port}`);
});