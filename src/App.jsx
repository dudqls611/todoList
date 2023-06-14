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
    setTodos(todos.concat(todo)); // todos배열에 concat으로 새로운 todo항목 추가, 그다음 setTodos로 업데이트
    nextId.current += 1;
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo // 기존의 todo가져와서 todo.completed되면 !반대로 바꿔줌
      )
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); // 인자로 받은 id와 다른 id들로만으로 배열 새로 생성
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
