import React, { Component } from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import rating from "./rating.png";
import apple from "./apple.png";
import android from "./android.png";
import windows from "./windows.png";
import phone from "./phone.png";
import phoneTab from "./phoneTab.png";
import phoneDesk from "./phoneDesk.png";

const Section = styled.section`
  margin-top: 24px;
  background: linear-gradient(132.6deg, #00b0de 0%, #196ebd 100%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Title = styled.div``;
const Header = styled.h2`
  font-size: 24px;
  line-height: normal;
  font-weight: 500;
  text-align: center;
  color: #fff;
`;

const Rating = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding-bottom: 15px;
`;
const RatingIcons = styled.div`
  margin-right: 8px;
`;
const RatingText = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;
const Download = styled.div`
display: flex;
flex-direction: row
flex-wrap: nowrap`;

const Phone = styled.div`
  background-image: url(${phone});
  width: 162px;
  height: 213px;

  @media ${device.tablet} {
    background-image: url(${phoneTab});
    width: 237px;
    height: 312px;
  }
  @media ${device.laptopL} {
    background-image: url(${phoneDesk});
    width: 234px;
    height: 308px;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  margin-left: 10px;
`;
const Apple = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-bottom: 20px;
`;
const AppleIcon = styled.div`
  margin-right: 8px;
`;
const AppleText = styled.div``;
const Android = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-bottom: 20px;
`;
const AndroidIcon = styled.div`
  margin-right: 8px;
`;
const AndroidText = styled.div``;
const WP = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;
const WPIcon = styled.div`
  margin-right: 8px;
`;
const WPText = styled.div``;

class MobileApp extends Component {
  render() {
    return (
      <Section>
        <Title>
          <Header>Скачай мобильное приложение Aviasales.ru</Header>
          <Rating>
            <RatingIcons>
              <img src={rating} alt="" />
            </RatingIcons>
            <RatingText>Более 103 000 оценок</RatingText>
          </Rating>
        </Title>

        <Phone />
        <Links>
          <Apple>
            <AppleIcon>
              <img src={apple} alt="" />
            </AppleIcon>
            <AppleText>iPhone или iPad</AppleText>
          </Apple>
          <Android>
            <AndroidIcon>
              <img src={android} alt="" />
            </AndroidIcon>
            <AndroidText>Android</AndroidText>
          </Android>
          <WP>
            <WPIcon>
              <img src={windows} alt="" />
            </WPIcon>
            <WPText>Windows Phone</WPText>
          </WP>
        </Links>
      </Section>
    );
  }
}

export default MobileApp;
