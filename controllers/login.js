const { response } = require("express");
const bcrypt = require("bcryptjs");
const Login = require("../models/user");
const { generateJWT } = require("../helpers/jwt");

const postLogin = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await Login.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect username or password",
      });
    }

    //Confirmar los passwords
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        message: "Incorrect username or password.",
      });
    }

    const token = await generateJWT(user.email, user.id);

    res.json({
      message: "Login successfull",
      token,
      email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Please, contact this sites admin",
    });
  }
};

module.exports = { postLogin };
