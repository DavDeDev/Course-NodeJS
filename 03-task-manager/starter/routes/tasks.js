const express = require("express");
const router = express.Router();

// We are building a REST(ful) API (Representational state transfer)
// Combines HTTP verbs, route paths, and our data.

const {
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
//Even if they GET and POST have the same URL

//!PUT and PATCH
//PUT is used to replace the entire resource
//PATCH is used to update a part of the resource
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
