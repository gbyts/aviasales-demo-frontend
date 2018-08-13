import React, { Component } from "react";
import styled, { css } from "styled-components";
import luggage from "./luggage.svg";
import handbag from "./handbag.svg";
import point from "./point.svg";
import arrow from "./arrow.svg";
import planeOff from "./plane-taking-off.svg";
import arrowDown from "./arrowDown.svg";
import x from "./x.svg";
import divider from "./divider.png";
import rossiya from "./rossiya.png";
import rossiyaSmall from "./rossiya-small.png";
import redwings from "./redwings.png";
import redwingsSmall from "./redwings-small.png";
import fly from "./fly.png";
import airline from "./airline.png";
import nordwind from "./nordwind.png";
import nordwindAir from "./nordwind-air.png";
import departplane from "./departplane.svg";
import returnplane from "./returnplane.svg";
import clock from "./clock.png";

const Section = styled.div`
  flex-basis: 79%;
`;
const SearchResults = styled.div``;
const ResultBlock = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  background: #ffffff;
  border-radius: 4px;
`;
const PriceBlock = styled.div`
  flex-basis: 28%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border-right: 1px solid #dddddd;
`;
const Luggage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 15px;

  font-weight: bold;
  line-height: normal;
  font-size: 10px;
  text-align: center;
  letter-spacing: -0.4px;
  color: #9ab0b9;
`;
const Handbag = styled.div`
  background: url(${luggage}) no-repeat center;
  width: 19px;
  height: 20px;

  padding: 7px 3.5px 1px 3.5px;
`;
const Bagage = styled.div`
  background: url(${handbag}) no-repeat center;
  width: 17px;
  height: 23px;

  margin-left: 4px;

  padding: 7px 2.5px 5px 2.5px;
`;
const Buy = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;
const BuyButton = styled.button`
  width: 162px;
  height: 48px;

  background: #ff6d00;
  border-radius: 4px;

  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  text-align: center;

  color: #fff;
`;
const Where = styled.div`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #a0b0b9;
`;
const MorePrices = styled.div`
  margin-top: 24px;
`;
const Dilers = styled.div``;
const Diler = styled.div``;
const DilerPrice = styled.div``;
const More = styled.div`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #59bce5;
  text-align: center;
`;
const Info = styled.div`
  flex-basis: 69%;
  padding: 16px 10px 24px 16px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div``;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Charter = styled.div`
  width: 60px;
  height: 26px;
  margin-right: 14px;

  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #2196f3;
  border-radius: 15px;

  font-weight: normal;
  line-height: 18px;
  font-size: 10px;

  color: #23a9f6;

  padding: 4px 11px 4px 11px;
`;
const Arrow = styled.div``;
const Departure = styled.div`
  & {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: 12px;
    padding-bottom: 12px;

    position: relative;
  }
`;
const Boarding = styled.div``;
const BoardingTime = styled.div`
  display: flex;
  align-items: center;

  line-height: 40px;
  font-size: 28px;
  color: #323333;
`;
const Pushpin = styled.div`
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #a0b0b9;
  border-radius: 50px;

  background: url(${point}) no-repeat center;

  padding: 4.5px;
`;
const Time = styled.div`
  margin-left: 8px;
`;
const BoardingPlace = styled.div`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;
const BoardingDate = styled.div`
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;
const Flight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 45%;
`;
const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 7px;
  margin-bottom: 15px;
`;
const Circle = styled.div`
  width: 11px;
  height: 11px;
  background: #ffffff;
  border: 1px solid #a0b0b9;
  box-sizing: border-box;
  border-radius: 50px;
`;
const Line = styled.div`
  width: 205px;
  height: 1px;
  background: #a0b0b9;

  margin-left: 2px;
  margin-right: 2px;
`;
const ThirdLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const PlaneOn = styled.div`
  background: url(${planeOff}) no-repeat center;
  width: 16px;
  height: 8px;
`;
const PlaneOff = styled.div`
  background: url(${planeOff}) no-repeat center;
  width: 16px;
  height: 8px;
  transform: rotate(45deg);
`;
const Hours = styled.div`
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;

  color: #a0b0b9;
`;
const Airport = styled.div`
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;
  color: #4a4a4a;
`;
const Landing = styled.div``;
const LandingTime = styled.div`
  line-height: 40px;
  font-size: 28px;
  color: #323333;
  text-align: right;
`;
const LandingPlace = styled.div`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
  text-align: right;
`;
const LandingDate = styled.div`
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
  text-align: right;
`;
const Return = styled.div`
  & {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;

    padding-top: 14px;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background: url(${divider}) repeat-x;
  }
`;
const OpenTicket = styled.div`
  & {
    position: relative;
    flex-basis: 3%;
    background: #edf5f7;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ArrowOpen = styled.div`
  width: 10px;
  height: 5px;
  top: 132px;
  left: 6px;
  background: url(${arrowDown}) no-repeat;
  background-size: 10px 5px;
`;
const ShowMore = styled.div`
  width: 100%;
  height: 55px;
  background: #00acde;
  border-radius: 4px;

  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  padding-top: 18px;
`;

class TabletResults extends Component {
  render() {
    const results = [
      {
        item: 1,
        best: "cheapest",
        besttext: "Самый дешевый",
        airline: rossiya,
        charter: true,
        departplace: "Москва",
        landingplace: "Барселона",
        carryon: "5",
        baggage: "15",
        price: "7 712 Р",
        dealer: "Clickavia",
        departuredate: "24 фев 2018, Сб",
        departuretime: "00:05",
        boardingdate: "24 фев 2018, Сб",
        boardingtime: "03:05",
        departureairport: "VKO",
        boardingairport: "BCN",
        flighttime: "5 ч",
        departtype: "Прямой",
        returndeparturedate: "3 мар 2018, Сб",
        returndeparturetime: "10:35",
        returnboardingdate: "3 мар 2018, Сб",
        returnboardingtime: "17:10",
        returndepartureairport: "BCN",
        returnboardingairport: "SVO",
        returnflighttime: "4ч 35м",
        returntype: "Прямой"
      },
      {
        item: 2,
        best: "fastest",
        besttext: "Самый быстрый",
        airline: fly,
        charter: true,
        departplace: "Москва",
        landingplace: "Барселона",
        carryon: "5",
        baggage: "15",
        price: "7 712 Р",
        dealer: "Clickavia",
        departuredate: "24 фев 2018, Сб",
        departuretime: "00:05",
        boardingdate: "24 фев 2018, Сб",
        boardingtime: "03:05",
        departureairport: "VKO",
        boardingairport: "BCN",
        flighttime: "5 ч",
        departtype: "Прямой",
        returndeparturedate: "3 мар 2018, Сб",
        returndeparturetime: "10:35",
        returnboardingdate: "3 мар 2018, Сб",
        returnboardingtime: "17:10",
        returndepartureairport: "BCN",
        returnboardingairport: "SVO",
        returnflighttime: "4ч 35м",
        returntype: "Прямой"
      },
      {
        item: 3,
        best: "best",
        besttext: "Лучший билет",
        airline: nordwind,
        charter: true,
        departplace: "Москва",
        landingplace: "Барселона",
        carryon: "5",
        baggage: "15",
        price: "7 712 Р",
        dealer: "Clickavia",
        departuredate: "24 фев 2018, Сб",
        departuretime: "00:05",
        boardingdate: "24 фев 2018, Сб",
        boardingtime: "03:05",
        departureairport: "VKO",
        boardingairport: "BCN",
        flighttime: "5 ч",
        departtype: "Прямой",
        returndeparturedate: "3 мар 2018, Сб",
        returndeparturetime: "10:35",
        returnboardingdate: "3 мар 2018, Сб",
        returnboardingtime: "17:10",
        returndepartureairport: "BCN",
        returnboardingairport: "SVO",
        returnflighttime: "4ч 35м",
        returntype: "Прямой"
      },
      {
        item: 4,
        best: "none",
        airline: nordwindAir,
        charter: true,
        departplace: "Москва",
        landingplace: "Барселона",
        carryon: "5",
        baggage: "15",
        price: "7 712 Р",
        dealer: "Clickavia",
        departuredate: "24 фев 2018, Сб",
        departuretime: "00:05",
        boardingdate: "24 фев 2018, Сб",
        boardingtime: "03:05",
        departureairport: "VKO",
        boardingairport: "BCN",
        flighttime: "5 ч",
        departtype: "Прямой",
        returndeparturedate: "3 мар 2018, Сб",
        returndeparturetime: "10:35",
        returnboardingdate: "3 мар 2018, Сб",
        returnboardingtime: "17:10",
        returndepartureairport: "BCN",
        returnboardingairport: "SVO",
        returnflighttime: "4ч 35м",
        returntype: "Прямой"
      },
      {
        item: 5,
        best: "none",
        airline: redwings,
        charter: true,
        departplace: "Москва",
        landingplace: "Барселона",
        carryon: "5",
        baggage: "15",
        price: "7 712 Р",
        dealer: "Clickavia",
        departuredate: "24 фев 2018, Сб",
        departuretime: "00:05",
        boardingdate: "24 фев 2018, Сб",
        boardingtime: "03:05",
        departureairport: "VKO",
        boardingairport: "BCN",
        flighttime: "5 ч",
        departtype: "Прямой",
        returndeparturedate: "3 мар 2018, Сб",
        returndeparturetime: "10:35",
        returnboardingdate: "3 мар 2018, Сб",
        returnboardingtime: "17:10",
        returndepartureairport: "BCN",
        returnboardingairport: "SVO",
        returnflighttime: "4ч 35м",
        returntype: "Прямой"
      },
      {
        item: 6,
        best: "none",
        airline: redwingsSmall,
        charter: true,
        departplace: "Москва",
        landingplace: "Барселона",
        carryon: "5",
        baggage: "15",
        price: "7 712 Р",
        dealer: "Clickavia",
        departuredate: "24 фев 2018, Сб",
        departuretime: "00:05",
        boardingdate: "24 фев 2018, Сб",
        boardingtime: "03:05",
        departureairport: "VKO",
        boardingairport: "BCN",
        flighttime: "5 ч",
        departtype: "Прямой",
        returndeparturedate: "3 мар 2018, Сб",
        returndeparturetime: "10:35",
        returnboardingdate: "3 мар 2018, Сб",
        returnboardingtime: "17:10",
        returndepartureairport: "BCN",
        returnboardingairport: "SVO",
        returnflighttime: "4ч 35м",
        returntype: "Прямой"
      },
      {
        item: 7,
        best: "none",
        airline: rossiyaSmall,
        charter: true,
        departplace: "Москва",
        landingplace: "Барселона",
        carryon: "5",
        baggage: "15",
        price: "7 712 Р",
        dealer: "Clickavia",
        departuredate: "24 фев 2018, Сб",
        departuretime: "00:05",
        boardingdate: "24 фев 2018, Сб",
        boardingtime: "03:05",
        departureairport: "VKO",
        boardingairport: "BCN",
        flighttime: "5 ч",
        departtype: "Прямой",
        returndeparturedate: "3 мар 2018, Сб",
        returndeparturetime: "10:35",
        returnboardingdate: "3 мар 2018, Сб",
        returnboardingtime: "17:10",
        returndepartureairport: "BCN",
        returnboardingairport: "SVO",
        returnflighttime: "4ч 35м",
        returntype: "Прямой"
      }
    ];

    function showsearchresults() {
      return (
        <SearchResults>
          {results.map(function(sr) {
            return (
              <ResultBlock>
                <PriceBlock>
                  <Luggage>
                    <Handbag>{sr.carryon}</Handbag>
                    <Bagage>{sr.baggage}</Bagage>
                  </Luggage>
                  <Buy>
                    <BuyButton>
                      Купить <br />за {sr.price}
                    </BuyButton>
                  </Buy>
                  <Where>на {sr.dealer}</Where>
                  <MorePrices>
                    <Dilers>
                      <Diler>{}</Diler>
                      <DilerPrice>{}</DilerPrice>
                    </Dilers>
                    <More>еще {} предложения</More>
                  </MorePrices>
                </PriceBlock>
                <Info>
                  <Header>
                    <Logo>
                      <img src={sr.airline} alt="" />
                    </Logo>
                    <Icons>
                      <Charter>ЧАРТЕР</Charter>
                      <Arrow>
                        <img src={arrow} alt="" />
                      </Arrow>
                    </Icons>
                  </Header>
                  <Departure>
                    <Boarding>
                      <BoardingTime>
                        <Pushpin />
                        <Time>{sr.departuretime}</Time>
                      </BoardingTime>
                      <BoardingPlace>{sr.departplace}</BoardingPlace>
                      <BoardingDate>{sr.departuredate}</BoardingDate>
                    </Boarding>
                    <Flight>
                      <FirstLine>
                        <PlaneOn />
                        <Hours>Всего {sr.flighttime}</Hours>
                        <PlaneOff />
                      </FirstLine>
                      <SecondLine>
                        <Circle />
                        <Line />
                        <Circle />
                      </SecondLine>
                      <ThirdLine>
                        <Airport>{sr.departureairport}</Airport>
                        <Airport>{sr.boardingairport}</Airport>
                      </ThirdLine>
                    </Flight>
                    <Landing>
                      <LandingTime>{sr.boardingtime}</LandingTime>
                      <LandingPlace>{sr.landingplace}</LandingPlace>
                      <LandingDate>{sr.boardingdate}</LandingDate>
                    </Landing>
                  </Departure>
                  <Return>
                    <Boarding>
                      <BoardingTime>
                        <Pushpin />
                        <Time>{sr.returndeparturetime}</Time>
                      </BoardingTime>
                      <BoardingPlace>{sr.landingplace}</BoardingPlace>
                      <BoardingDate>{sr.returndeparturedate}</BoardingDate>
                    </Boarding>
                    <Flight>
                      <FirstLine>
                        <PlaneOn />
                        <Hours>Всего {sr.returnflighttime}</Hours>
                        <PlaneOff />
                      </FirstLine>
                      <SecondLine>
                        <Circle />
                        <Line />
                        <Circle />
                      </SecondLine>
                      <ThirdLine>
                        <Airport>{sr.returndepartureairport}</Airport>
                        <Airport>{sr.returnboardingairport}</Airport>
                      </ThirdLine>
                    </Flight>
                    <Landing>
                      <LandingTime>{sr.returnboardingtime}</LandingTime>
                      <LandingPlace>{sr.departplace}</LandingPlace>
                      <LandingDate>{sr.returnboardingdate}</LandingDate>
                    </Landing>
                  </Return>
                </Info>
                <OpenTicket>
                  <ArrowOpen />
                </OpenTicket>
              </ResultBlock>
            );
          })}
          <ShowMore>Показать еще 10 билетов!</ShowMore>
        </SearchResults>
      );
    }

    return <Section>{showsearchresults()}</Section>;
  }
}

export default TabletResults;
