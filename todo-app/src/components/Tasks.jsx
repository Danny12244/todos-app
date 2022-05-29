import React from 'react'
import Task from './Task';


const Tasks = ({tasks, handleUpdateTask, handleRemoveTask}) => {
    
    
   
   
  return (
<>
{tasks.length>0 ? ( <div>Tasks
        {tasks.map(task =>(
            <Task task={task} handleUpdateTask={handleUpdateTask} handleRemoveTask={handleRemoveTask}/>
            ))}
    </div>):(<div>
            <h1>List is Empty</h1>
            <h3>Add a new Task above</h3>
    </div>)}
   
    
            </>
  )
}

export default Tasks