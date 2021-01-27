import React from "react";

const style = {
  backgroundColor: "#c1ffffff",
  width: "400px",
  height: "40px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
export const InputTodo = (props) => {
  const { inputTodo, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        placeholder="ToDoを入力"
        value={inputTodo}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
