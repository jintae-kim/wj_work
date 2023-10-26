import { Button, TextBox } from "devextreme-react";
import React, { useState } from "react";
import {
  Validator,
  RequiredRule
} from 'devextreme-react/validator';

const LoginPage = () => {

  const [idVal, setIdVal] = useState('');
  const [pwVal, setPwVal] = useState('');  

  const handleIdChange = (e) => {
    const newValue = e.value;
    setIdVal(newValue);
    console.log(idVal);
  }

  const handlePasswordChange = (e) => {
    const newValue = e.value;
    setPwVal(newValue);
    console.log(pwVal);
  }

  const isLoginDisabled = idVal === '' || pwVal === '';

  const handleLogin = () => {
    if (!isLoginDisabled) {
      // 로그인 로직을 이곳에 추가하십시오.

    }
  };

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
            onValueChanged={handleIdChange}
          >
            <Validator>
                <RequiredRule
                  message="아이디를 입력해주세요" />
            </Validator>
          </TextBox>

          <TextBox 
            mode="password"            
            placeholder="Password"
            className="login-pwd"
            isRequired={true}
            value={pwVal}           
            onValueChanged={handlePasswordChange}
          >
            <Validator>
              <RequiredRule
                message="비밀번호를 입력해주세요" />
            </Validator>
          </TextBox>

          <Button 
            type="submit" 
            text="Login"
            className="login-btn"
            onValueChanged={handlePasswordChange}
            disabled={isLoginDisabled}
          />

          <Button 
            type="submit" 
            text="취 소" 
            className="cancel-btn"
            onClick={handleLogin}
          />

        </form>

      </div>      

    </div>
  )

}

export { LoginPage }