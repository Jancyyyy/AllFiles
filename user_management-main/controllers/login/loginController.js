

const User = require("../../models/User");
const User_Roles = require("../../models/user_roles");
const Roles = require("../../models/roles");
const jwt = require("jsonwebtoken");
const hasher = require("../hash/hash");

async function login(req, res, next) {
  console.log(req.body);
  const email_regex = new RegExp(
    "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
  );
  var dbConstraint = {};
  if (
    req.body.password.length > 0 &&
    req.body.name.length > 0
  ) {
    if (email_regex.test(req.body.name)) {
      dbConstraint.email = req.body.name;
    } else {
      dbConstraint.user_id = req.body.name;
    }

    let roleid;

    User.find({ ...dbConstraint }, (error, result) => {
      if (result.length > 0) {
        // console.log(result);
        if (error) {
          res.status(500).send({ err: "Error from DB" });
          return next();
        }
        if (result[0].is_active) {
          if (
            hasher.checkPassword(
              req.body.password,
              result[0].password,
            )
          ) {
            const token = jwt.sign(
              {
                user_id: req.body.user_id,
                email: req.body.email,
              },
              "panel_management",
              {
                expiresIn: 60 * 60,
              },
            );
            console.log(result);
            res.status(200).send({
              msg: "Login successful !",
              user: {
                name: result[0].name,
                user_id: result[0].user_id,
                // role_id: data,
                role_id: result[0].role_id,
              },
              token: token,
            });
            return next();
          } else {
            res
              .status(401)
              .send({ err: "Incorrect Credentials" });
            return next();
          }
        } else {
          res.status(403).send({ err: "User is Inactive" });
          return next();
        }
      } else {
        res.status(404).send({ err: "User not Found" });
      }
    });
  } else {
    res.status(401).send({ err: "Invalid Credentials" });
    return next();
  }
}

async function loginwithrole(req, res, next) {
  try {
    let dbConstraint1 = {};
    dbConstraint1.user_id = req.body.user_id;
    let dbConstraint2 = {};
    dbConstraint2["user_roles.user_id"] = req.body.user_id;
    const user = await User.aggregate([
      {
        $lookup: {
          from: "user_roles",
          localField: "user_id",
          foreignField: "user_id",
          as: "user_roles",
        },
      },
      {
        $lookup: {
          from: "roles",
          localField: "user_roles.role_id",
          foreignField: "role_id",
          as: "roles",
        },
      },
      {
        $match: {
          ...dbConstraint1,
          ...dbConstraint2,
        },
      },
    ]);
    const token = jwt.sign(
      {
        user_id: user[0].user_id,
        email: user[0].email,
        role_id: req.body.role_id,
        name: user[0].name,
      },
      "panel_management",
      {
        expiresIn: 60 * 60,
      },
    );
    console.log("token : " + token);
    console.log(user);
    user[0].Token = token;
    //  await user[0].save();
    const filter = { user_id: req.body.user_id };
    const updateUserDoc = {
      $set: {
        Token: token,
      },
    };
    const result = await User.updateOne(
      filter,
      updateUserDoc,
    );
    console.log(token, "token");
    res.status(200).send({
      msg: "Login successful !",
      user: {
        name: user[0].name,
        user_id: user[0].user_id,
        role_id: req.body.role_id,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(401).send({ err: err });
    return next();
  }
}
module.exports = { login, loginwithrole };
