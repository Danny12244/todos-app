import React, {useState} from 'react'
import styles from './addtask.module.css'

const Addtask = ({addTask}) => {
  
    const [newTask, setNewTask] = useState("");

    const handleClick = ()=> {
        addTask(newTask);
        setNewTask("")
    }

  return (
    <div className={styles.inl}>
        <input type="text"
        value={newTask} onChange={({target})=>setNewTask(target.value)} placeholder="Enter Your Task here..."/>
        <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Addtask