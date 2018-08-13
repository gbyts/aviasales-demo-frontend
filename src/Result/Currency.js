import React from "react";
import styled from "styled-components";

const Currency = styled.div`
  width: 56px;
  height: 28px;
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 100px;
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  color: #fff;
  padding: 6px 12px 5px 12px;
`;

const CurrencyBlock = () => <Currency>RUB</Currency>;

export default CurrencyBlock;
