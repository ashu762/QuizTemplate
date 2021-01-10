import React, { useState } from "react";
import questions from "../questions";
import CheckList from "./CheckList";
import Todo from "./Todo";
const TodoList = () => {
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(new Array(questions.length).fill(0));
  console.log(checked);
  return (
    <div class="quiz">
      {questions.map((question, index) => {
        return (
          <Todo
            question={question}
            score={score}
            setScore={setScore}
            indexNum={index}
            checked={checked}
            setChecked={setChecked}
          />
        );
      })}
      <div>{score}</div>
      <CheckList checked={checked} />
    </div>
  );
};

export default TodoList;
