import styled from "styled-components";

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

  .option-btn {
    text-align: left;
    width: 300px;
    height: 50px;
    font-family: Montserrat, sans-serif;
    background: transparent;
    border: 1px solid #000;
    border-radius: 20px;
    font-size: 0.9rem;
    padding-left: 20px;
  }

  .next {
    button {
      border: 1px solid #111;
      background: transparent;
      height: 50px;
      width: 50px;
      border-radius: 100%;
    }

    button:hover {
      background: lightgreen;
      color: white;
    }
  }

  .finish {
    button {
      background: transparent;
      border: 1px solid #111;
      height: 35px;
      width: 100px;
      border-radius: 10px;
      font-size: 1rem;
      font-family: "Roboto Mono", monospace;
    }
  }
`;
