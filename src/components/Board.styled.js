import styled from "styled-components";

export const BoardBox = styled.div`
  min-width: 400px;
  min-height: 100px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const TheEditor = styled.textarea`
  background-color: #eee;
  width: 100%;
  height: 100%;
  padding: 2em;
  font-size: 1em;
  resize: none;
`;

export const Container = styled.div`
  width: 70%;
  margin: 2em auto;
`;
