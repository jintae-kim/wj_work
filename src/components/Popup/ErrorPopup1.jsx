import React from "react";
import { Button, Popup } from "devextreme-react";
import { ReactComponent as Alertimg } from "../../image/alert.svg"

const ErrorPopup1 = ({ onHiding, visible }) => {


  return (
    <Popup
      visible={visible}
      hideOnOutsideClick={true}
      onHiding={onHiding}
      width={1000}
      height={"auto"}
      dragEnabled={false}
      shadingColor="rgba(0, 0, 0, 0.5)"
      showCloseButton={false}
    >
      <div className="modal-body error-popup-body">

        <Alertimg className="alert-img" width={90} height={90}/>

        <h1 className="error-tit">시스템에서 예상치 못한 오류가 발생했습니다.</h1>
        <p className="error-txt">
          문제가 계속되는 경우 아래 연락처로 연락해주세요. <br/>
          에러코드를 함게 알려 주시면 신속하게 지원해 드리겠습니다.
        </p>

        <div className="error-code">
          <p className="ec-bold">
            Error Code : 0x00321
          </p>

          <p>
            기술지원팀/내선번호 : 9876
          </p>
        </div>
      </div>

      <div className="modal-footer">
        <Button className="confirm-btn" onClick={onHiding}>닫기</Button>
      </div>

    </Popup>
  )
}


export { ErrorPopup1 }