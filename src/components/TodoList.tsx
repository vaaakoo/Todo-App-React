

import { Todo } from '../App'


const TodoList: React.FC<{ todos: Todo[], onComplete: (i: number) => void, onRemove: (i: number) => void }> = ({ todos, onComplete, onRemove }) => {
    return (
      <ul>
        {todos.map((todo, i) => (
          <li key={i} className={todo.completed ? 'completed' : ''}>
            {todo.task}
            <button onClick={() => onComplete(i)}>Complete</button>
            <button onClick={() => onRemove(i)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };

  
  export default TodoList;