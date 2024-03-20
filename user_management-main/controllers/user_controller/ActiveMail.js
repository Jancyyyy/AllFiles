var nodemailer = require("nodemailer");

function sendActivemail(User_ID, Email) {
  var transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
      user: "g.sugurpatinti@zensar.com",
      pass: "Pasword@987654321",
    },
  });
  var mailOptions = {
    from: "g.sugurpatinti@zensar.com",
    to: Email,
    text:
      "Your account has been Activated successfully for Panel Management." +
      "\n User ID : " +
      User_ID +
      "\nYour Email : " +
      Email +
      "\n http://localhost:3001/forgotpasswordreset/" +
      btoa(Email) +
      "\n Click here  to set your password",
    subject: "Account Activation For Panel Management",
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { sendActivemail };
