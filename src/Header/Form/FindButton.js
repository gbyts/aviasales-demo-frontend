import React from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import aero from "./aero.svg";

const Button = styled.button`
  & {
    width: 100%;
    height: 100%;
    background-color: #ff9241;
    border: 2px solid #ff9241;
    border-radius: 4px;
    font-size: 24px;
    font-weight: 900;
    color: #fff;
    text-align: left;
    padding-left: 52px;
  }
  ${props =>
    props.where === "result" &&
    css`
      & {
        border-radius: 0px 0px 5px 0px;
        text-align: center;
        padding-left: 0;
        font-size: 20px;
        @media ${device.laptopL} {
          border-radius: 0px 5px 5px 0px;
        }
      }
      &:after {
        display: none;
      }
    `};
  &:after {
    content: "";
    position: absolute;
    top: 17px;
    right: 24px;
    background: url(${aero}) no-repeat;
    background-size: 26px 21px;
    width: 26px;
    height: 21px;
  }
`;

const FindButton = ({ where }) => <Button where={where}>Найти билеты</Button>;

export default FindButton;
