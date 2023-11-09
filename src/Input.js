import { useState } from "react";

function Input(props){
    var addItem = props.addItem;
    var [Inputval,setInputval] = useState("");
    return(<div>
        할 일: <input type="text" value={Inputval} onChange={(e)=>{setInputval(e.target.value)}}/>
        <button onClick={function(event){
            addItem(Inputval);
        }}>저장</button>
      </div>);
}

export default Input;