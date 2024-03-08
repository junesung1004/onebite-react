const Button = ({ text, color, children }) => {
  // console.log(props);

  // 이벤트 객체 제공된다 onClick 등 이벤트를 사용했을때 event -> e 를 사용할 수 있다.
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
