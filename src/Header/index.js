import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderLogo from "./HeaderLogo.js";
import HeaderTitle from "./HeaderTitle.js";
import InputFrom from "./Form/InputFrom.js";
import InputTo from "./Form/InputTo.js";
import InputDates from "./Form/InputDates.js";
import PassangersSelect from "./Form/PassangersSelect.js";
import FindButton from "./Form/FindButton.js";
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

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    flex-basis: 40%;
  }
`;

const Passangers = styled.div`
  position: relative;
  flex-basis: 100%;

  @media ${device.tablet} {
    flex-basis: 50%;
    padding-right: 1px;
  }
  @media ${device.laptopL} {
    flex-basis: 20%;
  }
`;
const Button = styled.div`
  position: relative;
  width: 308px;
  height: 56px;
  margin-top: 16px;
  margin-bottom: 88px;

  @media ${device.tablet} {
    margin-top: 32px;
    margin-bottom: 122px;
  }
  @media ${device.laptopL} {
    margin-top: 48px;
    margin-bottom: 254px;
  }
`;

class Header extends Component {
  render() {
    return (
      <AppHeader>
        <div className="container">
          <HeaderLogo />
          <HeaderTitle />
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
                <FindButton />
              </Button>
            </Content>
          </SearchForm>
        </div>
      </AppHeader>
    );
  }
}

export default Header;
