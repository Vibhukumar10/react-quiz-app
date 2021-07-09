import styled from "styled-components";

export const HeaderCSS = styled.div`
  h1 {
    font-family: Montserrat, roboto;
    font-size: 5rem;
    color: #fff;
    /* background: #ffe4; */
    border: 2px dashed #fff;
    padding: 0.03em 0.25em;
  }

  .header {
    margin: 10px auto 25px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    .header {
      width: 400px;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.9rem;
    }
    .header {
      margin-top: 0;
      text-align: center;
      padding: 4px;
      width: 250px;
    }
  }
`;
