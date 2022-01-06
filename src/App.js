import React from "react";
import Board from "./components/Board";
import GlobalStyle from "./styled/Global";

/**
 *
 * @returns Root of the app
 */

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Board />
    </>
  );
};

export default App;
