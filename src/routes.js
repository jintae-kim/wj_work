import React from "react";
import { useRoutes } from "react-router-dom";
import { Main, Notfound } from "./pages";
import {
  MDM_PRG_A0101000000,
  MDM_PRG_A0105000000
} from "./pages/Site";
import LayoutProvider from "./Layout"

const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutProvider />,
      children: [
        { path: "/", element: <Main title="Main" /> },
        { path: "/site", element: <MDM_PRG_A0101000000 title="Company" /> },
        {
          path: "/site/MDM_PRG_A0101000000",
          element:
            <MDM_PRG_A0101000000
              title="Company"
              firstDepth="SITE"
              secondDepth="Company"
              firstDepthPath="/site"
            />
        },
        {
          path: "/site/MDM_PRG_A0105000000",
          element:
            <MDM_PRG_A0105000000
              title="Line"
              firstDepth="SITE"
              secondDepth="Line"
              firstDepthPath="/site"
            />
        },
        { path: "*",  element: <Notfound title="Notfound" /> }
      ]
    }
  ]);

  return element;
};

export default AppRoutes;