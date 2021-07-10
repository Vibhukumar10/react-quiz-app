import styled from "styled-components";

type props = {
  score: number;
};

export const ScoreCSS = styled.div<props>`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .design {
    padding: 0 20px;
  }

  h1 {
    padding: 15px;
    font-family: roboto mono, sans-serif;
    background: ${({ score }) =>
      score >= 7 ? "lightgreen" : score < 7 && score >= 4 ? "#FFC947" : "red"};
    font-size: 1.5rem;
    border: 2px dashed #111;
    border-radius: 20px;
  }

  @media (max-width: 500px) {
    .container {
      width: 300px;
      margin-bottom: 30px;
    }

    h1 {
      text-align: center;
      width: 200px;
      font-size: 1rem;
    }
  }
`;
