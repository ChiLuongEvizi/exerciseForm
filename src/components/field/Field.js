import React from "react";
import styled from "styled-components";

const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Field = ({ children }) => {
  return <FieldStyles>{children}</FieldStyles>;
};

export default Field;
