import React from "react";
import styled, { css } from "styled-components";
import { device } from "../device";
import logo from "./logo.svg";

const Logo = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: center;
`;
const LogoText = styled.span`
  display: none;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 25px;
    font-weight: normal;
    color: #fff;
    margin-left: 12px;
    display: inline-block;
  }
`;

const HeaderLogo = () => (
  <Logo>
    <img src={logo} alt="" />
    <LogoText>aviasales</LogoText>
  </Logo>
);

export default HeaderLogo;
