import React, { useState } from "react";
import { fetchQuizQuestions } from "../API/API";
//components
import QuestionCard from "../components/QuestionCard/QuestionCard";
import SvgSvgLoader from "../iconComponents/SvgLoader";
import { StartButton } from "../components/StartButton/StartButton";
import Category from "../components/Category/Category";
import FinalScore from "../components/FinalScore/FinalScore";
// import SvgBackgoundSvg from "./iconComponents/BackgoundSvg";
import Header from "../components/Header/Header";
//types
import { QuestionsState, Difficulty } from "../API/API";
//styles
import { GlobalStyle } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const category = [
  "General Knowledge",
  "Sports",
  "Computers",
  "Geography",
  "Music",
  "Vehicles",
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
  const [catDis, setCatDis] = useState(false);
  const [cat, setCat] = useState("");

  //********************events*************************
  const startTrivia = async () => {
    setloading(true);
    setGameOver(false);
    setUserAnswers([]);
    setAnswered(0);
    setFinished(false);
    setChecked(false);
    setCatDis(true);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      cat,
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
    setCatDis(false);
    setCat("");
  };

  const disableCat = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCatDis(true);
    const cat = e.currentTarget.value;
    setCat(cat);
  };
  //***************************************************

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header heading={"React-Quiz-App"} />

        {/* {*************  FinalScore  **************} */}

        {finished && <FinalScore score={score} totalQ={TOTAL_QUESTIONS} />}

        {/* {**************** categories  ******************} */}

        <Category category={category} callback={disableCat} catDis={catDis} />

        {/**********  Start/Restart Button ************/}

        {gameOver || finished ? (
          <StartButton
            callback={startTrivia}
            answered={answered === TOTAL_QUESTIONS ? true : false}
          />
        ) : null}

        {/****************  SVG Loader  ******************/}
        {loading && (
          <div
            style={{
              marginTop: "80px",
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
