import React from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";

const SearchInputTo = styled.div`
  position: relative;
  width: 100%;

  @media ${device.tablet} {
    padding-right: 1px;
  }
  @media ${device.laptopL} {
    padding-right: 2px;
  }
`;

const To = styled.input`
  width: 100%;
  height: 54px;
  margin-bottom: 2px;
  padding: 16px;

  font-size: 16px;
  line-height: 20px;

  border: 2px solid #fff;

  border-radius: 0px;

  @media ${device.tablet} {
    border-radius: 0px 5px 0px 0px;
  }
  @media ${device.laptopL} {
    border-radius: 0px;
  }
`;

const InputFilled = styled.span`
  position: absolute;
  right: 16px;
  padding-top: 18px;
  font-size: 16px;
  color: #a0b0b9;
`;

const InputTo = ({ place, onClick, city, engcity }) => (
  <SearchInputTo>
    <To place={place} type="text" onClick={onClick} placeholder={city} />
    <InputFilled>{engcity}</InputFilled>
  </SearchInputTo>
);

export default InputTo;
