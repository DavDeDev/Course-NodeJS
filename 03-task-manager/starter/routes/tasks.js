const express = require("express");
const router = express.Router();

const {
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
