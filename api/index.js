const express = require('express')
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
//const { Client } = require('pg')
//const client = new Client()
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "./public")));
const storyRoutes = require("./routes/story");
app.route("/").get((req, res) => {res.send("This is our amazing API")});
app.use("/story", storyRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Telegraph app listening on port ${process.env.PORT}`);
});