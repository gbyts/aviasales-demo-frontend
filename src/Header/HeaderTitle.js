import React from "react";
import styled, { css } from "styled-components";
import { device } from "../device";

const Title = styled.h1`
  margin-top: 80px;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #fff;

  @media ${device.tablet} {
    font-size: 32px;
    line-height: 40px;
    font-weight: bold;
  }
  @media ${device.laptopL} {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Title2 = styled.h2`
  display: none;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: normal;
    font-weight: bold;
    color: #fff;
    margin-top: 8px;
    display: block;
    text-align: center;
  }
  @media ${device.laptopL} {
    font-size: 24px;
  }
`;

const HeaderTitle = () => (
  <div>
    <Title>Поиск дешевых авиабилетов</Title>
    <Title2>Лучший способ купить авиабилеты дешево</Title2>
  </div>
);

export default HeaderTitle;
