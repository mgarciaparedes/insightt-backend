const { response } = require("express");
const Task = require("../models/task");

const postSaveNewTask = async (req, res = response) => {
  //   try {
  //   const { name, email, password } = req.body;

  //     const existingUser = await User.findOne({ email });
  //     if (existingUser) {
  //       return res.status(400).json({ error: 'Email already exists' });
  //     }

  const task = new Task(req.body);
  await task.save();
  const taskList = await Task.find({});
  res.status(201).json({ message: "Task created successfully", taskList });
  //   } catch (err) {
  //     res.status(400).json({ error: err.message });
  //   }
  //   res.status(200).json({ name });
};

module.exports = { postSaveNewTask };
