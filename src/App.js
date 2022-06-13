import './App.css';
import React, {useState} from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';


function App() {

  const [todos, setTask] = useState([
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathrooms", priority: "low"},
    {name: "Car's MOT", priority: "high"},
  ]);

  const [newTask, setNewTask] = useState("");

  const todoNodes = todos.map((todo, index) => {
    return(
      <li key={index} className={todo.priority ? "high" : "low"}>
      <span>{todo.name}</span>
      </li>
    )
  });

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...todos];
    copyTasks.push({name: newTask});
    setTask(copyTasks);
    setNewTask("");
  }

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }


  return (
    <div className="App">
      <h1>ToDo's</h1>

      <hr></hr>

      <form onSubmit={saveNewTask}>

        <label htmlFor='new-item'>Add a new Task:</label>
        <input id='new-item' type='text' value={newTask} onChange={handleTaskInput}/>
        <input type="submit" value="Save new Task"/>

        <label class="container">High
        <input type="checkbox" checked="checked"/>
        <span class="checkmark"></span>
        </label>

        <label class="container">Low
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>

      </form>

      <ul>
        {todoNodes}
      </ul>

    </div>
  );
}

export default App;
