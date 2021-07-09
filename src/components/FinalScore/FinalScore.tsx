import React from "react";
import { ScoreCSS } from "./FinalScore.styles";

type props = {
  score: number;
  totalQ: number;
};

const FinalScore: React.FC<props> = ({ score, totalQ }) => (
  <ScoreCSS>
    <div className="container">
      <div className="design">
        <h1>
          Your Score is: {score}/{totalQ}
        </h1>
      </div>
    </div>
  </ScoreCSS>
);

export default FinalScore;
