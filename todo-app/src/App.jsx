import { useEffect, useState } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Navbar from './components/Navbar';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  const handleAddTask = (newTask) => {
    const updated = [newTask, ...tasks];
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  return (
    <div className='main'>
      <Navbar />
      <div className='innerMain'>
        <Inputs onAdd={handleAddTask} />
        <div className='modal'>
          <button>Active</button>
          <button>Finished</button>

          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
