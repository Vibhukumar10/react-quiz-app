import styled from "styled-components";

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
  answered: boolean;
};

export const CardCSS = styled.div`
  .container {
    background-color: #ffffff;
    /*background-image: url("https://www.transparenttextures.com/patterns/worn-dots.png");*/
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    padding: 1rem 3em 2rem;
    border-radius: 75px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .status-bar {
    padding: 0 2rem;
    font-size: 1rem;
    font-family: "Roboto Mono", monospace;
    display: flex;
    justify-content: space-between;
  }

  .quiz {
    height: 225px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .question {
    padding: 20px 0;
    width: 275px;
    text-align: left;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .options {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  /*.wrapper {
    width: 300px;
    height: 50px;
    background: transparent;
    border-radius: 20px;
    font-size: 0.9rem;
  }*/

  .next {
    button {
      border: 2px solid #111;
      background: transparent;
      height: 50px;
      width: 50px;
      border-radius: 100%;
    }

    button:hover {
      background: lightgreen;
      color: white;
      transition: 0.5s;
    }
  }

  .finish {
    button {
      background: transparent;
      border: 2px solid #111;
      height: 35px;
      width: 100px;
      border-radius: 10px;
      font-size: 1rem;
      font-family: "Roboto Mono", monospace;
    }
    button:hover {
      background: lightgreen;
      color: white;
      transition: 0.5s;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 350px;
      height: 500px;
    }

    .quiz {
      flex-wrap: wrap;
      justify-content: center;
    }

    .next {
      position: absolute;
      bottom: 210px;
      right: 237.5px;
    }

    .finish {
      position: absolute;
      bottom: 210px;
      right: 210px;
    }

    .options {
      width: 100%;
      height: 250px;
    }

    .question {
      width: 100%;
      height: 80px;
    }

    .status-bar {
      padding: 0 4px;
      margin-top: 20px;
    }
  }

  @media (max-width: 500px) {
    .container {
      width: 200px;
      height: 420px;
    }

    .quiz {
      flex-wrap: wrap;
      justify-content: center;
    }

    .next {
      position: absolute;
      bottom: 50px;
      right: 166px;
    }

    .finish {
      position: absolute;
      bottom: 57px;
      right: 140px;
    }

    .options {
      width: 100%;
      height: 225px;
    }

    .question {
      font-size: 15px;
      width: 100%;
      height: 70px;
    }

    .status-bar {
      text-decoration: underline;
      font-size: 0.6rem;
      margin-top: 10px;
    }
  }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    text-align: left;
    width: 300px;
    height: 50px;
    font-family: Montserrat, sans-serif;
    background: transparent;
    border-radius: 20px;
    font-size: 0.9rem;
    padding-left: 20px;
    border: ${({ correct, userClicked }) =>
      correct
        ? "2px solid green"
        : !correct && userClicked
        ? "2px solid red"
        : "2px solid #000"};

    font-size: ${({ answered, correct, userClicked }) =>
      answered && (userClicked || correct) ? "1rem" : "0.9rem"};

    color: ${({ answered, correct, userClicked }) =>
      answered && (userClicked || correct) ? "#111" : ""};

    background: ${({ correct, userClicked }) =>
      correct
        ? "lightgreen"
        : !correct && userClicked
        ? "#E98580"
        : "transparent"};
  }

  button:hover {
    background: ${({ answered }) => !answered && "lightblue"};
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    button {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    button {
      width: 100%;
      font-size: 12px;
    }
  }
`;
