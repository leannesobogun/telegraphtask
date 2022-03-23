const db = require('../dbConfig/init');

async function createNewStory(req, res) {
  try {
    const insertedStory = await db.query("INSERT INTO stories (title, name, story) VALUES ($1, $2, $3) RETURNING *;", [req.body.title, req.body.name, req.body.story]);
    res.send({id: insertedStory.id})
  } catch (err) {
    console.error(err);
    res.send({err: 'Story not found'})
  }
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