import React from "react";
import styled from "styled-components";

const LabelStyles = styled.label`
  cursor: pointer;
  font-weight: 700;
`;

const Label = ({ htmlFor, children, ...props }) => {
  return (
    <LabelStyles htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyles>
  );
};

export default Label;
