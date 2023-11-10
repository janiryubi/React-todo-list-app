import { useEffect, useState } from "react";
import "./App.css"
import Input from "./Input";
import List from "./List";

function App() {//const 상수
  const [todoList, settodolist] = useState([
    //{no:1,title:"리액트 공부",done:false},//처음에 만들때만 필요 후에는 주석처리
    //{no:2,title:"자소서 쓰기",done:true},
    //{no:3,title:"면접 준비",done:false},
    //{no:4,title:"여행 하기",done:false}
    ]);
    const [noCnt,setnoCnt] = useState(todoList.length+1);

    useEffect(function(){
      let todoListData = localStorage.getItem("todoListData");
      if(todoListData != null){
        let todoListObj = JSON.parse(todoListData);
        settodolist(todoListObj.todoList);
        setnoCnt(todoListObj.noCnt);
      }
    },[]);

    //localStorage에 저장하기 : setItem(), 가져오기: getItem()
    //localStorage.setItem("user","유예빈");
    //console.log("User: ", localStorage.getItem("user"));

    function saveData(newTodoList,newnoCnt){
      localStorage.setItem( "todoListData", JSON.stringify({"todoList": newTodoList,newnoCnt}) );
    }//key와 value가 같을 때는 한개만 적어줘도 됨

    function addItem(msg){
      //todoList에 바로 새 아이템을 추가할 수 없다.(상수니까)
      // todoList의 배열을 하나 복제해서 새 todo아이템을 추가한다.
      //그리고 복제된 새 배열을 settodoList한다.
      //데이터를 복제할 때 스프레드 연산자 사용
      var newList=[...todoList];
      newList.push({no:noCnt,title:msg,done:false});
      settodolist(newList);
      //settodolist([...todoList, {no:noCnt,title:msg,done:false}]);
      setnoCnt(noCnt+1);
      saveData(newList,noCnt+1);
    }

    function removeItem(todo){
      //let no = todo.no;
      //filter()나 findIndex()사용
      let index = todoList.findIndex(function(item,i,arr){
        return item.no == todo.no;
      });
      var newList=[...todoList];
      newList.splice(index,1);
      settodolist(newList);
      saveData();
      saveData(newList,noCnt);
    }

    function updateItem(todo){
      let index = todoList.findIndex(function(item,i,arr){
        return item.no == todo.no;
      });
      var newList=[...todoList];
      newList[index] = todo;
      settodolist(newList);
      saveData();
      saveData(newList,noCnt);
    }
  //List 생성
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List v0.1</h1>
      </header>
      <Input addItem = {addItem}/>
      <hr />
      <List todoList={todoList} removeItem = {removeItem} updateItem = {updateItem}/>
    </div>
  );
}

export default App;
