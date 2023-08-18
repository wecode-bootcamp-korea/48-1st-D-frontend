import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickName: '',
    phoneNumber: '',
    birthday: 'YYYY-MM-DD',
  });

  const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(false);
  const [showPasswordErrorMessage, setShowPasswordErrorMessage] =
    useState(false);
  const [showPasswordConfirmErrorMessage, setShowPasswordConfirmErrorMessage] =
    useState(false);
  const [showNicknameErrorMessage, setShowNicknameErrorMessage] =
    useState(false);
  const [showPhoneNumberErrorMessage, setShowPhoneNumberErrorMessage] =
    useState(false);
  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate(-1);
  };

  const handleInput = event => {
    const { value, id } = event.target;

    setUserInfo(prev => ({ ...prev, [id]: value }));

    if (id === 'email') {
      const isEmailValid = value.includes('@') && value.includes('.');

      isEmailValid
        ? setShowEmailErrorMessage(false)
        : setShowEmailErrorMessage(true);
    }

    if (id === 'password') {
      const isPasswordValid =
        value.length >= 5 && /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value);

      isPasswordValid
        ? setShowPasswordErrorMessage(false)
        : setShowPasswordErrorMessage(true);
    }

    if (id === 'passwordConfirm' || id === 'password') {
      const passwordSame =
        id === 'passwordConfirm'
          ? value === userInfo.password
          : value === userInfo.passwordConfirm;

      passwordSame
        ? setShowPasswordConfirmErrorMessage(false)
        : setShowPasswordConfirmErrorMessage(true);
    }

    if (id === 'nickName') {
      const isValidNickname = 2 <= value.length && value.length <= 6;
      isValidNickname
        ? setShowNicknameErrorMessage(false)
        : setShowNicknameErrorMessage(true);
    }

    if (id === 'phoneNumber') {
      const isValidPhoneNumber = value.length == 11;
      isValidPhoneNumber
        ? setShowPhoneNumberErrorMessage(false)
        : setShowPhoneNumberErrorMessage(true);
    }
  };

  useEffect(() => {}, [
    userInfo,
    showEmailErrorMessage,
    showPasswordErrorMessage,
    showPasswordConfirmErrorMessage,
    showNicknameErrorMessage,
    showPhoneNumberErrorMessage,
  ]);

  const isInputValid =
    showEmailErrorMessage == false &&
    showNicknameErrorMessage == false &&
    showPasswordErrorMessage == false &&
    showPasswordConfirmErrorMessage == false &&
    userInfo.email.trim() !== '' &&
    userInfo.password.trim() !== '' &&
    userInfo.passwordConfirm.trim() !== '' &&
    userInfo.nickName.trim() !== '' &&
    userInfo.phoneNumber.trim() !== '';

  // const goToSignUpDone = () => {
  //   if (isInputValid === true) {
  //     navigate('/signup-done');
  //   } else {
  //     alert('실패');
  //   }
  // };

  const goToSignUpDone = () => {
    fetch('http://10.58.52.111:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
        passwordConfirm: userInfo.passwordConfirm,
        nickName: userInfo.nickName,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          navigate('/signup-done');
        } else {
          alert('실패');
        }
      });
  };

  return (
    <div className="signUp">
      <div className="btnPrev">
        <button onClick={goPrevPage}>뒤로</button>
      </div>
      <div className="inputWrap">
        <h2>회원가입</h2>
        <div className="inputBox">
          <div className="title">
            <p>기본 정보</p>
            <span>필수사항</span>
          </div>
          <input
            type="email"
            id="email"
            onChange={handleInput}
            placeholder="이메일"
          />
          {showEmailErrorMessage && (
            <span className="error">이메일을 확인하세요</span>
          )}

          <input
            type="text"
            id="password"
            onChange={handleInput}
            placeholder="비밀번호"
          />
          {showPasswordErrorMessage && (
            <span className="error">
              특수문자 1개 이상 포함, 5글자 이상이어야 합니다
            </span>
          )}
          <input
            type="text"
            id="passwordConfirm"
            onChange={handleInput}
            placeholder="비밀번호 확인"
          />
          {showPasswordConfirmErrorMessage && (
            <span className="error">위의 비밀번호와 일치하지 않습니다</span>
          )}
        </div>
        <div className="inputBox">
          <div className="title">
            <p>닉네임과 프로필 이미지</p>
            <span>선택사항</span>
          </div>
          <input
            type="text"
            id="nickName"
            onChange={handleInput}
            placeholder="닉네임"
          />
          {showNicknameErrorMessage && (
            <span className="error">2자 이상 6자 이하여야 합니다</span>
          )}
        </div>
        <div className="inputBox">
          <div className="title">
            <p>전화번호</p>
            <span>선택사항</span>
          </div>
          <input
            type="tel"
            id="phoneNumber"
            onChange={handleInput}
            placeholder="휴대폰 번호를 입력해주세요."
          />
          {showPhoneNumberErrorMessage && (
            <span className="error">핸드폰 번호를 확인해주세요</span>
          )}
        </div>
        <div className="inputBox">
          <div className="title">
            <p>생일</p>
            <span>선택사항</span>
          </div>
          <input
            type="date"
            id="birthday"
            onChange={handleInput}
            placeholder="생년월일을 입력해주세요."
          />
        </div>{' '}
        <button
          className="btnSubmit"
          onClick={goToSignUpDone}
          disabled={!isInputValid}
        >
          회원 가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
