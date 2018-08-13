import React, { Component } from "react";
import styled, { css } from "styled-components";
import plane from "./plane.png";
import email from "./email.png";
import list from "./list.png";

const Article = styled.div`
  margin-top: 20px;
`;

const ArticleText = styled.div``;
const ArticleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
`;
const HeaderIcon = styled.img`
  margin-right: 10px;
`;
const HeaderTxt = styled.h3`
  font-size: 13px;
  line-height: 18px;
  color: #4a4a4a;
`;
const ArticlePreview = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #4a4a4a;
`;
const More = styled.a`
  color: #00ace2;
  text-decoration: none;
`;

class Articles extends Component {
  render() {
    const article = [
      {
        icon: plane,
        header: "КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?",
        txt:
          "Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на самолет по сотням авиакомпаний и находим за считанные минуты самые дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь нашим поиском, который совершенно бесплатно сравнивает цены на авиабилеты онлайн и находит самые дешевые перелеты. Больше нет смысла ходить в авиакассы, обзванивать агентства — дешевый билет находится на расстоянии клика. На нашем сайте вы можете подобрать дешевые билеты на самолет в Европу, Азию и на другие континенты. Мы написали для вас простую инструкцию о том, как пользоваться поиском и экономить на перелетах от 1000 до 20 000 руб в год."
      },
      {
        icon: email,
        header: "ЭЛЕКТРОННЫЙ АВИАБИЛЕТ",
        txt:
          "Электронный авиабилет — это, по сути, обычный билет на самолет, но только в менее привычном для путешественника виде. Вся информация об авиаперелете (данные пассажира, маршрут следования) хранится в электронной базе, а пассажир получает на руки маршрут-квитанцию. Некоторые пассажиры, купив авиабилет онлайн и получив маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата А4, на котором распечатана вся информация о предстоящем перелете. Однако это действительно официальный документ, подтверждающий договор между авиаперевозчиком и пассажиром. При регистрации на рейс пассажир должен предъявить маршрут-квитанцию вместе с удостоверением личности точно так же, как предъявляют обыкновенный бумажный билет. Следует отметить, что электронный билет, приобретенный онлайн, стоит дешевле своего бумажного аналога."
      },
      {
        icon: list,
        header: "20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ",
        txt:
          "Есть масса путеводителей по странам, но ни одного о том, как провести время в самолете. Для того, чтобы сделать ваш перелет максимально комфортным, мы написали 20 советов о подготовке к путешествию. Ведь настоящее путешествие начинается со слов «Добро пожаловать на борт нашего самолета»!"
      }
    ];

    function showarticles() {
      return (
        <ArticleText>
          {article.map(function(art) {
            return (
              <div>
                <ArticleHeader>
                  <HeaderIcon src={art.icon} alt="" />
                  <HeaderTxt>{art.header}</HeaderTxt>
                </ArticleHeader>
                <ArticlePreview>
                  {art.txt} <More> Подробнее</More>
                </ArticlePreview>
              </div>
            );
          })}
        </ArticleText>
      );
    }

    return (
      <Article>
        <div class="container">{showarticles()}</div>
      </Article>
    );
  }
}

export default Articles;
