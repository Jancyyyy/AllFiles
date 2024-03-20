const Interview = require("../models/interviews");
const Feedback = require("../models/feedbacks");
const Interveiw_Status = require("../models/interview_status");
const sendMail = require("../utils/mail");
const request = require("request-promise");

async function Schedule_interveiw(req, res) {
  const config = {
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InpQTFVtRVBMU0VpcUkwOHQ0X2t3bFEiLCJleHAiOjE2OTI3MTk4ODAsImlhdCI6MTY3NDM5Nzc3MH0.rFgU_js4iuVBRkLacrC3HladexbRkWr6f6aIvp1_Lwc",
    email: "dharshankumar.as@zensar.com",
  };
  try {
    console.log(req.body.Panel_Email);
    const options = {
      url: `https://api.zoom.us/v2/users/${config.email}/meetings`,
      method: "POST",
      auth: {
        bearer: config.token,
      },
      json: true,
      body: {
        start_time: req.body.Date,
        duration: 1,
        topic: "Interview",
        settings: {
          host_video: "true",
          participant_video: "true",
        },
        type: 2,
      },
    };
    const interveiwObject = new Interview({
      panel_availability_id: req.body.panel_availability_id,
      candidate_id: req.body.candidate_id,
      type_id: req.body.type_id,
      remark: req.body.remark,
      interview_status_id: req.body.interview_status_id,
    });
    await interveiwObject.save();
    request(options, (error, response, body) => {
      console.log(response.statusCode);
      console.log(body.join_url);
      if (!error && response.statusCode === 201) {
        sendMail.mailToCandidate(
          req.body.Candidate_Email,
          req.body.Date,
          req.body.Time,
          body.join_url,
        );
        sendMail.mailToPanel(
          req.body.Panel_Email,
          req.body.Date,
          req.body.Time,
          req.body.name,
          interveiwObject.id,
          body.join_url,
        );
        res.status(200).json({
          message: "Interveiw Successfully Scheduled",
          interveiwObject,
        });
      } else {
        res.send({ message: body.message });
      }
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

async function Add_Feedback_Form(req, res) {
  try {
    const feedbackobj = new Feedback({
      feedback_id: req.params.feedback_id,
      Skills: req.body.Skills,
      created_by: req.body.created_by,
    });
    await feedbackobj.save();
    res.status(200).json({
      message: "Interveiw Successfully Scheduled",
      feedbackobj,
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

async function Add_Interveiw_Status(req, res) {
  try {
    const interveiw_status_obj = new Interveiw_Status({
      interveiw_status_id: req.params.interveiw_status_id,
      interview_status: req.body.interview_status,
      created_by: req.body.created_by,
    });
    await interveiw_status_obj.save();
    res.status(200).json({
      message: "Interveiw Successfully Scheduled",
      interveiw_status_obj,
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

module.exports = {
  Schedule_interveiw,
  Add_Feedback_Form,
  Add_Interveiw_Status,
};
