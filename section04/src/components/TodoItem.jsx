import React from "react";
import "../styles/TodoItem.css";

export default function TodoItem({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelet = () => {
    isDone && onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        checked={isDone}
        readOnly
        type="checkbox"
        onChange={onChangeCheckbox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelet}>삭제</button>
    </div>
  );
}
