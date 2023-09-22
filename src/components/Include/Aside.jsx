import React from "react";
import "../../assets/aside.css";
import { ASIDE_A0101000000 } from "./AsideMenus";
import { Button } from "devextreme-react";

const Aside = () => {

  const closeAside = () => {
    document.querySelector('.split-container').style.cssText = '--react-split-min-primary: 10px; --react-split-min-secondary: calc(100% - 300px); --react-split-primary: 0px; --react-split-splitter: 5px';
  }

  return (
    <div className="aside-scroll">

        <span className="as-close" onClick={closeAside}>X</span>     

        <div className="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <rect x="8.98926" y="9.90332" width="2" height="7" transform="rotate(-45 8.98926 9.90332)" fill="white"/>
            <circle cx="6" cy="6" r="5" stroke="white" stroke-width="2"/>
          </svg>
          <span className="search-tit">Search</span>
        </div>

        <ASIDE_A0101000000 />

        <Button type="button" className="search-button" text="조회"></Button>          
      
    </div>
  )
}

export { Aside }