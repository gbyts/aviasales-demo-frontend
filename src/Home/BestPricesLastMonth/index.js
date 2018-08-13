import React, { Component } from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import Section from "../SectionHeader/Section.js";
import SectionHeader from "../SectionHeader/SectionHeader.js";
import SectionImage from "../SectionHeader/SectionImage.js";
import SectionTitle from "../SectionHeader/SectionTitle.js";
import calen from "./calen.svg";
import flagru from "./flag-ru.png";
import flagmd from "./flag-md.png";
import flagam from "./flag-am.png";
import divider from "./divider.svg";

const Calendar = styled.img`
  padding: 16px;
`;

const BestPriceDestination = styled.div`
  margin-top: 40px;
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
`;
const BestPrices = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  @media ${device.laptopL} {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
`;
const DestBlock = styled.div`
  & {
    margin-bottom: 24px;
    flex-basis: 25.5%;
    margin-left: 7px;
    margin-right: 7px;
    position: relative;
  }
  @media ${device.tablet} {
    width: 83%;
  }
  @media ${device.laptopL} {
    width: auto;
    flex-basis: auto;
  }
`;

const Destination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DestImage = styled.img``;
const To = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const City = styled.div`
  font-size: 22px;
  font-weight: bold;
  line-height: 32px;
  color: #5b5b5c;
`;
const Country = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #a0b0b9;
`;
const FromCities = styled.div`
  & {
    margin-top: 24px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    right: 0px;
    bottom: -8px;
    background: url(${divider}) repeat-x;
  }
`;
const Top5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
`;
const Price = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #00bae8;
`;
const Weknow = styled.div`
  margin-top: 40px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4a4a4a;
`;
const NotOferta = styled.div`
  margin-top: 24px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #a0b0b9;
`;

class BestPricesLastMonth extends Component {
  render() {
    const bestprices = [
      {
        imgSrc: flagru,
        country: "Россия",
        city: "Симферополь (Крым)",
        fromcities: [
          {
            cityname: "Из Москвы",
            price: "4813"
          },
          {
            cityname: "Из Санкт-Петербурга",
            price: "7857"
          },
          {
            cityname: "Из Новосибирска",
            price: "15127"
          },
          {
            cityname: "Из Екатеринбурга",
            price: "9275"
          },
          {
            cityname: "Из Челябинска",
            price: "9148"
          }
        ]
      },
      {
        imgSrc: flagam,
        country: "Армения",
        city: "Ереван",
        fromcities: [
          {
            cityname: "Из Москвы",
            price: "6758"
          },
          {
            cityname: "Из Санкт-Петербурга",
            price: "9932"
          },
          {
            cityname: "Из Сочи",
            price: "11951"
          },
          {
            cityname: "Из Краснодара",
            price: "11741"
          },
          {
            cityname: "Из Ростов-на-Дону",
            price: "11956"
          }
        ]
      },
      {
        imgSrc: flagmd,
        country: "Молдавия",
        city: "Кишенев",
        fromcities: [
          {
            cityname: "Из Москвы",
            price: "8319"
          },
          {
            cityname: "Из Санкт-Петербурга",
            price: "10800"
          },
          {
            cityname: "Из Краснодара",
            price: "12098"
          },
          {
            cityname: "Из Сургута",
            price: "16277"
          },
          {
            cityname: "Из Нового Уренгоя",
            price: "15987"
          }
        ]
      }
    ];

    function showbestprices() {
      return (
        <BestPrices>
          {bestprices.map(function(bp) {
            var fromcities = bp.fromcities.map(function(fromciti) {
              return (
                <Top5>
                  <Title>{fromciti.cityname}</Title>
                  <Price>от {fromciti.price} Р.</Price>
                </Top5>
              );
            });
            return (
              <DestBlock>
                <Destination>
                  <DestImage src={bp.imgSrc} alt="" />
                  <To>
                    <City>{bp.city}</City>
                    <Country>{bp.country}</Country>
                  </To>
                </Destination>
                <FromCities>{fromcities}</FromCities>
              </DestBlock>
            );
          })}
        </BestPrices>
      );
    }

    return (
      <Section>
        <div className="container">
          <SectionHeader>
            <SectionImage>
              <Calendar src={calen} alt="" />
            </SectionImage>
            <SectionTitle>
              Лучшие цены на авиабилеты за последний месяц
            </SectionTitle>
          </SectionHeader>
          <BestPriceDestination>{showbestprices()}</BestPriceDestination>
          <Weknow>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира. <br />Поиск и сравнение цен на авиабилеты среди 100
            агентств и 728 авиакомпаний.
          </Weknow>
          <NotOferta>
            Цены, найденные пользователями за 24 часа, не является офертой.
          </NotOferta>
        </div>
      </Section>
    );
  }
}

export default BestPricesLastMonth;
