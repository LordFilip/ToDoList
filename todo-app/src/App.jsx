import './App.css'
import Inputs from './components/Inputs'
import Navbar from './components/Navbar'
import Task from './components/Task'

function App() {
 

  return (<div className='main'> 
     <Navbar/><div className='innerMain'>
      <Inputs/>
      
      <div className='modal'> <button>Active</button>
      <button>Finished</button>
      <Task/>
      <Task/>

      </div>
     

    </div></div>
    
  )
}

export default App
