import React from "react";
import { StartCSS } from "./StartButton.styles";

type props = {
  answered: boolean;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const StartButton: React.FC<props> = ({ answered, callback }) => (
  <StartCSS>
    <div className="button">
      <button className="glow-on-hover" onClick={callback}>
        {answered ? "Play Again" : "Play"}
      </button>
    </div>
  </StartCSS>
);
