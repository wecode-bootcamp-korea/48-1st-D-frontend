import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="signup">
      <h1>회원가입 화면</h1>
      <div className="btnPrev">
        <button onClick={goToLogin}>뒤로</button>
      </div>
      <div className="inputWrap">
        <h2>회원가입</h2>
        <div className="inputBox">
          <p>기본 정보</p>
          <span>필수사항</span>
          <input
            type="text"
            id="userEmail"
            //onChange={}
            placeholder="이메일"
          />
          <input
            type="password"
            id="userPw"
            //onChange={}
            placeholder="비밀번호"
          />
          <input
            type="password"
            id="pwConfirm"
            //onChange={}
            placeholder="비밀번호 확인"
          />
        </div>
        <div className="inputBox">
          <p>닉네임과 프로필 이미지</p>
          <span>선택사항</span>
          <input
            type="text"
            id="userName"
            //onChange={}
            placeholder="닉네임"
          />
        </div>
        <div className="inputBox">
          <p>전화번호</p>
          <span>선택사항</span>
          <select>
            <option key="" value="">
              010
            </option>
            <option key="" value="">
              016
            </option>
            <option key="" value="">
              017
            </option>
            <option key="" value="">
              018
            </option>
            <option key="" value="">
              070
            </option>
          </select>
          <input
            type="text"
            id="userName"
            //onChange={}
            placeholder="휴대폰 번호를 입력해주세요."
          />
        </div>
        <div className="inputBox">
          <p>생일</p>
          <span>선택사항</span>
          <input
            type="text"
            id="userName"
            //onChange={}
            placeholder="닉네임"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
