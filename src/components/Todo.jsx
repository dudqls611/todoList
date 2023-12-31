import "../style/Todo.css";

// props drilling으로 3개 값 가져옴 - 작은 규모일 경우 쉽고 빠르고 파악 및 수정이 용이한게 장점(큰 규모의 경우 반대가 됨)
// 단점 해결법 - props.children 사용하면 됨
function Todo({ item, isActive, setTodos }) {
  const deleteClick = () => {
    // 바꿔주려면 setTodos가져와야함
    //prev 기존에 있던 item.id값이랑 내가 클릭한 것의 t.id값이랑 다른것들을 filter해줄것임
    // 누른것만 빼고 나머지는 다시 출력되게 됨
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  const switchClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        //기존에 있던거 prev로 가져와서 map돌려서 t로 담아줌
        if (t.id === item.id) {
          //prev기존에 있던 t.id값이랑 item.id값이 같으면
          return { ...t, isDone: !t.isDone }; //기존에 있던 t가져오고, t.isDone을 반대로 ! isDone를 전환해준다
        } else {
          return t; //아닌 애들은 그대로 놔둠
        }
      })
    );
  };

  return (
    <div className="listBox">
      <div className="itemBox">
        <h5>제목 : {item.title}</h5>
        <p>{item.contents}</p>
      </div>
      <div className="btnBox">
        <button className="switchBtn" onClick={switchClick}>
          {/* true면 working구역 false면 Done구역  */}
          {isActive ? "완료" : "취소"}  
        </button>
        <button className="delBtn" onClick={deleteClick}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default Todo;
