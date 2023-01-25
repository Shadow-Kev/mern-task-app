const express = require("express");
const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();

router.get("/", getTasks);

router.get("/:id", getTask);

router.post("/", createTask);

router.delete("/:id", deleteTask);

router.put("/:id", updateTask);

module.exports = router;
