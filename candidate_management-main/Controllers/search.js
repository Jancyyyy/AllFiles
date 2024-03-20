const Candidate = require("../Models/candidates");
const getCandidatesStrict = async (req, res, next) => {
  try {
    const currentPage = +req.query.page || 1;
    console.log(
      "page : " +
        currentPage +
        "candidate_name : " +
        req.query.candidate_name +
        " email : " +
        req.query.email +
        " role : " +
        req.query.role +
        " status : " +
        req.query.status,
    );
    const perPage = 10;
    let totalItems = 0;
    dbConstraint = {};
    if (req.query.candidate_name) {
      dbConstraint.candidate_name = {
        $regex: req.query.candidate_name,
        $options: "i",
      };
    }
    if (req.query.email) {
      dbConstraint.email = {
        $regex: req.query.email,
        $options: "i",
      };
    }
    if (req.query.role) {
      dbConstraint.role = req.query.role;
    }
    let dbConstraint2 = {};
    if (req.query.status) {
      dbConstraint2["Candidate_Status.candidate_status"] =
        req.query.status;
    }
    console.log(dbConstraint2, req.query.status);

    totalItems = await Candidate.addCandid.aggregate([
      {
        $lookup: {
          from: "candidates_status",
          localField: "candidate_status_id",
          foreignField: "candidate_status_id",
          as: "Candidate_Status",
        },
      },
      { $match: { ...dbConstraint, ...dbConstraint2 } },
    ]);
    let user = await Candidate.addCandid.aggregate([
      {
        $lookup: {
          from: "candidates_status",
          localField: "candidate_status_id",
          foreignField: "candidate_status_id",
          as: "Candidate_Status",
        },
      },
      { $match: { ...dbConstraint, ...dbConstraint2 } },
    ]);
    if (user.length === 0) {
      return res.status(404).json({
        message: "Candidate details not found",
        totalItems: 0,
      });
    }
    res.status(200).json({
      message: "Successfully Fetched the User",
      candidate: user,
      totalItems: totalItems.length,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getCandidatesStrict };
