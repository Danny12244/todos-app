import React, {useState} from 'react'
import Showtodos from "./Showtodo";
import AddTask from "../components/Addtask";
import Tasks from './Tasks';
import taskdata from '../data/tasks.json';
import styles from './taskapp.module.css';

const Taskapp = () => {
    const [tasks, setTasks]=useState(taskdata)
    const addTask = (newTask) => {
        let present = tasks.some(task => task.text === newTask)
        if(newTask && !present){
            const obj={
                id:tasks.length+1,
                text:newTask,
                done:false
            }
            setTasks([...tasks,obj])
        }
    }

    const handleUpdateTask = (updatedTask)=>{
        let newTask = tasks.reduce((acc,curr)=>{
            if(curr.id === updatedTask.id){
                acc.push(updatedTask)
            }
            else{
                acc.push(curr)
            }
            return acc
        },[])
     
        setTasks([...newTask])
    }

    const handleRemoveTask =(taskId)=>{
        let newtask = tasks.filter(task=>task.id!=taskId)
        setTasks(newtask)
    }
    
  return (
      <>
    <div  className={styles.app} >Taskapp
   

        <AddTask addTask={addTask} />
        <Tasks tasks={tasks} handleUpdateTask={handleUpdateTask} handleRemoveTask={handleRemoveTask}/>
        <Showtodos tasks={tasks} />
    </div>
      </>
  )
}

export default Taskapp