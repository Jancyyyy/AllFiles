const InterviewType = require("../models/interview_types");
const InterviewStatus = require("../models/interview_status");

module.exports.getAllInterviewType = async (req, res) => {
  try {
    const interTypes = await InterviewType.find();

    res.status(200).json(interTypes);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.postInterviewStatus = async (req, res) => {
  try {
    const interviewStatus = new InterviewStatus({
      interview_status: "Scheduled",
    });

    await interviewStatus.save();

    res.status(200).json(interviewStatus);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.updatedInterviewStatus = async (
  req,
  res,
) => {
  const id = req.params.id;
  const updatedStatus = req.body.status;
  try {
    let interviewStatus = await InterviewStatus.updateOne(
      { interview_status_id: id },
      {
        $set: {
          interview_status: updatedStatus,
        },
      },
    );

    res.status(200).json(interviewStatus);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
