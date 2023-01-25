const TaskForm = ({ createTask, name, handleInputChange }) => {
  return (
    <form className="task-form" onSubmit={createTask}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskForm;
