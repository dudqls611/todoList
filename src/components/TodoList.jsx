import Todo from "./Todo";


function TodoList({ todos, isActive, setTodos }) {
  return (
    <>
      <h4>{isActive === true ? "해아할거" : "완료된것"}</h4>
      {todos
        // todos의 isDone 값은 defalt로 false값이고 그 false가 아닌 거만 보이게하면
        // isActive가 true인 곳에서만 map을 돌리고 return 하면 출력이됨.
        .filter((item) => item.isDone === !isActive) //!isActive인 것이 해야 할 일이니까
        //필터 한것을 map으로 돌림
        .map((item) => {
          return (
            //item, isActive, setTodos를 Todo로  props해줌
            <Todo item={item} isActive={isActive} setTodos={setTodos}></Todo> 
          )
        })}
    </>
  );
}
export default TodoList;