import React, { Component } from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import pobeda from "./pobeda.png";
import lufthansa from "./lufthansa.png";
import lufthansaicon from "./lufthansa-icon.png";

const OffersSection = styled.div`
  background: linear-gradient(107.04deg, #00b0de 0%, #196ebd 100%);
`;
const SectionHeader = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  padding-top: 16px;
  /*margin-left: 68px;*/
`;
const OfferBox = styled.div`
  margin-top: 24px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${device.laptopL} {
    justify-content: center;
  }
`;
const Offer = styled.div`
  margin-bottom: 12px;
  @media ${device.tablet} {
    width: 240px;
  }
  @media ${device.laptopL} {
    width: 298px;
    margin-left: 34px;
    margin-right: 34px;
  }
`;
const OfferHeader = styled.div`
  height: 63px;
  background-color: #cd2027;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const OfferInfo = styled.div`
  background-color: #fff;
  padding: 22px 16px 16px 8px;
  height: 203px;
  position: relative;
  @media ${device.tablet} {
    padding: 18px 8px 16px 8px;
  }
`;
const LogoPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  @media ${device.tablet} {
    > img {
      width: 100px;
    }
  }
`;
const PriceDays = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Price = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #5c5c5c;
  text-align: right;

  > span {
    font-size: 20px;
    line-height: 16px;
  }
`;
const DaysLeft = styled.div`
  margin-top: 10px;
  font-size: 12px;
  line-height: 15px;
  color: #d93633;
`;
const OfferText = styled.div`
  margin-top: 17px;
  font-size: 12px;
  line-height: 16px;
  color: #242424;
`;
const OfferButton = styled.button`
  position: absolute;
  width: 289px;
  margin-top: 27px;
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;

  color: #d93533;

  font-size: 16px;
  line-height: 20px;
  padding: 10px 0px 10px 0px;
  bottom: 16px;

  @media ${device.tablet} {
    width: 224px;
  }
  @media ${device.laptopL} {
    width: 266px;
  }
`;
const LookAll = styled.div`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  padding-top: 32px;
  padding-bottom: 24px;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;
const LookAllLink = styled.div`
  text-decoration: underline;
  margin-bottom: 8px;
`;

class SpecialOffers extends Component {
  render() {
    const offers = [
      {
        header: "Билеты от 499 рублей!",
        icon: "",
        logo: pobeda,
        price: "499",
        left: "45",
        text:
          "Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
      },
      {
        header: "В Нью-Йорк от 20 680 Р",
        icon: lufthansaicon,
        logo: lufthansa,
        price: "20 680",
        left: "19",
        text:
          "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
      },
      {
        header: "В Лос-Анджелес от 20 360 рублей",
        icon: lufthansaicon,
        logo: lufthansa,
        price: "20 360",
        left: "19",
        text:
          "Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa"
      }
    ];

    function showspecialoffers() {
      return (
        <OfferBox>
          {offers.map(function(offr) {
            return (
              <Offer>
                <OfferHeader>{offr.header}</OfferHeader>
                <OfferInfo>
                  <LogoPrice>
                    <Logo>
                      <img src={offr.logo} alt="" />
                    </Logo>
                    <PriceDays>
                      <Price>
                        от <span>{offr.price}</span> Р.
                      </Price>
                      <DaysLeft>Осталось {offr.left} дней</DaysLeft>
                    </PriceDays>
                  </LogoPrice>
                  <OfferText>{offr.text}</OfferText>
                  <OfferButton>Узнать подробности</OfferButton>
                </OfferInfo>
              </Offer>
            );
          })}
        </OfferBox>
      );
    }

    return (
      <OffersSection>
        <div className="container">
          <SectionHeader>Спецпредложения на авиабилеты</SectionHeader>
          {showspecialoffers()}
          <LookAll>
            <LookAllLink>Смотреть все спецпредложения</LookAllLink>
            * средняя цена по направлению
          </LookAll>
        </div>
      </OffersSection>
    );
  }
}

export default SpecialOffers;
