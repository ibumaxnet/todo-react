import React from "react";

export const IncompleteTodos = (props) => {
  const { iTodos, funcComplete, funcDelete } = props;
  return (
    <div className="incomplete-area">
      <p>未完了のToDo</p>
      <ul>
        {iTodos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => funcComplete(index)}>追加</button>
              <button onClick={() => funcDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
