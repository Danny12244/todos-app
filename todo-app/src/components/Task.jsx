import React from "react";
import styles from "./tasks.module.css";

const Task = ({ task, handleUpdateTask, handleRemoveTask }) => {
  const toggleDone = () => {
    let togle = {
      ...task,
      done: !task.done,
    };
    handleUpdateTask(togle);
  };

  

  return (
    <div key={task.id} className={styles.dis}>
      <div className={task.done ? styles.strk : ""}>
        <input type="checkbox" checked={task.done} onChange={toggleDone} />
        {task.text}
      </div>
      <button onClick={() => handleRemoveTask(task.id)}>X</button>
    </div>
  );
};

export default Task;
