const { response } = require("express");
const User = require("../models/user");

const getTest = async (req, res = response) => {
    const users = await User.find({});

      if(users){
        return res.json({
          ok: true,
          users
        });
      }else{
        return res.json({
          ok: false,
          msg: "An error occurred, please try again.",
        });
      }

};

module.exports = { getTest };