import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のToDo</p>
        <ul>
          <div>
            <li>とど</li>
            <button>追加</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了したToDo</p>
        <ul>
          <div>
            <li>とど</li>
            <button>もどす</button>
          </div>
        </ul>
      </div>
    </>
  );
};
