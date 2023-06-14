import React, { useState } from 'react';
import Button from './components/Button';
import List from './components/List';

const App = () => {
  const [users, setUsers] = useState();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  }
  
  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  }


  //추가기능
  const clickAddBtnHandler = () => {
    
    const newUser = {
      id: users.length + 1,
      title: title,
      content: content
    }
    setInput([...users, newUser]);
    setTitle('');
    setContent('');
  }



  return (
    <div>

      <div>
        제목 
        <input value={title} onChange={titleChangeHandler} />
        내용 
        <input value={content} onChange={contentChangeHandler} />
        <Button clickAddBtnHandler={clickAddBtnHandler}/>
      </div>

      <div>
        {users.map((item) => {
          return <List key={item.id} listFunction={item} />
        })}
      </div>

    </div>
  );
};

export default App;