import { useState } from "react";
import "./App.css"
import Input from "./Input";
import List from "./List";

function App() {//const 상수
  const [todoList, settodolist] = useState([
    {no:1,title:"리액트 공부",done:false},
    {no:2,title:"자소서 쓰기",done:true},
    {no:3,title:"면접 준비",done:false},
    {no:4,title:"여행 하기",done:false}
    
    ]);

    function addItem(msg){
      //todoList에 바로 새 아이템을 추가할 수 없다.(상수니까)
      // todoList의 배열을 하나 복제해서 새 todo아이템을 추가한다.
      //그리고 복제된 새 배열을 settodoList한다.
      //데이터를 복제할 때 스프레드 연산자 사용
      var newList=[...todoList];
      newList.push({no:5,title:msg,done:false});
      settodolist(newList);
    }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List v0.1</h1>
      </header>
      <Input addItem = {addItem}/>
      <hr />
      <List todoList={todoList} />
    </div>
  );
}

export default App;
