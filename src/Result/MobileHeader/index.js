import React, { Component } from "react";
import styled, { css } from "styled-components";
import CurrencyBlock from "../Currency.js";
import back from "./back.png";

const Header = styled.div``;
const Top = styled.div`
  background: linear-gradient(
    170.14deg,
    #00b0de 0.36%,
    #01aedc 4.04%,
    #02abdb 7.77%,
    #02abdb 11.48%,
    #02abdb 11.7%,
    #196ebd 100%
  );
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 6px 10px 6px;
`;
const Back = styled.div`
  background: url(${back});
  width: 16px;
  height: 16px;
`;
const Destination = styled.div`
  display: flex;
  flex-direction: column;
`;
const FromTo = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: #fff;
`;
const Dates = styled.div`
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #fff;
`;

const Up = styled.div`
  padding-top: 8px;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
`;
const UpButton = styled.button`
  width: 88px;
  height: 28px;
  background: #00ace2;
  mix-blend-mode: normal;
  opacity: 0.5;
  border-radius: 100px;
  font-weight: 900;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;

  color: #fff;
`;

class MobileHeader extends Component {
  render() {
    return (
      <Header>
        <Top>
          <Back />
          <Destination>
            <FromTo>Москва - Барселона</FromTo>
            <Dates>24 фев - 3 март, 1 пассажир</Dates>
          </Destination>
          <CurrencyBlock />
        </Top>
        <Up>
          <UpButton>Наверх</UpButton>
        </Up>
      </Header>
    );
  }
}

export default MobileHeader;
