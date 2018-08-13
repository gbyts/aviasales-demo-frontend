import React, { Component } from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import Section from "../SectionHeader/Section.js";
import SectionHeader from "../SectionHeader/SectionHeader.js";
import SectionImage from "../SectionHeader/SectionImage.js";
import SectionTitle from "../SectionHeader/SectionTitle.js";
import Group from "./Group.svg";
import Shape from "./Shape.svg";
import culture from "./culture.svg";
import globus from "./globus.svg";
import night from "./night.svg";
import palm from "./palm.svg";
import rest from "./rest.svg";
import shopping from "./shopping.svg";
import flagru from "./flag-ru.png";
import flages from "./flag-es.png";

const ChooseCity = styled.div`
   {
    margin-top: 4px;
    font-size: 18px;
    color: #00ace2;
    text-align: center;
  }
  &:after {
    content: "";
    position: absolute;
    margin-left: 7px;
    margin-top: 2px;
    background: url(${Shape}) no-repeat;
    background-size: 15px 15px;
    width: 15px;
    height: 15px;
  }

  @media ${device.tablet} {
     {
      font-size: 24px;
    }
    &:after {
      margin-top: 7px;
    }
  }
`;
const RestTypes = styled.div`
  margin-top: 32px;
`;
const RestList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /*margin: 0 -30px 10px;*/

  @media ${device.tablet} {
    justify-content: center;
  }
`;
const RestItem = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-bottom: 24px;
`;
const RestIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  border-radius: 50px;
`;
const RestImage = styled.img`
  padding: 13px;
`;
const RestText = styled.div`
  width: 66px;
  margin-top: 12px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #5c5c5c;
  text-transform: uppercase;
`;
const DestList = styled.div`
  /*padding-bottom: 40px;*/
  background: #f8fcff;

  @media ${device.tablet} {
    /*padding-bottom: 48px;*/
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${device.laptopL} {
    padding-bottom: 44px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const DestinationInfo = styled.div`
  margin-top: 10px;
  margin-left: 7px;
  margin-right: 7px;
`;

const DestinationImage = styled.div`
  width: 304px;
  height: 126px;
  border-radius: 8px 8px 0 0;
  background-image: ${props => `url(${props.background})`};

  @media ${device.tablet} {
    width: 612px;
    height: 211px;
  }
  @media ${device.laptopL} {
    width: 509px;
    height: 211px;
  }
`;
const DestinationDescribe = styled.div`
  width: 304px;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 0 0 8px 8px;
  margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 612px;
  }
  @media ${device.laptopL} {
    width: 509px;
  }
`;
const FirstLine = styled.div`
  /*  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;*/
  position: relative;
  padding: 16px 0px 12px 16px;
`;
const SecondLine = styled.div`
  /*  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;*/

  padding: 3px 16px 0px 10px;

  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  color: #a0b0b9;
  white-space: nowrap;
  text-align: right;

  @media ${device.tablet} {
    font-size: 12px;
    line-height: 20px;
  }
`;
const Flag = styled.div`
  display: none;

  @media ${device.tablet} {
    position: absolute;
    display: block;
    width: 46px;
    left: 18px;
    height: 46px;
    background-image: url(${flagru});
  }
`;

const City = styled.div`
  font-size: 16px;
  width: 154px;
  line-height: 20px;
  font-weight: bold;
  color: #5b5b5c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;

  @media ${device.tablet} {
    display: block;
    width: 238px;
    font-size: 22px;
    line-height: 32px;
    margin-left: 55px;
  }
`;
const Price = styled.div`
  font-size: 14px;
  line-height: normal;
  color: #00bae8;

  margin-bottom: 5px;

  @media ${device.tablet} {
    font-size: 22px;
    line-height: 32px;
  }
`;
const Country = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  color: #a0b0b9;
  @media ${device.tablet} {
    margin-left: 55px;
  }
`;
const FlightDate = styled.div``;

class Destinations extends Component {
  render() {
    const resttypes = [
      {
        imgSrc: globus,
        title: "Куда угодно"
      },
      {
        imgSrc: palm,
        title: "Солнец и море"
      },
      {
        imgSrc: shopping,
        title: "Шопинг, город"
      },
      {
        imgSrc: culture,
        title: "Культура и история"
      },
      {
        imgSrc: night,
        title: "Ночная жизнь"
      },
      {
        imgSrc: rest,
        title: "Отдых с детьми"
      }
    ];

    const topdestinations = [
      {
        imgSrc: process.env.PUBLIC_URL + "/img/TopDestinations/krasnodar.png",
        flag: flagru,
        city: "Краснодар",
        country: "Россия",
        price: "1212",
        date: "18 марта"
      },
      {
        imgSrc: process.env.PUBLIC_URL + "/img/TopDestinations/sochi.png",
        flag: flagru,
        city: "Сочи (Адлер)",
        country: "Россия",
        price: "1334",
        date: "27 марта"
      },
      {
        imgSrc: process.env.PUBLIC_URL + "/img/TopDestinations/spb.png",
        flag: flagru,
        city: "Санкт-Петербург",
        country: "Россия",
        price: "1508",
        date: "19 февраля"
      },
      {
        imgSrc: process.env.PUBLIC_URL + "/img/TopDestinations/minvody.png",
        flag: flagru,
        city: "Минеральные воды",
        country: "Россия",
        price: "2074",
        date: "13 марта"
      },
      {
        imgSrc: process.env.PUBLIC_URL + "/img/TopDestinations/simf.png",
        flag: flagru,
        city: "Симферополь (Крым)",
        country: "Россия",
        price: "2407",
        date: "13 марта"
      },
      {
        imgSrc: process.env.PUBLIC_URL + "/img/TopDestinations/barca.png",
        flag: flages,
        city: "Барселона",
        country: "Испания",
        price: "4247",
        date: "24 марта"
      }
    ];

    function showrest() {
      return (
        <RestList>
          {resttypes.map(function(resttype) {
            // movie это объект с данными

            // возвращаем Реакт-компонент
            return (
              <RestItem>
                <RestIcon>
                  <RestImage src={resttype.imgSrc} alt="" />
                </RestIcon>
                <RestText>{resttype.title}</RestText>
              </RestItem>
            );
          })}
        </RestList>
      );
    }

    function showtopdestinations() {
      return (
        <DestList>
          {topdestinations.map(function(topdestination) {
            return (
              <DestinationInfo>
                <DestinationImage background={topdestination.imgSrc} />
                <DestinationDescribe>
                  <FirstLine>
                    <Flag />
                    <City>{topdestination.city}</City>
                    <Country>{topdestination.country}</Country>
                  </FirstLine>
                  <SecondLine>
                    <Price>Найти от {topdestination.price} P</Price>
                    <FlightDate>{topdestination.date}</FlightDate>
                  </SecondLine>
                </DestinationDescribe>
              </DestinationInfo>
            );
          })}
        </DestList>
      );
    }

    return (
      <Section>
        <div className="container">
          <SectionHeader>
            <SectionImage>
              <img src={Group} alt="" />
            </SectionImage>
            <SectionTitle>
              Популярные направления перелетов из города
            </SectionTitle>
            <ChooseCity>Москва</ChooseCity>
          </SectionHeader>
          <RestTypes>{showrest()}</RestTypes>
          {showtopdestinations()}
        </div>
      </Section>
    );
  }
}

export default Destinations;
