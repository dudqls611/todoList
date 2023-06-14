import React, { useState, useRef } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


// 메인
function App() {
  const nextId = useRef(1);
  const [todos, setTodos] = useState([]);

  const 추가버튼Todo = (title, content) => {
    const todo = {
      id: nextId.current,
      title: title,
      content: content,
      completed: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div>
      <TodoInput onAdd={추가버튼Todo} />
      <TodoList 
        title="완료된 할 일"
        todos={completedTodos} 
        onToggle={handleToggleTodo} 
        onRemove={handleRemoveTodo}
      />
      <TodoList 
        title="아직 안 된 할일"
        todos={activeTodos} 
        onToggle={handleToggleTodo} 
        onRemove={handleRemoveTodo}
      />
    </div>
  );
}

export default App;
