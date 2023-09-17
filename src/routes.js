import React from "react";
import { useRoutes } from "react-router-dom";
import { Main, Notfound } from "./pages";
import { MDM_SBD_A0101000000 } from "./pages/Site/Company";
import LayoutProvider from "./Layout"

const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutProvider />,
      children: [
        { path: "/", element: <Main title="Main" />},
        { path: "/site/company", element: <MDM_SBD_A0101000000 title="Company" />},
        { path: "/site", element: <MDM_SBD_A0101000000 title="Company" />},
        { path: "*",  element: <Notfound title="Notfound" />}
      ]
    }
  ]);

  return element;
};

export default AppRoutes;