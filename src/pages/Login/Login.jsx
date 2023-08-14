import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <h1>로그인 화면</h1>
      <div className="logoWrap">
        <h2 className="logoImg"></h2>
        <h3 className="logoText"></h3>
      </div>
      <div className="inputBox">
        <input
          type="text"
          id="userId"
          //onChange={}
          placeholder="이메일"
        />
        <input
          type="password"
          id="userPw"
          //onChange={}
          placeholder="비밀번호"
        />
        <button className="btnLogin">로그인</button>
        <div className="btnWrap">
          <button
            className="btnSignUp"
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </button>
          <button className="btnFindPassword">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
