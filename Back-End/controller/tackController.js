const Tasks = require("../model/tasksSchema");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const tasks = await Tasks.findById({ _id });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    const task = await Tasks.create(newTask);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const task = req.body;
    const updateTask = await Tasks.findByIdAndUpdate(
      _id,
      { ...task, _id },
      { new: true }
    );
    res.status(200).json({ updateTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const task = await Tasks.findOneAndDelete({ _id });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTask,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
};
