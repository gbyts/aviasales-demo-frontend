import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderLogo from "../Header/HeaderLogo.js";
import CurrencyBlock from "./Currency";
import InputFrom from "../Header/Form/InputFrom.js";
import InputTo from "../Header/Form/InputTo.js";
import InputDates from "../Header/Form/InputDates.js";
import PassangersSelect from "../Header/Form/PassangersSelect.js";
import FindButton from "../Header/Form/FindButton.js";
import { device } from "../device";

const AppHeader = styled.section`
  background: linear-gradient(
    121.89deg,
    #00b0de 0.36%,
    #01aedc 4.04%,
    #02abdb 7.77%,
    #02abdb 11.48%,
    #02abdb 11.7%,
    #196ebd 100%
  );
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;

  @media ${device.tablet} {
    margin-top: 38px;
  }
  @media ${device.laptopL} {
    margin-top: 33px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.laptopL} {
    flex-wrap: nowrap;
  }
`;

const Places = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    flex-basis: 100%;
  }
  @media ${device.laptopL} {
    flex-direction: row;
    flex-basis: 58%;
  }
`;

const Passangers = styled.div`
  position: relative;
  flex-basis: 100%;
  padding-right: 2px;

  @media ${device.tablet} {
    flex-basis: 25%;
  }
  @media ${device.laptopL} {
    flex-basis: 20%;
  }
`;
const Button = styled.div`
  position: relative;
  flex-basis: 25%;
  height: 54px;

  @media ${device.tablet} {
    padding-right: 1px;
  }
  @media ${device.laptopL} {
    margin-left: 16px;
    flex-basis: 21.7%;
  }
`;

class Header extends Component {
  render() {
    return (
      <AppHeader>
        <div className="container">
          <HeaderTop>
            <HeaderLogo />
            <CurrencyBlock />
          </HeaderTop>
          <SearchForm action="/results">
            <Content>
              <Places>
                <InputFrom place="first" city="Москва" engcity="MOW" />
                <InputTo city="Город прибытия" engcity="BCN" />
              </Places>
              <InputDates />
              <Passangers>
                <PassangersSelect />
              </Passangers>
              <Button>
                <FindButton where="result" />
              </Button>
            </Content>
          </SearchForm>
        </div>
      </AppHeader>
    );
  }
}

export default Header;
