import "./index.css";
import List from "../List";
import { useState } from "react";
function Task() {
    const input = document.querySelector(".task--input");
    const form = document.querySelector(".inputAdd");
    const [title, setTitle] = useState("");
    const dataValue = localStorage.getItem("inputValue")?JSON.parse(localStorage.getItem("inputValue")):[];
    let [data, setData] = useState(dataValue);


function validate() {
    
    if (input.value.length < 3) {
        input.value = "";
        input.focus()
        alert("Yozilgan task 3 ta belgidan ko'proq bo'lishi kerak ");
        return false;
    }

    return true;
}


function handleChange() {  
    if(validate()){
    dataValue.push(title);
    input.title = ''
    
    localStorage.setItem("inputValue", JSON.stringify(dataValue));
    setData(dataValue);
    form.reset()
    } 
    
}
    
  return (
    <>
      <div className="task">
        <h1 className="task--title">All Tasks</h1>

        <form className="inputAdd">
            <input
            className="task--input"
            type="text"
            placeholder="Add a new task insdie ‘All’ category"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        
        <button onClick={handleChange}>Add</button>

        </form>

        <ul className="task--types">
          {
             data.map((el, index) => {
                return (
                    <List key={index} text={el}/>
                )
             })
          }
        </ul>

        <div className="button">
            <button  className="task-btn">Delete</button>
        </div>
      </div>
    </>
  );
}

export default Task;
