import styled from "styled-components";

export const PreviewBox = styled.div`
  margin: 2em auto;
  padding: 2em;
  white-space: pre-line;
  border: 1px solid #777;
  cursor: pointer;
  display: ${(props) => (props.show ? "none" : "block")};
`;
