import React, {useState} from "react";
import { Button, Popup } from "devextreme-react";
import { Link } from "react-router-dom";
import { ReactComponent as Favorite } from "../../../image/favorite.svg";
import "../../../assets/contents.css"
import "../../../assets/modal.css"

const MDM_PRG_A0203000000 = (props) => {
  
  const [isActive, setActive] = useState(false);

  const toggleFavorite = () => {
    setActive(!isActive);
  }


  return (

    <div className="contents">

      <div className="page-header">
        <h2 className="ph-tit">
          <span className="favorite-icon">
            <Favorite width={24} height={24} className={isActive ? "active" : "inactive"} onClick={toggleFavorite}/>
          </span>
          {props.title}
        </h2>

        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={props.firstDepthPath}>{props.firstDepth}</Link>
          </li>
          <li className="breadcrumb-item active">
            {props.secondDepth}
          </li>
        </ul>
      </div>

      <div className="grid-container">

        <div className="grid-section">
          <div className="grid-area">
            <div style={{ height: "400px", background: "#ddd" }}>그래프 영역</div>
          </div>
        </div>

        <div className="grid-section">

          <div className="grid-area">            

            <div style={{ height: "400px", background: "#ddd" }}>그리드 영역</div>

          </div>

          <div className="grid-bottom">
            <div className="grid-total">
              총 00개(현재페이지 0/전체페이지 000000)
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}
export {MDM_PRG_A0203000000};