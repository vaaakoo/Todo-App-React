import React, { useState } from "react";
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import ClearButtons from './components/ClearButtons'
import FilterButtons from './components/FilterButtons'



export interface Todo {
  task: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const handleSubmit = (task: string) => {
    setTodos([...todos, { task, completed: false }]);
  };

  const handleComplete = (i: number) => {
    const newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;
    setTodos(newTodos);
  };

  const handleRemove = (i: number) => {
    setTodos(todos.filter((_, index) => index !== i));
  };

  const handleFilter = (filterType: string) => {
    setFilter(filterType);
  };

  const handleClear = (clearType: string) => {
    if (clearType === "completed") {
      setTodos(todos.filter((todo) => !todo.completed));
    }
  };

  return (
    <div>
      <TodoForm onSubmit={handleSubmit} />
      <FilterButtons onFilter={handleFilter} />
      <ClearButtons onClear={handleClear} />
      <TodoList
        todos={todos.filter((todo) => {
          if (filter === "all") {
            return true;
          } else if (filter === "completed") {
            return todo.completed;
          } else {
            return !todo.completed;
          }
        })}
        onComplete={handleComplete}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default App;
