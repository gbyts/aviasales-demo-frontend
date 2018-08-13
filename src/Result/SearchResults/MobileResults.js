import React, { Component } from "react";
import styled, { css } from "styled-components";
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

const SearchResults = styled.div``;
const ResultBlock = styled.div`
  margin-bottom: 8px;
`;
const BestChoice = styled.div`
  padding-left: 6px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  color: #fff;

  display: ${({ kind }) =>
    (kind === "fastest" && "block") ||
    (kind === "cheapest" && "block") ||
    (kind === "best" && "block") ||
    "none"};

  background: ${({ kind }) =>
    (kind === "fastest" && "#AF7542") ||
    (kind === "cheapest" && "#83D40B") ||
    (kind === "best" && "#C279D1") ||
    ""};
`;
const PriceLogo = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Price = styled.div`
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
`;
const Logo = styled.img``;
const Info = styled.div`
  padding: 16px 6px 14px 6px;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;
  background: #ffffff;
`;
const Departure = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Return = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DepartPlane = styled.div`
  background: url(${departplane}) no-repeat;
  background-size: 12px 12px;
  width: 12px;
  height: 12px;
  margin-left: 7px;
  margin-right: 8px;
`;
const ReturnPlane = styled.div`
  background: url(${returnplane}) no-repeat;
  background-size: 12px 12px;
  width: 12px;
  height: 12px;
  margin-left: 7px;
  margin-right: 8px;
`;
const Clock = styled.div`
  background: url(${clock}) no-repeat;
  background-size: 12px 12px;
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
`;
const Hours = styled.div`
  display: flex;
  align-items: center;
`;
const Type = styled.div`
  text-align: right;
`;

class SearchResult extends Component {
  render() {
    const results = [
      {
        item: 1,
        best: "cheapest",
        besttext: "Самый дешевый",
        airline: rossiya,
        price: "7 712 Р",
        departtime: "00:05 - 03:05",
        departhours: "5 ч",
        departtype: "Прямой",
        returntime: "10:35 - 17:10",
        returnhours: "4ч 35м",
        returntype: "Прямой"
      },
      {
        item: 2,
        best: "fastest",
        besttext: "Самый быстрый",
        airline: fly,
        price: "9 269 Р",
        departtime: "07:30 - 09:50",
        departhours: "4ч 20м",
        departtype: "Прямой",
        returntime: "11:20 - 17:35",
        returnhours: "4ч 15м",
        returntype: "CDG"
      },
      {
        item: 3,
        best: "best",
        besttext: "Лучший билет",
        airline: nordwind,
        price: "8 029 Р",
        departtime: "00:15 - 03:10",
        departhours: "4ч 55м",
        departtype: "Прямой",
        returntime: "10:45 - 17:15",
        returnhours: "4ч 30м",
        returntype: "CDG"
      },
      {
        item: 4,
        best: "none",
        airline: nordwindAir,
        price: "8 164 Р",
        departtime: "00:15 - 03:10",
        departhours: "4ч 55м",
        departtype: "Прямой",
        returntime: "10:45 - 17:15",
        returnhours: "4ч 30м",
        returntype: "Прямой"
      },
      {
        item: 5,
        best: "none",
        airline: redwings,
        price: "8 240 Р",
        departtime: "07:00 - 09:30",
        departhours: "4ч 30м",
        departtype: "Прямой",
        returntime: "11:00 - 17:10",
        returnhours: "4ч 10м",
        returntype: "Прямой"
      },
      {
        item: 6,
        best: "none",
        airline: redwingsSmall,
        price: "9 108 Р",
        departtime: "00:05 - 03:05",
        departhours: "5ч",
        departtype: "Прямой",
        returntime: "11:00 - 17:10",
        returnhours: "4ч 10м",
        returntype: "Прямой"
      },
      {
        item: 7,
        best: "none",
        airline: rossiyaSmall,
        price: "9 485 Р",
        departtime: "00:05 - 03:05",
        departhours: "5ч",
        departtype: "Прямой",
        returntime: "11:20 - 17:35",
        returnhours: "4ч 15м",
        returntype: "Прямой"
      }
    ];

    function showsearchresults() {
      return (
        <SearchResults>
          {results.map(function(sr) {
            return (
              <ResultBlock>
                <BestChoice kind={sr.best}>{sr.besttext}</BestChoice>
                <Info>
                  <PriceLogo>
                    <Price>{sr.price}</Price>
                    <Logo src={sr.airline} alt="" />
                  </PriceLogo>
                  <Departure>
                    <Time>
                      <DepartPlane />
                      {sr.departtime}
                    </Time>
                    <Hours>
                      <Clock />
                      {sr.departhours}
                    </Hours>
                    <Type>{sr.departtype}</Type>
                  </Departure>
                  <Return>
                    <Time>
                      <ReturnPlane />
                      {sr.returntime}
                    </Time>
                    <Hours>
                      <Clock />
                      {sr.returnhours}
                    </Hours>
                    <Type>{sr.returntype}</Type>
                  </Return>
                </Info>
              </ResultBlock>
            );
          })}
        </SearchResults>
      );
    }

    return <div>{showsearchresults()}</div>;
  }
}

export default SearchResult;
