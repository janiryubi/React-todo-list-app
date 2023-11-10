import Item from "./Item";

//나중에 Redux 또는 Mobx를 props 대신 사용가능

function List(props) {
  var todoList = props.todoList;
  var removeItem = props.removeItem;
  var updateItem = props.updateItem;
    return (<div>
        <ul>
          {
            todoList.map(function(todo,i){
              return <Item key ={i} todo = {todo} removeItem = {removeItem} updateItem={updateItem}/>
            //아이템 생성
            })
          }
        </ul>
    </div>);
}

export default List;