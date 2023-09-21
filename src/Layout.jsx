import React from "react";
import { Gnb, Aside, HistoryStack } from "./components/Include";
import Box, { Item } from 'devextreme-react/box';
import 'devextreme/dist/css/dx.light.css'
import 'devextreme/dist/css/dx.common.css'
import { Outlet } from "react-router-dom";
import { Split } from "@geoffcox/react-splitter";

const LayoutProvider = () => {
  return (
    <div fluid className="container-wrapper">
      <Gnb />
      <div className="contents-wrapper">
        <Split initialPrimarySize='300px' minPrimarySize='10px' minSecondarySize='calc(100% - 300px)' splitterSize='5px' vertical>
          <div className="aside-section">
            <Aside />
          </div>
          <div className="contents-section">
            <Outlet />
          </div>
        </Split>
      </div>
      <HistoryStack />
    </div>
  )
};

export default LayoutProvider;