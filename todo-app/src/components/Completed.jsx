import React from 'react'
import styles from './completed.module.css'

const Completed = ({text}) => {
   
  return (
      <div>
      <h3 className={styles.txt}>{text}</h3>
      </div>
  )
}

export default Completed