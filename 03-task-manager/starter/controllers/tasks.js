const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  //res.send("all tasks");
  try {
    const tasks = await Task.find({});

    //!!! There are many ways to do this, be CONSISTENT
    res.status(200).json({ tasks });
    //! You can also pass the number of tasks
    //res.status(200).json({ tasks, amount: tasks.length });
    // res.status(200).json({success: true, data:{tasks,nbHits:tasks.length}});
    // res
    //   .status(200)
    //   .json({ status: "success", data: { tasks, nbHits: tasks.length } });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    // We use the await to wait for the promise to be resolved
    const task = await Task.create(req.body);
    console.log(task); // will be a pending promise if we don't use await
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTask = async (req, res) => {
  //res.json({ id: req.params.id });
  try {
    const task = await Task.findOne({ _id: req.params.id });
    // if the task is not found returns a null value
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
      dd;
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  //res.send("delete task");
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    // if the task is not found returns a null value
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  // res.send("update task");
  try {
    const { id: taskID } = req.params;
    //We update the task and return the new updated task
    //We use the new:true to return the new updated task instead of the old one
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
