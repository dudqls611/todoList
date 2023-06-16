import Todo from "./Todo";
import "../style/TodoList.css";

function TodoList({ todos, isActive, setTodos }) {
  return (
    <>
      {/* TodoList 2개 구역 나눠주기 */}
      <h4>{isActive === true ? "Working.." : "Done..!!"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive) //!isActive인 것이 해야 할 일이니까
        //필터 한것을 map으로 돌린 것을 props로 뿌려줌
        .map((item) => {
          return (
            //item, isActive, setTodos를 Todo로  props해줌
            <Todo item={item} isActive={isActive} setTodos={setTodos}></Todo>
          );
        })}
    </>
  );
}
export default TodoList;
