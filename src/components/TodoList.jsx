import React from 'react';
import TodoBtn from './TodoBtn';
// 컴포넌트
function TodoList({ title, todos, onToggle, onRemove }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoBtn 
            key={todo.id}
            todo={todo} 
            onToggle={() => onToggle(todo.id)}
            onRemove={() => onRemove(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;