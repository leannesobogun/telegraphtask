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
//app
//	.route("/new")
//	.post(async (req, res) => {
//		res = await client.query('SELECT $1::text as message', ['Hello world!'])
//		console.log(res.rows[0].message) // Hello world!
//	});

app.listen(port, () => {
  console.log(`Telegraph app listening on port ${port}`);
});