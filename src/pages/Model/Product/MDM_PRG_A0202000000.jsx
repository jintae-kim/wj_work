import React, {useState} from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Favorite } from "../../../image/favorite.svg";
import { Split } from "@geoffcox/react-splitter";
import { ASIDE_A0202000000 } from "../../../components/Include/AsideMenus";

const MDM_PRG_A0202000000 = (props) => {
  const [isActive, setActive] = useState(false);

  const toggleFavorite = () => {
    setActive(!isActive);
  }

  const checkSplit = (sizes: SplitMeasuredPixelSizes) => {
    
    if(sizes.primary == '20') {
      document.querySelector('.aside-scroll').classList.add('aside-hidden');
    }else {
      document.querySelector('.aside-scroll').classList.remove('aside-hidden');
    }
    
  }


  return (
    <Split initialPrimarySize='300px' minPrimarySize='20px' minSecondarySize='calc(100% - 300px)' splitterSize='5px' onMeasuredSizesChanged={checkSplit} vertical>
      <div className="aside-section">
        <ASIDE_A0202000000 />
      </div>

      <div className="contents-section">
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

                <div style={{ height: "300px", background: "#ddd" }}>그리드 영역</div>

              </div>

              <div className="grid-bottom">
                <div className="grid-total">
                  총 00개(현재페이지 0/전체페이지 000000)
                </div>
              </div>

            </div>

            <div className="grid-two-wrap">

              <div className="grid-section">

                <div className="grid-headline">
                  <div className="result-info">
                    <span className="tit-icon"></span>
                    <span className="title">법인정보</span>
                  </div>
                </div>

                <div className="grid-area">

                  <div style={{ height: "300px", background: "#ddd" }}>그리드 영역</div>

                </div>

                <div className="grid-bottom">
                  <div className="grid-total">
                    총 00개(현재페이지 0/전체페이지 000000)
                  </div>
                </div>

              </div>

              <div className="grid-section">

                <div className="grid-headline">
                  <div className="result-info">
                    <span className="tit-icon"></span>
                    <span className="title">Tech 정보</span>
                  </div>
                </div>

                <div className="grid-area">

                  <div style={{ height: "300px", background: "#ddd" }}>그리드 영역</div>

                </div>

                <div className="grid-bottom">
                  <div className="grid-total">
                    총 00개(현재페이지 0/전체페이지 000000)
                  </div>
                </div>

              </div>

            </div>

            <div className="grid-section">

              <div className="grid-headline">
                <div className="result-info">
                  <span className="tit-icon"></span>
                  <span className="title">개발정보</span>
                </div>
              </div>

              <div className="grid-area">

                <div style={{ height: "300px", background: "#ddd" }}>그리드 영역</div>

              </div>

              <div className="grid-bottom">
                <div className="grid-total">
                  총 00개(현재페이지 0/전체페이지 000000)
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </Split>
  )
}
export {MDM_PRG_A0202000000};