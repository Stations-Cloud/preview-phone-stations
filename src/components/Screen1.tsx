import React from 'react'
import styles from './Screen1.css'

export type Screen1Props = {
  title: string
  description: string
}

const Screen1: React.FC<Screen1Props> = ({ title, description }) => {
  return (
    <div className={styles.screen1}>
      <div className={styles.mainContainer}>
        <h1 className={styles.titleNotification}>{title}</h1>
        <p className={styles.descripitionNotification}>{description}</p>
      </div>
    </div>
  )
}

export default Screen1
