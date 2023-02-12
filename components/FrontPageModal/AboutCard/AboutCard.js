import React from 'react'
import styles from "./aboutCard.module.css"

function AboutCard() {
  return (
    <div className={styles.Card}> <div className={styles.left}>left</div> <div className={styles.right}>right</div> </div>
  )
}

export default AboutCard