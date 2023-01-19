const TodoForm: React.FC<{ onSubmit: (task: string) => void }> = ({ onSubmit }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const task = e.currentTarget.task.value;
      if (task) {
        onSubmit(task);
      }
      e.currentTarget.reset();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input type="text" name="task" />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  };
  
  export default TodoForm;