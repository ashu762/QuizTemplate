import React, { useState } from "react";
import "../App.css";

const Todo = ({ question, score, setScore, indexNum, checked, setChecked }) => {
  const [clicked, setClicked] = useState(false);
  const setClickhandler = (index) => {
    if (clicked) return;
    setClicked(true);
    if (index === question.correctOption) {
      setChecked(
        checked.map((item, index) => {
          return index === indexNum ? 1 : item;
        })
      );
      setScore(score + 1);
    } else {
      setChecked(
        checked.map((item, index) => {
          return index === indexNum ? 2 : item;
        })
      );
    }
  };

  return (
    <div className="question">
      <div className="question-title">{question.name}</div>
      <div>
        {question.options.map((option, index) => {
          return (
            <button
              onClick={() => setClickhandler(index)}
              className={
                clicked && question.correctOption === index
                  ? "green option"
                  : clicked
                  ? "red option"
                  : "option"
              }
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
