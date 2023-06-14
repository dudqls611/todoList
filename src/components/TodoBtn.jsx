import React from 'react';

// 컴포넌트
function TodoBtn({ todo, onToggle, onRemove }) {
  return (
    <li>
      <h3 
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {todo.title}
      </h3>
      <p>{todo.content}</p>
      <button onClick={onToggle}>
        {todo.completed ? "완료 취소하기" : "완료하기"}
      </button>
      <button onClick={onRemove}>삭제하기</button>
    </li>
  );
}

export default TodoBtn;