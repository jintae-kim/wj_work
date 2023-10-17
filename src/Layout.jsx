import React, {useState} from "react";
import { Gnb, Aside, HistoryStack } from "./components/Include";
import Box, { Item } from 'devextreme-react/box';
import 'devextreme/dist/css/dx.light.css'
import 'devextreme/dist/css/dx.common.css'
import { Outlet } from "react-router-dom";
import { ReactComponent as Open } from "./image/aside_open.svg";
import { Split } from "@geoffcox/react-splitter";


const LayoutProvider = () => {
  const [isFold, setIsFold] = useState(null);

  const gnbFolding = () => {
    setIsFold(!isFold);
  }

  return (
    <div className={`container-wrapper ${isFold ? "gnbFold" : "gnbUnFold"}`}>

      <Gnb gnbFolding={gnbFolding} />

      <div className="contents-wrapper">

        <Split initialPrimarySize='300px' minPrimarySize='20px' minSecondarySize='calc(100% - 300px)' splitterSize='5px' vertical>
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