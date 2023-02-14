import React from "react";
import { useController, useFormContext } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.div`
  margin-top: 10px;
  & input {
    padding: 20px;
    border: 1px solid transparent;
    width: 100%;
    background-color: #f3f3f4;
    border-radius: 8px;
    outline: none;
    &:hover {
      border-color: rgba(0, 0, 0, 0.1);
      background-color: #fff;
      box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
      transition: background-color 200ms ease, outline 200ms ease,
        color 200ms ease, box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
    }
  }
`;

const Input = ({ name, type = "text", ...props }) => {
  const { control } = useFormContext();
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <InputStyles>
      <input type={type} {...props} {...field}></input>
    </InputStyles>
  );
};

export default Input;
