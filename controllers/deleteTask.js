const Task = require("../models/task");

const deleteTask = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    const taskList = await Task.find({});
    res.status(200).json({ message: "Task successfully deleted", taskList });
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).json({ message: "Error deleting task", error: err });
  }
};

module.exports = { deleteTask };
