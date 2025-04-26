import './Inputs.css'

function Inputs () {
    return <div className='inputs'>
        <div className='titleInput input'>
        <h2>Title</h2>
        <input type="text" placeholder='Input your task title' />
            
        </div>
        <div className='descriptionInput input'>
        <h2>Description</h2><input type="text" placeholder='Input your task description' />
        
        </div>
        <div className='input '><h2>.</h2>
        <button>Add</button></div>
        
        
    </div>
}

export default Inputs