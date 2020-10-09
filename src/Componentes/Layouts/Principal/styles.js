import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #000;

  .refLink {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  background: rgb(80, 155, 245);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 3em;
  color: #fff;
  height: 5em;

  .Logo {
    font-size: 2em;
    color: #fff;
  }
`;

export const Main = styled.div`
  min-height: calc(100vh - 7em);
  background: #fff;
  padding: 1em 3em;
`;

export const Footer = styled.div`
  background: #000;
  height: 2em;
  width: 100vw;
  color: #fff;
  text-align: end;
  padding: 0.5em 3em;
`;
