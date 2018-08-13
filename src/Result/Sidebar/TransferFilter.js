import React from "react";
import styled from "styled-components";
import FilterSection from "./FilterSection.js";
import BlockHeader from "./BlockHeader.js";
import CloseButton from "./CloseButton.js";
import check from "./check.svg";

const FilterContent = styled.div``;
const ChechboxList = styled.div``;
const ChechboxListItem = styled.div`
  position: relative;
`;
const ItemLabel = styled.div`
  display: flex;
  align-items: center;

  font-weight: normal;
  line-height: 36px;
  font-size: 12px;
  color: #4a4a4a;
`;
const Box = styled.span`
&{
  display: inline-block;
  position: relative;
  width: 19px;
  height: 19px;
  background: ${props => (props.checked ? "#E1F8FF" : "#fff")}
  border: 1px solid #00ace2;
  box-sizing: border-box;
  border-radius: 4px;

  margin-right: 6px;
}
&:after {
    content: "";
    display: ${props => (props.checked ? "block" : "none")}
    position: absolute;
    top: 7px;
    left: 6px;
    background: url(${check}) no-repeat;
    background-size: 6px 4px;
    width: 6px;
    height: 4px;
  }
`;
const CheckboxInput = styled.input`
  display: none;
`;
const ItemPrice = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;

  font-weight: normal;
  line-height: 36px;
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

const TransferFilter = () => (
  <FilterSection>
    <BlockHeader open>Пересадки</BlockHeader>
    <CloseButton />
    <FilterContent>
      <ChechboxList>
        <ChechboxListItem>
          <ItemLabel>
            <Box>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Все
          </ItemLabel>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Без пересадок
          </ItemLabel>
          <ItemPrice>7 712 Р</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            1 пересадка
          </ItemLabel>
          <ItemPrice>11 150 Р</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            2 пересадки
          </ItemLabel>
          <ItemPrice>16 821 Р</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            3 пересадки
          </ItemLabel>
          <ItemPrice>23 986 Р</ItemPrice>
        </ChechboxListItem>
      </ChechboxList>
    </FilterContent>
  </FilterSection>
);

export default TransferFilter;
