import React from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import calendar from "./calendar.svg";

const DepartDate = styled.div`
  & {
    position: relative;
    flex-basis: 50%;
    padding-right: 2px;
  }
  &:after {
    position: absolute;
    top: 18px;
    right: 16px;
    background: url(${calendar}) no-repeat;
    background-size: 17px 20px;
    width: 17px;
    height: 20px;
    content: "";
  }
`;
const DateRange = styled.div`
  display: flex;
  flex-basis: 100%;

  @media ${device.tablet} {
    flex-basis: 50%;
    padding-right: 2px;
  }
  @media ${device.laptopL} {
    flex-basis: 40%;
  }
`;
const Depart = styled.input`
  width: 100%;
  height: 54px;
  margin-bottom: 2px;
  padding: 16px;

  font-size: 16px;
  line-height: 20px;
  color: #a0b0b9;
  font-weight: 300;

  border: 2px solid #fff;
  border-radius: 0px;

  @media ${device.tablet} {
    border-radius: 0px 0px 0px 5px;
  }
  @media ${device.laptopL} {
    border-radius: 0px;
  }
`;
const Return = styled.input`
  width: 100%;
  height: 54px;
  margin-bottom: 2px;
  padding: 16px;

  font-size: 16px;
  line-height: 20px;
  color: #a0b0b9;
  font-weight: 300;

  border: 2px solid #fff;
  border-radius: 0px;
`;
const ReturnDate = styled.div`
  & {
    flex-basis: 50%;
    position: relative;
    padding-right: 0;
  }
  &:after {
    position: absolute;
    top: 18px;
    right: 16px;
    background: url(${calendar}) no-repeat;
    background-size: 17px 20px;
    width: 17px;
    height: 20px;
    content: "";
  }
`;

const InputDates = ({ place, onClick, city, engcity }) => (
  <DateRange>
    <DepartDate>
      <Depart type="text" placeholder="Туда" />
    </DepartDate>
    <ReturnDate>
      <Return type="text" placeholder="Обратно" />
    </ReturnDate>
  </DateRange>
);

export default InputDates;
