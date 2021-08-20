import React from "react";
import styled from "styled-components";
import errorImg from "../../assets/error.svg";

export default function ErrorComponent({ message }) {
  return (
    <Container>
      <img src={errorImg} alt="error" />
      <h3>{message}</h3>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    padding: 1rem;
    text-align: center;
    font-weight: 500;
    color: #fff;
    margin-top: 1em;
  }
  img {
    width: 25%;
    min-width: 220px;
  }
`;
