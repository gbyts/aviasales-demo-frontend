import React from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import arrow from "./arrow.svg";

const SearchInputFrom = styled.div`
  position: relative;
  width: 100%;

  @media ${device.tablet} {
    padding-right: 2px;
  }
`;

const From = styled.input`
  width: 100%;
  height: 54px;
  margin-bottom: 2px;
  padding: 16px;

  font-size: 16px;
  line-height: 20px;

  border: 2px solid #fff;

  border-radius: 0px;
  color: #a0b0b9;
  font-weight: 300;

  ${props =>
    props.place === "first" &&
    css`
      border-radius: 5px 5px 0px 0px;
      color: #4a4a4a;
      font-weight: 500;
    `};

  @media ${device.tablet} {
    ${props =>
      props.place === "first" &&
      css`
        border-radius: 5px 0px 0px 0px;
      `};
  }
  @media ${device.laptopL} {
    ${props =>
      props.place === "first" &&
      css`
        border-radius: 5px 0px 0px 5px;
      `};
  }
`;

const InputFilled = styled.span`
  position: absolute;
  right: 45px;
  padding-top: 18px;
  font-size: 16px;
  color: #a0b0b9;
`;

const InputSwap = styled.div`
  background: url(${arrow});
  background-size: 16px 18px;
  position: absolute;
  width: 16px;
  height: 18px;
  right: 16px;
  bottom: 20px;
`;

const InputFrom = ({ place, onClick, city, engcity }) => (
  <SearchInputFrom>
    <From place={place} type="text" onClick={onClick} placeholder={city} />
    <InputFilled>{engcity}</InputFilled>
    <InputSwap />
  </SearchInputFrom>
);

export default InputFrom;
