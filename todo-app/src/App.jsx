import { useEffect, useState } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Navbar from './components/Navbar';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [complete, setComplete] = useState(false); // false = Active, true = Finished

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  const handleAddTask = (newTask) => {
    const taskWithCompleted = { ...newTask, completed: false };
    const updated = [taskWithCompleted, ...tasks];
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  const handleToggleComplete = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  const handleDeleteTask = (id) => {
    const updated = tasks.filter(task => task.id !== id);
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  const filteredTasks = tasks.filter(task => task.completed === complete);

  return (
    <div className="main">
      <Navbar />
      <div className="innerMain">
        <Inputs onAdd={handleAddTask} />
        <div className="modal">
          <button onClick={() => setComplete(false)}>Active</button>
          <button onClick={() => setComplete(true)}>Finished</button>

          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={handleToggleComplete}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
