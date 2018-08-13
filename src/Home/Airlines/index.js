import React, { Component } from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import aeroflot from "./aeroflot.png";
import el from "./el.png";
import korean from "./korean.png";
import onetwotrip from "./onetwotrip.png";
import s7 from "./s7.png";
import facebook from "./fb.png";
import vk from "./vk.png";
import rss from "./rss.png";
import twitter from "./tw.png";
import line from "./line.png";
import left from "./left.png";
import right from "./right.png";

const Section = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
const Title = styled.h3`
  margin-top: 24px;

  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  text-align: center;
  color: #5c5c5c;
`;
const Slider = styled.div``;
const Controls = styled.div`
  position: relative;
`;
const Left = styled.div`
  position: absolute;
  top: 13px;
  left: 69px;
  background-image: url(${left});
  width: 18px;
  height: 32px;
`;
const Right = styled.div`
  position: absolute;
  top: 13px;
  right: 69px;
  background-image: url(${right});
  width: 18px;
  height: 32px;
`;
const Slide = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-left: 114px;
  padding-right: 114px;
`;
const Link = styled.div`
  margin-right: 32px;
  margin-bottom: 32px;
`;
const Paginator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const CurrentSlide = styled.div`
  width: 10px;
  height: 10px;
  background: #818181;
  border: 1px solid #818181;
  border-radius: 50px;
  margin-right: 8px;
`;
const NextSlide = styled.div`
  width: 10px;
  height: 10px;
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #818181;
  border-radius: 50px;
  margin-right: 8px;
`;
const ColorLine = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 7px;
  background-image: url(${line});
`;
const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.laptopL} {
    flex-direction: row;
    justify-content: center;
    padding-top: 35px;
    padding-bottom: 24px;
  }
`;
const TextBlock = styled.div`
  @media ${device.laptopL} {
    margin-right: 223px;
  }
`;
const Sign = styled.div`
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.laptopL} {
    flex-direction: row;
  }
`;
const EmailHeader = styled.h4`
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  text-align: center;
  color: #5c5c5c;
`;
const EmailText = styled.p`
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
  text-align: center;
  color: #5c5c5c;
`;
const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${device.tablet} {
    /*margin-top: 20px;*/
  }

  @media ${device.laptopL} {
    /*margin-top: 20px;*/
  }
`;
const SocialItem = styled.a`
  width: 36px;
  height: 36px;
  background: #9b9b9b;
  border: 1px solid #979797;
  border-radius: 50px;
  margin-right: 6px;
`;
const EmailForm = styled.form`
  margin-bottom: 61px;
  margin-top: 24px;

  width: 330px;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${device.laptopL} {
    margin-bottom: 0;
    margin-top: 0;
  }
`;
const Input = styled.input`
  font-size: 16px;
  line-height: 20px;
  color: #a0b0b9;
  padding-left: 13px;
`;
const Button = styled.button`
  background: #ff8e41;
  border-radius: 2px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  width: 139px;
`;

class MobileApp extends Component {
  render() {
    return (
      <Section>
        <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
        <Slider>
          <div class="container">
            <Controls>
              <Left />
              <Right />
            </Controls>
            <div class="col-lg-12">
              <Slide>
                <Link>
                  <img src={aeroflot} alt="" />
                </Link>
                <Link>
                  <img src={s7} alt="" />
                </Link>
                <Link>
                  <img src={onetwotrip} alt="" />
                </Link>
                <Link>
                  <img src={korean} alt="" />
                </Link>
                <Link>
                  <img src={el} alt="" />
                </Link>
              </Slide>
            </div>
          </div>
          <Paginator>
            <CurrentSlide />
            <NextSlide />
            <NextSlide />
          </Paginator>
        </Slider>
        <ColorLine />
        <Email>
          <TextBlock>
            <EmailHeader>Хотите знать все о скидках на авиабилеты?</EmailHeader>
            <EmailText>
              Вы можете подписаться на нашу рассылку<br /> через соцсети или по
              электронной почте
            </EmailText>
          </TextBlock>
          <Sign>
            <Social>
              <SocialItem>
                <img src={twitter} alt="" />
              </SocialItem>
              <SocialItem>
                <img src={facebook} alt="" />
              </SocialItem>
              <SocialItem>
                <img src={vk} alt="" />
              </SocialItem>
              <SocialItem>
                <img src={rss} alt="" />
              </SocialItem>
            </Social>
            <EmailForm>
              <Input placeholder="Ваш email" />
              <Button>Подписаться</Button>
            </EmailForm>
          </Sign>
        </Email>
      </Section>
    );
  }
}

export default MobileApp;
