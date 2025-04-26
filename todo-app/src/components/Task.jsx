import './Task.css';

function Task({ task, onToggle, onDelete }) {
  return (
    <div className="task">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p style={{ fontStyle: 'italic', fontSize: '0.9em' }}>
        Status: {task.completed ? 'Finished' : 'Active'}
      </p>

      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        Mark as finished
      </label>

      <button
        onClick={() => onDelete(task.id)}
        style={{
          marginLeft: '10px',
          backgroundColor: '#ff4d4f',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer',
          borderRadius: '4px'
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Task;
