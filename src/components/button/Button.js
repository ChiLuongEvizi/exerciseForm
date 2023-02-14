import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  width: ${(props) => props.width || "100%"};
  border-radius: 10px;
  padding: 10px;
  font-weight: 700;
  color: white;
  background-color: ${(props) => (props.primary ? "#EA4C89" : "")};
  background-color: ${(props) => (props.secondary ? "537FE7" : "")};
`;

const Button = ({ children, type = "button", ...props }) => {
  return (
    <ButtonStyles type={type} {...props}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
