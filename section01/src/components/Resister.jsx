//간단한 회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

import { useState, useRef } from "react";

const Resister = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);

    setInput({
      ...setInput,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      // console.log(inputRef.current);
      console.log(inputRef);
      inputRef.current.focus();
    }
  };

  // const onChangeName = (e) => {
  //   setInput({
  //     ...input,
  //     name: e.target.value,
  //   });
  // };

  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   });
  // };

  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input,
  //     bio: e.target.value,
  //   });
  // };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={input.name}
        />
      </div>
      <div>
        <input
          type="date"
          name="birth"
          onChange={onChange}
          value={input.birth}
        />
      </div>
      <div>
        <select name="country" onChange={onChange} value={input.country}>
          <option></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"jp"}>일본</option>
          <option value={"ch"}>중국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" onChange={onChange} value={input.bio}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </>
  );
};

export default Resister;
