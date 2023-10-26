import React, {useState} from "react";
import { Button } from "devextreme-react";
import { ErrorPopup1 } from "../components/Popup";
import { ErrorPopup2 } from "../components/Popup";

const Error = () => {

  const [isErrorType1, setIsErrorType1] = useState(false);
  const [isErrorType2, setIsErrorType2] = useState(false);

  const openError1 = () => {
    setIsErrorType1(!isErrorType1);
  };

  const openError2 = () => {
    setIsErrorType2(!isErrorType2);
  };


  return (
    <div>

      <h1>error</h1>

      <div>
        <Button className="normal-button" onClick={openError1}>에러 타입1</Button>
        <Button className="normal-button" onClick={openError2}>에러 타입2</Button>
      </div>

      <ErrorPopup1 visible={isErrorType1} onHiding={openError1} />
      <ErrorPopup2 visible={isErrorType2} onHiding={openError2} />


    </div>
  )
}


export { Error }