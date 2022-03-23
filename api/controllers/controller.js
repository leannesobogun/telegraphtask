const db = require('../dbConfig/init');

async function createNewStory(req, res) {
  res.send("yousartouartso");
}

async function showById(req, res) {
  try {
    const fetchedStory = await db.query("SELECT * FROM stories WHERE id=$1;", [req.params.id]);
    res.json(fetchedStory.rows[0]);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { createNewStory, showById }