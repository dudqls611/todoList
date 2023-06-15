import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../style/Input.css";

function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (e) => {
    e.preventDefault(); // form submit이 가져오면서 초기화를 하는데 이걸로 초기화를 막아줌

    const newTodo = {
      //새롭게 생성될 newTodo
      title,
      contents,
      isDone: false,
      id: uuidv4()
    };
    setTodos((prev) => [...prev, newTodo]); //기존에 있던걸 prev가져와서 ...prev로 찢어주고 거기에 newTodo추가해줌
    setTitle("");
    setContents(""); // 입력 다했으니까 인풋창 초기화
  };
  const titleChange = (e) => {
    setTitle(e.target.value); // 값을 넣어서 변화시켜줌
  };
  const contentsChange = (e) => {
    setContents(e.target.value); // 값을 넣어서 변화시켜줌
  };

  return (
    //form 태그의 onSubmit 이용
    <form onSubmit={handleSubmitClick}>
      {/* 변화가 있을때 useState 감지해서 랜더링 해준다 */}
      <div className="input-group">
        <label className="form-label">제목</label>
        <input value={title} onChange={titleChange}></input>
        <label className="form-label">내용</label>
        <input value={contents} onChange={contentsChange}></input>
      </div>
      <button>추가</button>



      {/* 제목  <input value={title} onChange={titleChange}></input>
      내용  <input value={contents} onChange={contentsChange}></input>
      <button>추가</button> */}
    </form>
  );
}

export default Input;
