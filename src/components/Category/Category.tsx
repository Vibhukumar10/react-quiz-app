import React from "react";
import { CatCSS, ButtonWrapper } from "./Category.styles";

type props = {
  category: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  catDis: boolean;
};

const Category: React.FC<props> = ({ category, callback, catDis }) => (
  <CatCSS>
    <div className="container">
      {category.map((foundCat) => (
        <ButtonWrapper key={foundCat} className="cat-btn" catDis={catDis}>
          <button
            onClick={callback}
            disabled={catDis ? true : false}
            value={
              foundCat === "Sports"
                ? "21"
                : foundCat === "Computers"
                ? "18"
                : foundCat === "General Knowledge"
                ? "9"
                : foundCat === "Music"
                ? "12"
                : foundCat === "Geography"
                ? "22"
                : foundCat === "Vehicles"
                ? "28"
                : ""
            }
          >
            <span dangerouslySetInnerHTML={{ __html: foundCat }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </CatCSS>
);

export default Category;
