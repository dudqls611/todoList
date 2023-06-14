

import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import {v4 as uuidv4} from 'uuid';
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(initialState); //initialState 초기값 준것들을 todos로 넣어줌


  const completedTodos = todos.filter(todo => todo.completed);
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div>
      <Header>TodoList</Header>
      <main style={{ marginBottom: "30px", padding: "20px" }}>
        
        {/* setTodos를 Input으로 props보내줌 */}
        <Input setTodos={setTodos}></Input>

        {/* 할일, 완료한 일이니까 두개 만듦 */}
        {/* true, false, todos를 TodoList로 props보내줌 */}
        {/* setTodos를 TodoList -> Todo로 props 보내줌 props드릴링이라고함*/}
        <TodoList isActive={true} todos={todos} setTodos={setTodos}></TodoList>  
        <TodoList isActive={false} todos={todos} setTodos={setTodos}></TodoList>

      </main>

      
    </div>
  );
}

export default App;

const initialState = [
  { title: "리엑트", contents: "어려웡", isDone: false, id: uuidv4() },
  { title: "리덕스", contents: "어려웡", isDone: false, id: uuidv4() },
  { title: "자바스크립트", contents: "어려웡", isDone: true, id: uuidv4() }
];