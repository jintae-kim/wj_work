import { Button, TextBox } from "devextreme-react";
import React, { useRef, useState } from "react";

const LoginPage = () => {

  // const [idVal, setIdVal] = useState('');
  // const [pwVal, setPwVal] = useState('');
  const [isDisabled, setDisabled] = useState(true); 

  const idInput = useRef();
  const pwInput = useRef();  

  // const handleValueChange = (e) => {
  //   const previousValue = e.previousValue;
  //   const newValue = e.value;

  //   setIdVal(newValue); 
  // }

  // const handleValueChange2 = (e) => {
  //   const previousValue = e.previousValue;
  //   const newValue = e.value;

  //   setPwVal(newValue);
  // }

  const valueCheck = () => { 
    const idVal = idInput.current._element.querySelector('.dx-texteditor-input').value;
    const pwVal = pwInput.current._element.querySelector('.dx-texteditor-input').value;
      
    (!idVal == '' && !pwVal == '') ? setDisabled(false) : setDisabled(true);
  }

  return (
    <div className="login-page">

      <div className="login-wrap">
        <h1 className="login-tit">LOGIN</h1>
        
        <form action="">
          <TextBox            
            placeholder="ID" 
            className="login-id"            
            value=""  
            // onValueChanged={handleValueChange}
            onKeyUp={valueCheck}
            ref={idInput}
          />

          <TextBox 
            mode="password"            
            placeholder="PWD" 
            className="login-pwd" 
            value=""           
            // onValueChanged={handleValueChange2}
            onKeyUp={valueCheck}
            ref={pwInput}
          />

          <Button 
            type="submit" 
            text="Login"
            className="login-btn"
            disabled={isDisabled}                     
          />

          <Button 
            type="submit" 
            text="취 소" 
            className="cancel-btn"           
          />
        </form>

      </div>      

    </div>
  )

}

export { LoginPage }