const Task = require('../models/task');

const updateTask = async (req, res) => {
  const { id } = req.body;
  const updateData = req.body;

  // Evitar actualizar el campo _id
  delete updateData._id;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(updatedTask);
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).json({ message: 'Error updating task', error: err });
  }
};

module.exports = { updateTask };