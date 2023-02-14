import React from "react";
import { useController, useFormContext } from "react-hook-form";
import styled from "styled-components";

const CheckboxStyles = styled.input`
  display: none;
`;

const Checkbox = ({ name, ...props }) => {
  const { control } = useFormContext();
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <CheckboxStyles type="checkbox" {...props} {...field}></CheckboxStyles>
  );
};

export default Checkbox;
