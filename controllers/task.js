// Task Model
const Task = require("../models/task_model");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ success: true, tasks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const createTask = async (req, res) => {
  const { name, taskName, completed } = req.body;
  try {
    if (!name && !taskName) {
      return res.status(400).json({ message: "Please provide task name" });
    }
    const task = await Task.create({ name, taskName, completed });
    return res.status(201).json({ success: true, task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllTask, createTask };
