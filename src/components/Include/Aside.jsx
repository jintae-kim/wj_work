import React from "react";
import "../../assets/aside.css";
import { 
  ASIDE_A0101000000, 
  ASIDE_A0105000000,
  ASIDE_A0302000000, 
  ASIDE_A0103000000, 
  ASIDE_A0306010000 
} from "./AsideMenus";
import { Button } from "devextreme-react";
import { ReactComponent as Close } from "../../image/close.svg";
import { useLocation } from "react-router-dom";

const Aside = () => {
  const isLocation = useLocation();

  let leftPanel;
  switch (true) {
    case isLocation.pathname === "/site":
      leftPanel = <ASIDE_A0101000000 />;
      break;
    case isLocation.pathname.includes("/MDM_PRG_A0101000000"):
      leftPanel = <ASIDE_A0101000000 />;
      break;
    default:
      break;
  }

  const closeAside = () => {
    document.querySelector('.split-container').style.cssText = '--react-split-min-primary: 10px; --react-split-min-secondary: calc(100% - 300px); --react-split-primary: 0px; --react-split-splitter: 5px';
  }

  return (
    <div className="aside-scroll">

      <span className="as-close" onClick={closeAside}>
        <Close/>
      </span>

      {leftPanel}
      
    </div>
  )
}

export { Aside }