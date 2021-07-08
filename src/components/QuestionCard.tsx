import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
//types
import { AnswerObject } from "../App";
//styles
import { CardCSS, ButtonWrapper } from "./QuestionCard.styles";

type props = {
  score: number;
  totalQ: number;
  question: string;
  answer: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  nextCallback: () => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
  checked: boolean;
  finishCallback: () => void;
};

const QuestionCard: React.FC<props> = ({
  score,
  totalQ,
  nextCallback,
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
  checked,
  finishCallback,
}) => (
  <CardCSS>
    <div className="container">
      <div className="status-bar">
        <div className="question-number">
          Question: {questionNr} / {totalQuestions}
        </div>
        <div className="score">
          Score: {score} / {totalQ}
        </div>
      </div>
      <div className="quiz">
        <div className="question">
          <div dangerouslySetInnerHTML={{ __html: question }} />
          {checked && questionNr !== totalQ && (
            <div className="next">
              <button onClick={nextCallback}>
                <ArrowForwardIosIcon style={{ color: "black" }} />
              </button>
            </div>
          )}

          {checked && questionNr === totalQ && (
            <div className="finish">
              <button onClick={finishCallback}>Finish</button>
            </div>
          )}
        </div>
        <div className="options">
          {answer.map((answer) => (
            <ButtonWrapper
              key={answer}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
              answered={checked}
            >
              <button
                className="option-btn"
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </ButtonWrapper>
          ))}
        </div>
      </div>

      {/* <div className="next">
        <button onClick={nextCallback}>
          <ArrowForwardIosIcon />
        </button>
      </div> */}
    </div>
  </CardCSS>
);

export default QuestionCard;
