const getAllTasks = (req, res) => {
  res.send("all tasks");
};

const createTask = (req, res) => {
  res.json(req.body)
  
};

const getTask = (req, res) => {
  res.send("get task");
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
