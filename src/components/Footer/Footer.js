import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container className="bg-white p-3 text-center mt-5">
      <h5>Rick and Morty &copy; copyright {new Date().getFullYear()}</h5>
    </Container>
  );
}

const Container = styled.div`
  h5 {
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
`;
