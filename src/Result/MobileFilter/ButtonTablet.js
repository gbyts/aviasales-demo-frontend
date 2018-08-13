import React from "react";
import styled from "styled-components";
import icon from "./filter.png";

const Filter = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 66px;
  height: 48px;
  background: #23a9f6;
  border-radius: 10px;
`;

const ButtonTablet = () => (
  <Filter>
    <Button>
      <img src={icon} alt="" />
    </Button>
  </Filter>
);

export default ButtonTablet;
