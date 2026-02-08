// Task Model
const { get } = require("mongoose");
const Task = require("../models/task_model");

// Get All Task
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ success: true, nbHits: tasks.length, tasks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get A Single Task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskID = id;

    if (!taskID) {
      return res
        .status(400)
        .json({ success: false, message: " Provide your taskID" });
    }
    const task = await Task.findById(taskID);
    return res.status(200).json({ success: true, data: task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Create a Task
const createTask = async (req, res) => {
  const { person, taskName, completed } = req.body;
  const data = { person, taskName, completed };

  try {
    if (!person || !taskName) {
      return res.status(400).json({ message: "Please provide a value" });
    }
    const task = await Task.create(data);
    return res.status(201).json({ success: true, task, data: data.length });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update a Single Task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskID = id;

    const { person, taskName, completed } = req.body;
    const data = { person, taskName, completed };

    if (!taskID) {
      return res.status(400).json({
        success: false,
        message: " Provide the taskID you want to update",
      });
    }

    if (!person && !taskName) {
      return res.status(400).json({
        success: false,
        message: " Provide the value to update the task",
      });
    }

    const task = await Task.findByIdAndUpdate(taskID, data, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: task,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a Task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskID = id;

    if (!taskID) {
      return res
        .status(404)
        .json({ success: false, message: " Provide your taskID" });
    }
    const task = await Task.findByIdAndDelete(taskID);
    return res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
