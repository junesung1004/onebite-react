import React from "react";
import "./Main.css";
// JSX 문법 주의사항
// 1.중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// {IF문, 반복문} 이러한 한줄로 표현이 안되는 것은 사용 못한다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

export default function Main() {
  const user = {
    name: "박준성",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div className="logout">로그인</div>;
  }

  //위 코드를 아래 삼항연산자로 표현할 수 있다.
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
}
