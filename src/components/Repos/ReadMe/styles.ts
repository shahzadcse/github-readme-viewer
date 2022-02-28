import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;

  div {
    word-break: break-all;
  }
  ul li > h1 {
    font-size: 5rem;
    color: yellow;
  }
  a {
    color: #8b949e;
    display: flex;
    transition: all 0.5s;

    &:hover {
      color: #58a6ff;
      filter: brightness(1.1);
    }
  }
`;
