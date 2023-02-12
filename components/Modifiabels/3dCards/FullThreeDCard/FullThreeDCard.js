import React from 'react'   
import styles from "./FullThreeDCard.module.css"
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Html } from '@react-three/drei';

function FullThreeDCard(props) {
  return (
    <div className={styles.Card}>
   <Canvas camera={{position:[-0,10,5]}}>
     <mesh>
          <boxGeometry />
          <meshStandardMaterial />
     </mesh>
     <Html>
          <div className={styles.MainContent}>{props.children}</div>
     </Html>
     <OrbitControls autoRotate={true} enableZoom={false}/ >
   </Canvas>
     </div>
  )
}

export default FullThreeDCard