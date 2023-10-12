import React from "react";
import { Gnb, Aside, HistoryStack } from "./components/Include";
import Box, { Item } from 'devextreme-react/box';
import 'devextreme/dist/css/dx.light.css'
import 'devextreme/dist/css/dx.common.css'
import { Outlet } from "react-router-dom";
import { ReactComponent as Open } from "./image/aside_open.svg";


const LayoutProvider = () => {

  const openAside = () => {
    document.querySelector('.aside-section').classList.remove('hide');
  }

  return (
    <div className="container-wrapper">

      <Gnb />

      <div className="contents-wrapper">

        <div className="aside-section">
          <Aside />

          <span className="as-open" onClick={openAside}>
            <Open/>
          </span>
        </div>
        
        <div className="contents-section">
          <Outlet />
        </div>

      </div>

      <HistoryStack />

    </div>
  )
};

export default LayoutProvider;