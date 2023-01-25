const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const taskSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Veuillez saisir le nom de la tâche"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
