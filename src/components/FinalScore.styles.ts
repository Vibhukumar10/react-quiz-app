import styled from "styled-components";

export const ScoreCSS = styled.div`
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
    padding: 10px;
    font-family: roboto mono, sans-serif;
    background: #fff;
    border: 2px dashed #fff;
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
