import React, { useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "../../assets/history.css";

const HistoryStack = () => {

  const historyStackData = [
    {
      title: "Company",
      path: "/site/MDM_PRG_A0101000000"
    },
    {
      title: "Mold Change Time",
      path: ""
    },
    {
      title: "Data Interface Report",
      path: ""
    },
    {
      title: "Part",
      path: ""
    },
  ];

  const hisdelete = (e) => {
    e.target.parentNode.remove();
  }

  return (

    <div className="history-stack">

      <div className="hs-prev hs-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M19 9.66663L12.3333 16.3333L19 23" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <ul>
        {historyStackData && historyStackData.map((stack, index) => (
          <li className="hs-cont" key={index}>
            <NavLink to={stack.path} className="hs-link">
              {stack.title}
            </NavLink>
            <span className="hs-delete" onClick={e => hisdelete(e)}></span>
          </li>
        ))}
      </ul>

      <div className="hs-next hs-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M19 9.66663L12.3333 16.3333L19 23" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

    </div>

  )
}

export { HistoryStack }