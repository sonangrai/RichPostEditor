import React from "react";
import { BoardBox, TheEditor, Container } from "./Board.styled";
import { useState, useEffect, useRef } from "react";
import Preview from "./Preview";

const Board = () => {
  let prevRef = useRef();
  const [post, setPost] = useState("Helloo");
  const [focused, setFocused] = useState(false);

  const postUpdate = (e) => {
    setPost(e.target.value);
  };

  /**
   * Checked the outside click
   * @param {*} ref
   */
  function checkOutside(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setFocused(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  checkOutside(prevRef);

  const showEditor = () => {
    setFocused(true);
  };

  return (
    <Container ref={prevRef} onClick={showEditor}>
      <Preview data={post} focused={focused} />
      <BoardBox show={focused}>
        <TheEditor contenteditable="true" onChange={postUpdate} value={post} />
      </BoardBox>
    </Container>
  );
};

export default Board;
