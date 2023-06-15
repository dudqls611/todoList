import { useState } from "react";
import Input from "./components/Input";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import "./style/reset.css";
import "./style/App.css";

function App() {
  const [todos, setTodos] = useState(initialState); //initialState 초기값 준것들을 todos로 넣어줌

  return (
    <div className="layout">
      <header>
        <div>TodoList 김영빈</div>
        <div>React</div>
      </header>
      <main>
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

const initialState = [
  { title: "리액트 공부하기", contents: "리액트를 공부해보자!", isDone: false, id: uuidv4() },
  { title: "자바스크립트 공부하기", contents: "자바스크립트를 공부해보자!", isDone: false, id: uuidv4() },
  { title: "반복숙달하기", contents: "모르겠으면 될 때까지 계속하자!", isDone: true, id: uuidv4() },
];

export default App;

