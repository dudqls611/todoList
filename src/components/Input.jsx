function Input() {
  const btnClick = (e)=> {
    e.preventDefault(); // 초기화를 막아줌
  }
  return (
    <form onSubmit={btnClick}>
      제목 : <input></input>
      내용 : <input></input>
      <button>추가</button>
    </form>
  );
}

export default Input;
