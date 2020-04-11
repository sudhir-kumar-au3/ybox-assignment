const { Competitions, Submissions } = require("../configDb");

const getCompetitions = (req, res) => {
  Competitions.find({})
    .populate("author")
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
};
const getSubmission = (req, res) => {
  if (req.params.id) {
    Submissions.find({
      competition: req.params.id,
    })
      .populate("author")
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.status(500).json({
          error: error.message,
        });
      });
  } else {
    res.json({ error: "No data found" });
  }
};
module.exports = {
  getCompetitions,
  getSubmission,
};
