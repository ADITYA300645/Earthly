import React, { useState } from "react";
import styles from "./RightThreeDModal.module.css"
function RightThreeDCard(props) {
  const [counter, setCounter] = useState(1);
  return (
    <div className={styles.Card}>
      <div className={styles.LeftInfo}>{props.children}</div>
      <div className={styles.Right3DModel}>Right 3d MOdal Space
      <div className={styles.countTracker}>
          {counter > 1 ? (
            <button className={styles.Plus} onClick={()=>{
               setCounter(counter-1)
            }}>
              -
            </button>
          ) : (
            <button className={styles.Plus} disabled={true}>
              -
            </button>
          )}
          <div className={styles.Value}>{counter}</div>
          <button
            className={styles.Minus}
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
        </div>
      
      </div>
    </div>
  );
}

export default RightThreeDCard;
