import React, { useEffect, useRef, useState } from "react";
import style from "./appBarStyle.module.css";
function AppBar() {
  const [scrollY,setScrollY] = useState(0);
  const [isScrolled,setIsScrolled] = useState(false);
  var appRef = useRef();
  function onScroll(event){
    //todo : use this reference and then delete This Part of setScroll
    setScrollY(window.scrollY);
    setIsScrolled(true);
    appRef.current.style.boxShadow =  "0px 2px 8px 2px rgba(0, 0, 0, 0.25)";
    appRef.current.style.height = "6.2vh";
    appRef.current.style.width = "100vw";
    appRef.current.style.position = "fixed";
  }
  useEffect(()=>{
    document.addEventListener("scroll",onScroll)
  })
  return (<>
    <div className={style.appBar} ref={appRef}>
      <div className={style.logo}>
        <div>EarthLoy Logo</div>
      </div>
      <div className={style.centerOptions}>
        <div>Home</div>
        <div>Shop</div>
        <div>About Us</div>
      </div>
      <div className={style.logo}>Shoping Cart Icon</div>
    </div>
    {isScrolled? <div className={style.appPadding}></div>:<div></div>}
    </>
  );
}

export default AppBar;
