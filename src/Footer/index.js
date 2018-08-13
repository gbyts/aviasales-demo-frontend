import React, { Component } from "react";
import styled, { css } from "styled-components";
import { device } from "../device";
import vk from "./vk.svg";
import fb from "./fb.svg";
import ig from "./ig.svg";
import twitter from "./twitter.svg";
import viber from "./viber.svg";
import appstore from "./appstore.svg";
import googleplay from "./googleplay.svg";
import windows from "./windows.svg";

const FooterSection = styled.section`
  padding-top: 16px;
  font-size: 12px;
  line-height: 16px;
  color: #5b5b5c;
`;

const Menu = styled.div`
  margin-bottom: 34px;
`;
const LinksHeader = styled.h4`
  margin-bottom: 16px;
  font-weight: 500;
  color: #4a4a4a;
  text-decoration: uppercase;
`;
const Links = styled.a`
  display: block;
  margin-bottom: 12px;
  color: #5b5b5c;
  text-decoration: none;
`;
const AllLinks = styled.a`
  margin-top: 4px;
  font-weight: 500;
  color: #4a4a4a;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #e0e6e8;
  box-sizing: border-box;
  margin-top: 24px;
  margin-bottom: 24px;
`;
const CompanyLinks = styled.div`
  margin-bottom: 16px;
  padding-left: 6px;

  @media ${device.laptopL} {
    width: 100%;
  }
`;
const CompanyLink = styled.a`
  display: inline-block;
  margin-right: 20px;
  color: #5b5b5c;
  text-decoration: none;
  margin-bottom: 8px;
`;
const Social = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 6px;

  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
`;
const SocialLink = styled.div`
  display: flex;
  flex-basis: 33%;
  margin-bottom: 12px;

  @media ${device.tablet} {
    margin-right: 30px;
  }
  @media ${device.laptopL} {
    align-items: center;
  }
`;
const SocialImage = styled.img`
  margin-right: 4px;
`;
const SocialText = styled.a``;
const Hotels = styled.div`
  text-align: center;
  margin-top: 24px;
  flex-basis: 100%;
  justify-content: center;
  margin-bottom: 16px;

  @media ${device.tablet} {
    text-align: left;
    margin-left: 5px;
  }
`;
const Apps = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-items: center;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 5px;
  }

}`;
const AppLink = styled.div`
  margin-bottom: 4px;
  @media ${device.tablet} {
    margin-right: 10px;
  }
`;
const Copyright = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-basis: 100%;
  justify-content: center;

  @media ${device.tablet} {
    justify-content: flex-start;
    margin-left: 5px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterSection>
        <div class="container">
          <div class="row">
            <div class="col-xs-6 col-md-3 col-lg-2">
              <Menu>
                <LinksHeader>СТРАНЫ</LinksHeader>
                <Links href="russia">Россия</Links>
                <Links>Таиланд</Links>
                <Links>Черногория</Links>
                <Links>Кипр</Links>
                <Links>Болгария</Links>
                <Links>Грузия</Links>
                <AllLinks>Все страны →</AllLinks>
              </Menu>
            </div>
            <div class="col-xs-6 col-md-3 col-lg-2">
              <Menu>
                <LinksHeader>ГОРОДА</LinksHeader>
                <Links>Москва</Links>
                <Links>Санкт-Петербург</Links>
                <Links>Симферополь</Links>
                <Links>Адлер</Links>
                <Links>Екатеринбург</Links>
                <Links>Лондон</Links>
                <AllLinks>города →</AllLinks>
              </Menu>
            </div>
            <div class="col-xs-6 col-md-3 col-lg-2">
              <Menu>
                <LinksHeader>АВИАКОМПАНИИ</LinksHeader>
                <Links>Air Berlin</Links>
                <Links>Air France</Links>
                <Links>Alitalia</Links>
                <Links>Air Baltic</Links>
                <Links>Emirates</Links>
                <Links>KLM</Links>
                <AllLinks>Все авиакомпании →</AllLinks>
              </Menu>
            </div>
            <div class="col-xs-6 col-md-3 col-lg-2">
              <Menu>
                <LinksHeader>АЭРОПОРТЫ</LinksHeader>
                <Links>Шереметьево</Links>
                <Links>Курумоч</Links>
                <Links>Домодедово</Links>
                <Links>Толмачево</Links>
                <Links>Владивосток</Links>
                <Links>Гамбург</Links>
                <AllLinks>Все аэропорты →</AllLinks>
              </Menu>
            </div>
            <div class="col-xs-6 col-md-3 col-lg-2">
              <Menu>
                <LinksHeader>НАПРАВЛЕНИЯ</LinksHeader>
                <Links>MOW – SIP</Links>
                <Links>MOW – AER</Links>
                <Links>MOW – TIV</Links>
                <Links>MOW – MRV</Links>
                <Links>LED – MOW</Links>
                <Links>MOW – BKK</Links>
              </Menu>
            </div>
            <div class="col-xs-6 col-md-3 col-lg-2">
              <Menu>
                <LinksHeader>СЕРВИСЫ</LinksHeader>
                <Links>Горящие авиабилеты</Links>
                <Links>Календарь низких цен</Links>
                <Links>Карта низких цен</Links>
                <Links>Спецпредложения</Links>
                <Links>Таблица цен</Links>
                <Links>Блог</Links>
                <Links>Помощь</Links>
              </Menu>
            </div>
            <Divider />
            <CompanyLinks>
              <CompanyLink href="{}" title="">
                О компании
              </CompanyLink>
              <CompanyLink href="{}" title="">
                Партнёрская программа
              </CompanyLink>
              <CompanyLink href="{}" title="">
                Реклама
              </CompanyLink>
              <CompanyLink href="{}" title="">
                Вакансии
              </CompanyLink>
              <CompanyLink href="{}" title="">
                Помощь
              </CompanyLink>
              <CompanyLink href="{}" title="">
                Правила
              </CompanyLink>
              <CompanyLink href="{}" title="">
                White Label авиабилеты
              </CompanyLink>
            </CompanyLinks>
            <Social>
              <SocialLink>
                <SocialImage src={vk} alt="" />
                <SocialText>Вконтакте</SocialText>
              </SocialLink>
              <SocialLink>
                <SocialImage src={fb} alt="" />
                <SocialText>Фейсбук</SocialText>
              </SocialLink>
              <SocialLink>
                <SocialImage src={ig} alt="" />
                <SocialText>Инстаграм</SocialText>
              </SocialLink>
              <SocialLink>
                <SocialImage src={twitter} alt="" />
                <SocialText>Твиттер</SocialText>
              </SocialLink>
              <SocialLink>
                <SocialImage src={viber} alt="" />
                <SocialText>Вайбер</SocialText>
              </SocialLink>
            </Social>
            <Hotels>Поиск и бронирование отелей</Hotels>
            <Apps>
              <AppLink>
                <img src={appstore} alt="" />
              </AppLink>
              <AppLink>
                <img src={googleplay} alt="" />
              </AppLink>
              <AppLink>
                <img src={windows} alt="" />
              </AppLink>
            </Apps>
            <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
          </div>
        </div>
      </FooterSection>
    );
  }
}

export default Footer;
