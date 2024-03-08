import useInput from "../hooks/useInput";

// 3가지 hook 관련된 팁
// 1.hook은 함수커모넌트, 커스텀 훅 내부에서만 호출 가능
// 2. hook은 조건부 & 반복문으로 호출될 수는 없다.
// 3. 나만의 훅(Custom hook) 직접 만들 수 있다.

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <input type="text" value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
