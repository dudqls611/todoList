import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Userrr from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  // 추가
  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 이놈을 만든다
    // { id: 3, age: 21, name: "김유정" }
    // 2. 이놈을 배열에 더한다

    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };

    setUsers([...users, newUser]); // 불변성을 유지해서 state가 바꼈다는 것을 인식하게 하기 위해 배열을 풀었다가 다시 이놈을 더해주는것임
  };
   // 삭제
   const clickRemoveButtonHandler = (iddd) => {
    const newUsers = users.filter((user) => user.id !== iddd);
    setUsers(newUsers);
  };

  return (
    <div>
      <div>
        이름 :&nbsp;
        <input value={name} onChange={nameChangeHandler} />
        <br />
        {/*입력할때마다 위 const useState들에 세팅 됨  */}
        나이 :&nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <Button clickAddButtonHandler={clickAddButtonHandler}/>
      </div>
      <div className="app-style">
        {users.map((item) => {
          return <Userrr key={item.id} item={item} removeFunction={clickRemoveButtonHandler} />;
        })}
      </div>
    </div>
  );
};







export default App;
