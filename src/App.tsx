// import 'react-beautiful-dnd/dist/react-beautiful-dnd.css';
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import iconMoon from "./assets/iconMoon.svg";
import iconsun from "./assets/iconsun.svg";
import Header from "./components/Header";
import iconCheck from "./images/icon-check.svg"
import iconCross from "./images/icon-cross.svg"




export interface Todo {
  task: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
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

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-[#F2F2F2] relative dark:bg-backgroundDark duration-500 h-screen">
      <header className="header">
        <div className="flex flex-col mx-auto mt-12">
          {/*dark mode - Header  */}
          <Header
            darkMode={darkMode}
            handleDarkModeToggle={handleDarkModeToggle}
            iconsun={iconsun}
            iconMoon={iconMoon}
          />

          <TodoForm onSubmit={handleSubmit} />
          
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
            onFilter={handleFilter}
            onClear={handleClear}
            iconCheck={iconCheck}
            iconCross={iconCross}
          />
          </div>
          </header>
        
      </div>
    </div>
  );
};

export default App;
