import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import { V4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([{
    title: '제목1',
    contents: '내용1',
    isDone: false, // 아직해야되는건지 끝난건지 확인
    id: uuidv4(), // uuid 자동 생성 부여
  }
  {
    title: '제목2',
    contents: '내용2',
    isDone: false, // 아직해야되는건지 끝난건지 확인
    id: uuidv4(), // uuid 자동 생성 부여
  }{
    title: '제목3',
    contents: '내용3',
    isDone: false, // 아직해야되는건지 끝난건지 확인
    id: uuidv4(), // uuid 자동 생성 부여
  }

]);

  return (
    <div>
      <Header>111111</Header>
      <main style={{ marginBottom: "30px", padding: "20px" }}>
        
        <Input></Input>
      </main>

      <footer>푸터</footer>
    </div>
  );
}

export default App;
