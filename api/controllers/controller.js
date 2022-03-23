app
	.route("/story/:id")
	.get(async (req, res) => {
    try {
      const story = await pool.query("SELECT * FROM stories WHERE id=$1;", [req.params.id])
      res.json(story.rows[0]);
    } catch (err) {
      console.error(err);
    }
	});

