import React from "react";

type props = {
  score: number;
  totalQ: number;
};

const Score: React.FC<props> = ({ score, totalQ }) => {
  return (
    <p className="score">
      Score: {score}/{totalQ}
    </p>
  );
};

export default Score;
