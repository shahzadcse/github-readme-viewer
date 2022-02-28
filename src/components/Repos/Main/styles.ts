import styled from "styled-components";

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 5rem 1.5rem 1.5rem 1.5rem;

  max-width: 100%;

  @media (max-width: 500px) {
    padding: 3.5rem 1rem 1rem 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 1rem;
      height: fit-content;
      background: rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid #21262d;
      width: auto;
      & + li {
        margin-top: 1rem;
      }

      &:last-child {
        border: 0px;

        .fork-star {
          margin-bottom: 0;
        }
      }

      h1 {
        margin: 0;
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }

      .desc-link {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;

        span {
          width: 90%;
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
      }

      .fork-star {
        display: flex;
        align-items: center;
        font-size: 15px;
        margin-bottom: 1rem;

        svg {
          color: #8b949e;
          margin-right: 5px;

          &:hover {
            color: #58a6ff;
            filter: brightness(1.1);
          }
        }

        svg:last-child {
          margin-left: 5px;
        }
      }
    }
  }
`;
