import React from "react";

export const CompleteTodos = (props) => {
  const { cTodos, funcIncomplete } = props;
  return (
    <div className="complete-area">
      <p>完了したToDo</p>
      <ul>
        {cTodos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => funcIncomplete(index)}>もどす</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
