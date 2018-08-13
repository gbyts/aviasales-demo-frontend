import React from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import shape from "./Shape.svg";

const Passangers = styled.select`
  width: 100%;
  height: 54px;
  margin-bottom: 2px;
  padding: 16px;

  background: url(${shape}) right 16px center no-repeat;

  font-size: 16px;
  line-height: 20px;
  color: #a0b0b9;
  font-weight: 300;

  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  @media ${device.tablet} {
    border-radius: 0px 0px 5px 0px;
  }
  @media ${device.laptopL} {
    border-radius: 0px 0px 0px 0px;
  }
`;

const PassangersSelect = () => (
  <Passangers>
    <option value="1 пассажир">1 пассажир</option>
    <span className="select__type">, эконом</span>
  </Passangers>
);

export default PassangersSelect;
