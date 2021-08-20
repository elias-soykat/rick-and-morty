import React from "react";
import styled from "styled-components";
import { BarLoader } from "react-spinners";

export default function LoadingComponent() {
  return (
    <Container>
      <BarLoader width="12%" color="#fff" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
