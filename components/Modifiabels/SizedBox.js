import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

function SizedBox(props) {
     var boxRef = useRef();
     useEffect(function (){
          console.log(boxRef.current);
          boxRef.current.style.height = props.height+"px";
          console.log(props.height);
     });
     return (
    <div ref={boxRef}></div>
  )
}

export default SizedBox