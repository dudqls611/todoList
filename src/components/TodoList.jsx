import Todo from "./Todo";
import "../style/TodoList.css";

function TodoList({ todos, isActive, setTodos }) {
  return (
    <>
      {/* TodoList 2개 구역 나눠주기 */}
      <h4>{isActive === true ? "Working.." : "Done..!!"}</h4>
      {todos
      //isActive기본값은 true인데 ! 했으니까 -> isDone이 false 인것들을 필터링
        .filter((item) => item.isDone === !isActive)
        //필터 한것을 map으로 돌린 것을 props로 뿌려줌
        .map((item) => {
          return (
            // 계속 반복되니까 Todo컴포넌트로 뺐음
            //item, isActive, setTodos를 Todo로  props해줌
            <Todo item={item} isActive={isActive} setTodos={setTodos}></Todo>
          );
        })}
    </>
  );
}
export default TodoList;