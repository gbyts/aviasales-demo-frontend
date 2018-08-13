import React from "react";
import styled from "styled-components";
import FilterSection from "./FilterSection.js";
import BlockHeader from "./BlockHeader.js";
import check from "./check.svg";

const FilterContent = styled.div`
  margin-bottom: 25px;
`;
const Header = styled.div`
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;

  color: #323333;
`;
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

const AirlinesFilter = () => (
  <FilterSection>
    <BlockHeader open>Авиакомпании</BlockHeader>
    <FilterContent>
      <Header>Альянсы</Header>
      <ChechboxList>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
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
            Star Alliance
          </ItemLabel>
          <ItemPrice>11 150 Р</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            One World
          </ItemLabel>
          <ItemPrice>12 370 Р</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            SkyTeam
          </ItemLabel>
          <ItemPrice>16 290 Р</ItemPrice>
        </ChechboxListItem>
      </ChechboxList>
    </FilterContent>

    <FilterContent>
      <Header>Авиакомпании</Header>
      <ChechboxList>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
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
            Aegean Airlines
          </ItemLabel>
          <ItemPrice>20 357 ₽</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Air Algerie
          </ItemLabel>
          <ItemPrice>29 105 ₽</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Air Europa
          </ItemLabel>
          <ItemPrice>22 202 ₽</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Air France
          </ItemLabel>
          <ItemPrice>17 050 ₽</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Air Moldova
          </ItemLabel>
          <ItemPrice>22 613 ₽</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Alitalia
          </ItemLabel>
          <ItemPrice>22 717 ₽</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Alitalia CityLiner
          </ItemLabel>
          <ItemPrice>20 271 ₽</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Belle Air
          </ItemLabel>
          <ItemPrice>18 371 ₽</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            British Airways
          </ItemLabel>
          <ItemPrice>23 839 ₽</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Brussels Airlines
          </ItemLabel>
          <ItemPrice>11 150 ₽</ItemPrice>
        </ChechboxListItem>
        <ChechboxListItem>
          <ItemLabel>
            <Box checked>
              <CheckboxInput type="checkbox" id="" />
            </Box>
            Bulgaria Air
          </ItemLabel>
          <ItemPrice>20 114 ₽</ItemPrice>
        </ChechboxListItem>
      </ChechboxList>
    </FilterContent>
  </FilterSection>
);

export default AirlinesFilter;
