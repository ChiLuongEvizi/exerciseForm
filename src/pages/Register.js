import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/input/Input";
import Field from "../components/field/Field";
import Label from "../components/label/Label";
import Checkbox from "../components/checkbox/Checkbox";
import styled from "styled-components";
import Dropdown from "../components/dropdown/Dropdown";
import Button from "../components/button/Button";

const FormStyles = styled.form`
  margin: 0 auto;
  max-width: 600px;
  padding: 20px 40px;
  height: 100vh;
  & .login {
    text-align: center;
    font-weight: 900;
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;

const data = [
  {
    id: 1,
    text: "Developer",
    value: "developer",
  },
  {
    id: 2,
    text: "Teacher",
    value: "teacher",
  },
  {
    id: 3,
    text: "Doctor",
    value: "doctor",
  },
];

const schema = yup.object({
  username: yup.string().required("Please enter your username"),
  password: yup
    .string()
    .min(8, "Password must be minimum eight characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "At least 1 uppercase letter, 1 number, 1 lowercase letter , 1 special character"
    ),
  email: yup
    .string()
    .email("Please enter valid email. Example:abcxyz@gmail.com ")
    .required("Enter your email"),
});

const Register = () => {
  const methods = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
    defaultValues: {},
  });
  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    watch,
    setFocus,
  } = methods;

  const age = watch("age", false);

  const onSubmitHandler = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        reset();
      }, 5000);
    });
  };

  const handleDemoForm = () => {
    setValue("username", "abc");
    setValue("email", "abcxyz@gmail.com");
    setValue("password", "abc123");
  };

  useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  return (
    <FormProvider {...methods}>
      <FormStyles onSubmit={handleSubmit(onSubmitHandler)}>
        <div class="login">Login</div>
        <Field>
          <Label htmlFor="username">UserName</Label>
          <Input
            name="username"
            id="username"
            type="text"
            placeholder="Enter your username please"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </Field>

        <Field>
          <Label htmlFor="email" className="cursor-pointer">
            Email Address
          </Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email please"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </Field>

        <Field>
          <Label htmlFor="password" className="cursor-pointer">
            Password
          </Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password please"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </Field>

        <Field>
          <div className="flex items-center gap-x-3">
            <Label htmlFor="age" className="cursor-pointer">
              Click & enter your age
            </Label>
            <Checkbox id="age" name="age" />
          </div>
          {age && (
            <Input type="number" placeholder="Enter your age" name="yourAge" />
          )}
        </Field>

        <Field>
          <Dropdown
            name="job"
            dropdownLabel="Please select your job"
            data={data}
          />
        </Field>

        <Button
          className={`p-5 bg-green-500 rounded-lg w-full  my-4 ${
            isSubmitting ? "opacity-50" : ""
          }`}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-4 p-2 border-t-transparent rounded-full animate-spin mx-auto"></div>
          ) : (
            " Submit"
          )}
        </Button>
        <Button onClick={handleDemoForm} className=" bg-slate-500 p-5 ">
          Demo Form
        </Button>
        {isSubmitSuccessful && <div className="text-lg">Successful login</div>}
      </FormStyles>
    </FormProvider>
  );
};

export default Register;
