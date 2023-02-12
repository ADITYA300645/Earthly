import React from "react";
import styles from "./leftThreeDModal.module.css";
import { useState } from "react";
function LeftThreeDCard(props) {
  const [counter, setCounter] = useState(1);

  return (
    <div className={styles.Card}>
      <div className={styles.left3DModel}>
        Left 3d Modal Space
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
      <div className={styles.rightInfo}>{props.children} Right Info Space</div>
    </div>
  );
}

export default LeftThreeDCard;
