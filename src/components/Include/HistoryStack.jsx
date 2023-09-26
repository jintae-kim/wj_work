import React from "react";
import { Link } from "react-router-dom";
import "../../assets/history.css"

const HistoryStack = () => {
  return (

    <div className="history-stack">

      <div className="hs-prev hs-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M19 9.66663L12.3333 16.3333L19 23" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <ul>
        <li className="hs-cont">
          <Link to="/" className="hs-link">
            History1            
          </Link>   
          <span className="hs-delete"></span>       
        </li>
        <li className="hs-cont">
          <Link to="/" className="hs-link">
            History2            
          </Link>   
          <span className="hs-delete"></span>       
        </li>
        <li className="hs-cont">
          <Link to="/" className="hs-link">
            History3            
          </Link>
          <span className="hs-delete"></span>
        </li>
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