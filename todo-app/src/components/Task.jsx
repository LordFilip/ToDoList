import './Task.css';

function Task({ task }) {
  return (
    <div
      className='task'
      style={{ backgroundColor: task.completed ? 'lightgreen' : 'white' }}
    >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p style={{ fontStyle: 'italic', fontSize: '0.9em' }}>
        Status: {task.completed ? 'Finished' : 'Active'}
      </p>
    </div>
  );
}

export default Task;
