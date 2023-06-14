import React, { useState } from 'react';

// 컴포넌트
function TodoInput(props) {
  const [제목입력, set제목입력] = useState("");
  const [내용입력, set내용입력] = useState("");

  const 추가버튼 = () => {
    if (제목입력 !== "" && 내용입력 !== "") {
    // props.onAdd(제목입력, 내용입력);
    props.onAdd(제목입력);
    props.onAdd(내용입력);
      
      set제목입력("");
      set내용입력("");
    }
  };

  
  return (
    <div>
      <input 
        type="text" 
        value={제목입력} 
        onChange={(e) => set제목입력(e.target.value)} 
        placeholder="제목을 입력하세요"
      />
      <textarea 
        value={내용입력} 
        onChange={(e) => set내용입력(e.target.value)} 
        placeholder="내용을 입력하세요"
      />
      <button onClick={추가버튼}>추가하기</button>
    </div>
  );
}

export default TodoInput;