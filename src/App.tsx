import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
//components
import QuestionCard from "./components/QuestionCard";
import SvgSvgLoader from "./iconComponents/SvgLoader";
// import Score from "./components/Score";
import { StartButton } from "./components/StartButton";
// import SvgBackgoundSvg from "./iconComponents/BackgoundSvg";
import Header from "./components/Header";
//types
import { QuestionsState, Difficulty } from "./API";
//styles
import { GlobalStyle } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const category = [
  "Sports",
  "Computers",
  "General Knowledge",
  "Maths",
  "Music",
  "Geography",
];

const TOTAL_QUESTIONS = 10;

function App() {
  //********************useStates**********************
  const [loading, setloading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [answered, setAnswered] = useState(0);
  const [finished, setFinished] = useState(false);
  const [checked, setChecked] = useState(false);

  // console.log("loading: ", loading);
  // console.log("questions: ", questions);
  // console.log("number: ", number);
  // console.log("userAnswers: ", userAnswers);
  // console.log("score: ", score);
  // console.log("gameOver: ", gameOver);
  // console.log("answered: ", answered);
  // console.log("finished: ", finished);
  // console.log("checked: ", checked);

  //********************events*************************
  const startTrivia = async () => {
    setloading(true);
    setGameOver(false);
    setUserAnswers([]);
    setAnswered(0);
    setFinished(false);
    setChecked(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setNumber(0);
    setloading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      setChecked(true);
      const answer = e.currentTarget.value;
      //check asnwer against the correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if (correct) {
        setScore((prev) => prev + 1);
      }
      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
      setAnswered((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    //move to the next question if not the last question
    const nextQuestion = number + 1;
    setChecked(false);

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const finishQuiz = () => {
    setFinished(true);
  };

  //***************************************************

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header heading={"React-Quiz-App"} />

        {/* {*************  FinalScore  **************} */}

        {finished && (
          <div>
            <h1>
              Your Score is: {score}/{TOTAL_QUESTIONS}
            </h1>
          </div>
        )}

        {/* {**************** categories  ******************} */}

        {/* <div>
          {category.map((foundCategory) => (
            <div>
              <button>
                <span>{foundCategory}</span>
              </button>
            </div>
          ))}
        </div> */}

        {/**********  Start/Restart Button ************/}

        {gameOver || finished ? (
          <StartButton
            callback={startTrivia}
            answered={answered === TOTAL_QUESTIONS ? true : false}
          />
        ) : null}

        {/*************  SVG Loader  ******************/}
        {loading && (
          <div
            style={{
              marginTop: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgSvgLoader />
          </div>
        )}

        {/* {****************  Question Card  ****************} */}

        {!loading && !gameOver && !finished && (
          <QuestionCard
            score={score}
            totalQ={TOTAL_QUESTIONS}
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answer={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
            nextCallback={nextQuestion}
            checked={checked}
            finishCallback={finishQuiz}
          />
        )}
      </div>
    </>
  );
}

export default App;
