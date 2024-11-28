
import './App.css';
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  const onAddTaskHandler = () => {
    let newTask = {
      id: new Date(),
      title: taskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskTitle('');
  }

  const onChangeHandler = (e) => {
    setTaskTitle(e.target.value);
  }

  const onChangeTaskHandler = (id) => {
    let newTasks = tasks.map((task) => 
    task.id === id
      ? {...task, completed: !task.completed}
      : task
      );
      setTasks(newTasks);
  }

  const removeAllTasksHandler = () => {
    setTasks([]);
  }

  const removeTaskHandler = (id) => {
    setTasks([...tasks.filter(task => task.id !== id)]);
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <div className='Navigation'>
        <input type='text' onChange={(e) => onChangeHandler(e)} value={taskTitle}/>
        <button onClick={onAddTaskHandler}>Add Task</button>
        <button onClick={removeAllTasksHandler}>Drop All Tasks</button>
      </div>
      <div className='tasks'>
        {
          tasks.map((task) => <div className={task.completed ? 'Task Completed' : 'Task'} key={task.id}>
            <input type='checkbox' defaultChecked={task.completed} onChange={() => onChangeTaskHandler(task.id)}/>
            <h1>{task.title}</h1>
            <button onClick={() => removeTaskHandler(task.id)}>Delete / Drop</button>
          </div>)
        }
      </div>
    </div>
  );
}

export default App;
