function Todo({ item, isActive, setTodos }) {
  const deleteClick = () => {
    // 바꿔주려면 setTodos가져와야함
    //prev 기존에 있던 item.id값이랑 내가 클릭한 것의 t.id값이랑 다른것들을 filter해줄것임
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };
  const switchClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        //기존에 있던거 prev로 가져와서 map돌려서 t로 담아줌
        if (t.id === item.id) {
          //prev기존에 있던 item.id값이랑 t.id값이 같으면
          return { ...t, isDone: !t.isDone }; //기존에 있던 t가져오고, t.isDone을 반대로 ! isDone를 전환해준다
        } else {
          return t; //아닌 애들은 그대로 놔둠
        }
      })
    );
  };

  return (
    <div>
      <h5>{item.title}</h5>
      <p>{item.contents}</p>
      <button onClick={switchClick}>{isActive ? "완료" : "취소"}</button>
      <button onClick={deleteClick}>삭제</button>
    </div>
  );
}

export default Todo;
