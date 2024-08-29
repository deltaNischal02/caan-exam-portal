// Modal.jsx

import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensure this is high enough */
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 90%;
  max-width: 600px;
  border-radius: 8px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);

  h2 {
    margin-top: 0;
    color: #333;
  }

  p {
    color: #555;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;

      a {
        color: #3f51b5;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #888;
    cursor: pointer;

    &:hover {
      color: #333;
    }
  }
`;

const Modal = ({ children, onClose, }) => {
  

  return (
    <ModalOverlay onClick={onClose}>
  <ModalContent onClick={(e) => e.stopPropagation()}>
    <button className="close-button" onClick={onClose}>
      <FaTimes />
    </button>
    {children}
  </ModalContent>
</ModalOverlay>

  );
};

export default Modal;
