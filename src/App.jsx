import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  const onChangeText = (event) => {
    setInputTodo(event.target.value);
  };
  const onClickTodo = () => {
    if (inputTodo === "") return;
    const newTodos = [...incompleteTodos, inputTodo];
    setIncompleteTodos(newTodos);
    setInputTodo("");
  };
  const onClickDelet = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickReplace = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div class="input-area">
        <input
          placeholder="ToDoを入力"
          value={inputTodo}
          onChange={onChangeText}
        />
        <button onClick={onClickTodo}>追加</button>
      </div>
      <div class="incomplete-area">
        <p>未完了のToDo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>追加</button>
                <button onClick={() => onClickDelet(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div class="complete-area">
        <p>完了したToDo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <button onClick={() => onClickReplace(index)}>もどす</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
