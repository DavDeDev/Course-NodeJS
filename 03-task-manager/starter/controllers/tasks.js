const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  // TODO: Before asyncWrapper
  // //res.send("all tasks");
  // try {
  //   const tasks = await Task.find({});

  //   //!!! There are many ways to do this, be CONSISTENT
  //   res.status(200).json({ tasks });
  //   //! You can also pass the number of tasks
  //   //res.status(200).json({ tasks, amount: tasks.length });
  //   // res.status(200).json({success: true, data:{tasks,nbHits:tasks.length}});
  //   // res
  //   //   .status(200)
  //   //   .json({ status: "success", data: { tasks, nbHits: tasks.length } });

  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }

  // TODO: After asyncWrapper => we can remove the try/catch
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

const getTask = asyncWrapper(async (req, res, next) => {
  //res.json({ id: req.params.id });
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  // if the task is not found returns a null value
  if (!task) {
    //We create an extension of the Error class in JS to describe the error
    // const error = new Error("Not found");
    // error.status = 404;
    // return next(error);
    //! using the middleware
    return next(createCustomError(`No task with id: ${taskID}`, 404));
    return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
  }
  res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res) => {
  //res.send("delete task");

  const task = await Task.findOneAndDelete({ _id: req.params.id });
  // if the task is not found returns a null value
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
  }
  res.status(200).json(task);
});

const updateTask = asyncWrapper(async (req, res) => {
  // res.send("update task");
  const { id: taskID } = req.params;
  //We update the task and return the new updated task
  //We use the new:true to return the new updated task instead of the old one
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
