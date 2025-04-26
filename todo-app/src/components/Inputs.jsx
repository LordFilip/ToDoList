import { useState } from 'react';
import './Inputs.css';

function Inputs({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (title.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false
    };

    onAdd(newTask); // ⬅️ Šaljemo ga ka App komponenti

    setTitle('');
    setDescription('');
  };

  return (
    <div className='inputs'>
      <div className='titleInput input'>
        <h2>Title</h2>
        <input
          type="text"
          placeholder='Input your task title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='descriptionInput input'>
        <h2>Description</h2>
        <input
          type="text"
          placeholder='Input your task description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='input'>
        <h2>.</h2>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default Inputs;
