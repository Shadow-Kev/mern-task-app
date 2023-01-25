import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm />
      <div className="--flex-between --pb">
        <p>
          <b>Total des tâches:</b> 0
        </p>
        <p>
          <b>Tâches terminées:</b> 0
        </p>
      </div>
      <hr />
      <Task />
    </div>
  );
};

export default TaskList;
