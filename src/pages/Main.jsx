import React from "react";
import {Link} from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/site/MDM_PRG_A0105000000">Grid - MDM_PRG_A0105000000</Link>
        </li>
        <li>
          <Link to="/reference/MDM_PRG_A0302000000">Grid - Master > Detail - MDM_PRG_A0302000000</Link>
        </li>
        <li>
          <Link to="/reference/MDM_PRG_A0306010000">Grid - Tab - MDM_PRG_A0306010000</Link>
        </li>
        <li>
          <Link to="/model/MDM_PRG_A0204010000">Grid - Tree - MDM_PRG_A0204010000</Link>
        </li>
        <li>
          <Link to="/model/MDM_PRG_A0203000000">Graph - Grid - MDM_PRG_A0203000000</Link>
        </li>
        <li>
          <Link to="/model/MDM_PRG_A0201000000">Master-Detail-Detail Grid - MDM_PRG_A0201000000</Link>
        </li>
        <li>
          <Link to="/model/MDM_PRG_A0202000000">Master-3Detail - MDM_PRG_A0202000000</Link>
        </li>
        <li>
          <Link to="/reference/MDM_PRG_A0308010000">2Master – 1Detail - MDM_PRG_A0308010000</Link>
        </li>
      </ul>
    </div>
  )
}

export { Main }