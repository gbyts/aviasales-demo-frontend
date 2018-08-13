import React from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";

const Filter = styled.div`
  padding-top: 12px;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 150px;
  height: 40px;
  background: #00ace2;
  border-radius: 100px;
  font-weight: 900;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #fff;
`;

const ButtonMobile = () => (
  <Filter>
    <Button>Фильтровать</Button>
  </Filter>
);

export default ButtonMobile;
