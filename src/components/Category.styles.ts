import styled from "styled-components";

type ButtonWrapperProps = {
  catDis: boolean;
};

export const CatCSS = styled.div`
  .container {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 0 20px;
  }

  @media (max-width: 768px) {
    .container {
      width: 400px;
      flex-wrap: wrap;
      button {
        margin: 0.35rem 0rem;
      }
    }
  }

  @media (max-width: 500px) {
    .container {
      width: 300px;
      flex-wrap: wrap;
      button {
        font-size: 0.75rem;
        width: 100px;
        height: 45px;
        margin: 0.3rem 0.1rem;
      }
    }
  }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    text-align: center;
    height: 40px;
    background: transparent;
    border-radius: 20px;
    font-size: 0.9rem;
    padding: 0 10px;
    border: 3px solid #fff;
  }

  button:disabled,
  button[disabled] {
    border: 3px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }

  button:hover {
    background: lightblue;
    transition: 0.5s;
  }
`;
