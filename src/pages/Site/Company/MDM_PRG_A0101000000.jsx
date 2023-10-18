import React, { useState, useEffect, useRef } from "react";
import { Button, Popup, SelectBox, TextBox } from "devextreme-react";
import { Link } from "react-router-dom";
import { ReactComponent as Favorite } from "../../../image/favorite.svg";
import "../../../assets/contents.css";
import "../../../assets/modal.css";
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import { Split } from "@geoffcox/react-splitter";
import { ASIDE_A0101000000 } from "../../../components/Include/AsideMenus";

const MDM_PRG_A0101000000 = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);
 
  const togglePopup = () => {
      setPopupVisibility(!isPopupVisible);      
  };

  const [isPopupVisible2, setPopupVisibility2] = useState(false);
 
  const togglePopup2 = () => {
      setPopupVisibility2(!isPopupVisible2);
  };

  const [isPopupVisible3, setPopupVisibility3] = useState(false);
 
  const togglePopup3 = () => {
      setPopupVisibility3(!isPopupVisible3);
  };

  const [isActive, setActive] = useState(false);

  const toggleFavorite = () => {
    setActive(!isActive);
  }

  const searchSelect = ['All', 'EX']
  

  return (
    <Split initialPrimarySize='300px' minPrimarySize='20px' minSecondarySize='calc(100% - 300px)' splitterSize='5px' vertical>
      <div className="aside-section">
        <ASIDE_A0101000000 />
      </div>

      <div className="contents-section">
        <div className="contents">

          <div className="page-header">
            <h2 className="ph-tit">
              <span className="favorite-icon">
                <Favorite width={24} height={24} className={isActive ? "active" : "inactive"} onClick={toggleFavorite}/>
              </span>
              Company
            </h2>

            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/site">SITE</Link>
              </li>
              <li className="breadcrumb-item active">
                Company
              </li>
            </ul>
          </div>

          <div className="grid-container">

            <div className="grid-section">

              <div className="grid-headline">

                <div className="grid-top-buttons">
                  <Button>
                    SQL Viewer
                  </Button>
                  <Button>
                    엑셀 다운로드
                  </Button>
                </div>

              </div>

              <div className="grid-area">

                <div
                  style={{ height: "600px", background: "#ddd" }}
                >
                  그리드영역
                </div>

              </div>

              <div className="grid-bottom">
                <div className="grid-total">
                  총 00개(현재페이지 0/전체페이지 000000)
                </div>

                <div className="grid-buttons">
                  <Button className="normal-button" onClick={togglePopup3}>등록</Button>
                  <Button className="normal-button">삭제</Button>
                  <Button className="normal-button" onClick={togglePopup}>저장</Button>
                  <Button className="confirm-button" onClick={togglePopup2}>확정</Button>
                </div>
              </div>

            </div>

            <div className="grid-section">

              <div className="grid-area">

                <div style={{ height: "600px", background: "#ddd" }}>그리드 영역</div>

              </div>

              <div className="grid-bottom">
                <div className="grid-total">
                  총 00개(현재페이지 0/전체페이지 000000)
                </div>

                <div className="grid-buttons">
                  <Button className="normal-button">등록</Button>
                  <Button className="normal-button">삭제</Button>
                  <Button className="normal-button" onClick={togglePopup}>저장</Button>
                  <Button className="confirm-button" onClick={togglePopup2}>확정</Button>
                </div>
              </div>
            </div>

          </div>


          {/* //-- 저장 모달 */}
          <Popup
            visible={isPopupVisible}
            hideOnOutsideClick={true}
            onHiding={togglePopup}
            width={1000}
            height={500}
            dragEnabled={false}
            shadingColor="rgba(0, 0, 0, 0.5)"
          >
            <div className="modal-header">
              <h3 className="modal-tit">저장</h3>
              <span className="modal-subtit">Company</span>
            </div>

            <div className="modal-body">
              <h5 className="mc-tit">
                <span className="mct-icon"></span>저장목록(총 4개)
              </h5>

              <div className="grid-box">그리드영역</div>

              <p className="mc-ques">상기 항목을 저장 하시겠습니까?</p>
            </div>

            <div className="modal-footer">
              <Button className="cancle-btn" onClick={togglePopup}>취소</Button>
              <Button className="confirm-btn" onClick={togglePopup}>확인</Button>
            </div>

          </Popup>
          {/* 저장 모달 --// */}


          {/* //-- 확정 모달 */}
          <Popup
            visible={isPopupVisible2}
            hideOnOutsideClick={true}
            onHiding={togglePopup2}
            width={1000}
            height={500}
            dragEnabled={false}
            shadingColor="rgba(0, 0, 0, 0.5)"
          >
            <div className="modal-header">
              <h3 className="modal-tit">확정</h3>
              <span className="modal-subtit">Company</span>
            </div>

            <div className="modal-body">
              <h5 className="mc-tit">
                <span className="mct-icon"></span>확정목록(총 4개)
              </h5>

              <div className="grid-box">그리드영역</div>

              <p className="mc-ques">상기 항목을 확정 하시겠습니까?</p>
            </div>

            <div className="modal-footer">
              <Button className="cancle-btn" onClick={togglePopup2}>취소</Button>
              <Button className="confirm-btn" onClick={togglePopup2}>확인</Button>
            </div>

          </Popup>
          {/* 확정 모달 --// */}


          {/* //-- 등록 모달 */}
          <Popup
            visible={isPopupVisible3}
            hideOnOutsideClick={true}
            onHiding={togglePopup3}
            width={1280}
            height={"auto"}
            dragEnabled={false}
            shadingColor="rgba(0, 0, 0, 0.5)"
          >
            <div className="modal-header">
              <h3 className="modal-tit">등록</h3>
              <span className="modal-subtit">Company</span>
            </div>

            <div className="modal-body">

              <div className="md-table-box">
                <h5 className="mc-tit">
                  <span className="mct-icon"></span>정보 입력
                </h5>

                <table className="mc-table">
                  <tr>
                    <td colSpan={4} className="row-box">
                      <table className="mc-table">
                        <th>Factory</th>
                        <td>
                          <SelectBox
                            name=""
                            id=""
                            className="sc-select"
                            items={searchSelect}
                            placeholder="Factory Code 선택"
                          />
                        </td>
                        <th>Plant</th>
                        <td>
                          <SelectBox
                            name=""
                            id=""
                            className="sc-select"
                            items={searchSelect}
                            placeholder="Plant Code 선택"
                          />
                        </td>
                        <th>Operation</th>
                        <td>
                          <SelectBox
                            name=""
                            id=""
                            className="sc-select"
                            items={searchSelect}
                            placeholder="Operation Code 선택"
                          />
                        </td>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <th>Line Code</th>
                    <td><TextBox inputAttr="" className="dx-field-value" defaultValue="" placeholder="Line Code" /></td>
                    <th>Line Name</th>
                    <td><TextBox inputAttr="" className="dx-field-value" defaultValue="" placeholder="Line Name" /></td>
                  </tr>

                  <tr>
                    <th>Line Short Name</th>
                    <td><TextBox inputAttr="" className="dx-field-value" defaultValue="" placeholder="Line Short Name" /></td>
                    <th>Line Type</th>
                    <td><TextBox inputAttr="" className="dx-field-value" defaultValue="" placeholder="Line Type" /></td>
                  </tr>
                </table>

                <div className="mtb-button-wrap">
                  <Button className="confirm-btn">저장</Button>
                </div>
              </div>

              <div className="md-grid-box">
                <h5 className="mc-tit">
                  <span className="mct-icon"></span>등록 목록(총 4개)
                </h5>

                <div className="grid-box">그리드영역</div>
              </div>

            </div>

            <div className="modal-footer">
              <Button className="confirm-btn" onClick={togglePopup3}>닫기</Button>
            </div>

          </Popup>
          {/* 등록 모달 --// */}

        </div>
      </div>
    </Split>
  )
}
export {MDM_PRG_A0101000000};