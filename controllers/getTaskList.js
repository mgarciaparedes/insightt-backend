const { response } = require("express");
const Task = require("../models/task");

const getTaskList = async (req, res = response) => {
  //   try {
  //   const { name, email, password } = req.body;

  const taskList = await Task.find({});

  if (taskList) {
    return res.json(taskList);
  } else {
    return res.status(500).json({
      message: "An error occurred, please try again.",
    });
  }
};

module.exports = { getTaskList };
