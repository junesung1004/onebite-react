//간단한 회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

import { useState } from "react";

const Resister = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({
      ...setInput,
      [e.target.name]: e.target.value,
    });
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
    </>
  );
};

export default Resister;
