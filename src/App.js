import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


let nextId = 0;

function App() {
  const[task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

function addTask() {

  if (!task) {
    alert('Enter a new task !');
    return;
  }

  setTaskList([
    ...taskList,
      { id: nextId++, task: task }
  ]);

  console.log(task)


}
  return (
    <div className="Todo_list_app">
    <div className="App">
      

      <div className="Todo_list">
      <h3>TO DO LIST</h3>
      <input className="input" type='text' value={task} onChange={e => setTask(e.target.value)} maxLength={20}></input>
      <button className="btn" type='submit' onClick={() => addTask()}> Update Task</button>

      <ul>
        {
          taskList.map(todo => (
            <li key={todo.id}>{todo.task} <button className='Del' type='submit' onClick={() => {
              setTaskList(
                taskList.filter(a => a.id !== todo.id)
              )
            }}><i className="fa fa-trash-o"></i> </button></li>
          ))
        }
      </ul>
    </div>
    </div>

    
    </div>
  );

}

export default App;
