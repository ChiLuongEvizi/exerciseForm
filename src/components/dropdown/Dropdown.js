import React, { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import styled from "styled-components";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  & .dropdown-list {
    border: 1px solid transparent;
    background-color: #f3f3f4;
    padding: 20px;
    border-radius: 10px;
    &:hover {
      background-color: #fff;
      box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
      transition: background-color 200ms ease, outline 200ms ease,
        color 200ms ease, box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
    }
  }
`;

const Dropdown = ({ name, data, dropdownLabel }) => {
  const [label, setLabel] = useState(dropdownLabel);
  const { control, setValue } = useFormContext();
  const { show, setShow, nodeRef } = useClickOutSide();

  const watchJob = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });

  const handleClick = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };

  useEffect(() => {
    if (watchJob === "") setLabel(dropdownLabel);
  }, [watchJob]);

  return (
    <DropdownWrapper ref={nodeRef}>
      <div
        className="dropdown-list"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span>{label}</span>
      </div>
      {show ? (
        <div className="absolute w-full  bg-[#dee2e6] rounded-lg mt-1 ">
          {data.map((item) => (
            <div
              className="p-4 border-b-2 border-b-gray-200 cursor-pointer hover:bg-gray-200 hover:rounded-lg"
              onClick={handleClick}
              data-value={item.value}
              key={item.id}
            >
              {item.text}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
