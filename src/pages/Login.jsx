import { Button, TextBox } from "devextreme-react";
import React, { useState } from "react";
import {
  Validator,
  RequiredRule
} from 'devextreme-react/validator';

const LoginPage = () => {

  const [idVal, setIdVal] = useState('');
  const [pwVal, setPwVal] = useState('');  

  const handleValueChange = (e) => {
    const previousValue = e.previousValue;
    const newValue = e.value;

    setIdVal(newValue);    

    console.log(idVal);
  }

  const handleValueChange2 = (e) => {
    const previousValue = e.previousValue;
    const newValue = e.value;

    setPwVal(newValue);    

    console.log(pwVal);
  }

  return (
    <div className="login-page">

      <div className="login-wrap">
        <h1 className="login-tit">LOGIN</h1>

        <form action="">

          <TextBox            
            placeholder="ID" 
            className="login-id"
            isRequired={true} 
            value={idVal}                           
          >
            <Validator>
                <RequiredRule
                  message="enter message" />
            </Validator>
          </TextBox>

          <TextBox 
            mode="password"            
            placeholder="PWD" 
            className="login-pwd" 
            value={pwVal}           
            onValueChanged={handleValueChange2}
          />

          <Button 
            type="submit" 
            text="Login"
            className="login-btn" 
                    
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