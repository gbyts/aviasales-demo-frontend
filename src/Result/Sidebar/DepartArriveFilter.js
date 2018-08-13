import React from "react";
import styled from "styled-components";
import BlockHeader from "./BlockHeader.js";
import FilterSection from "./FilterSection.js";
import plane from "./plane.svg";

const Departure = styled.div`
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
`;
const Destination = styled.div`
  margin-bottom: 15px;

  font-weight: bold;
  line-height: 18px;
  font-size: 12px;

  color: #323333;
`;
const Plane = styled.img``;
const TakeOff = styled.div`
  margin-bottom: 12px;
`;
const DeparturePlace = styled.div``;
const Time = styled.div`
  display: flex;
  justify-content: space-between;
`;
const From = styled.div``;
const To = styled.div``;
const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;
const Start = styled.div`
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 1px solid #d6d9da;
  border-radius: 50px;
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #00acde;
  border-radius: 2px;
`;

const Return = styled.div``;

const DepartArriveFilter = () => (
  <FilterSection>
    <BlockHeader open>Время вылета и прибытия</BlockHeader>
    <Departure>
      <Destination>
        Москва <Plane src={plane} alt="" /> Барселона
      </Destination>
      <TakeOff>
        <DeparturePlace>Вылет из Москвы:</DeparturePlace>
        <Time>
          <From>с 00:05, 24 фев</From>
          <To>до 23:45, 24 фев</To>
        </Time>
        <Slider>
          <Start />
          <Line />
          <Start />
        </Slider>
      </TakeOff>
      <TakeOff>
        <DeparturePlace>Прибытие в Барселону:</DeparturePlace>
        <Time>
          <From>с 03:05, 24 фев</From>
          <To>до 13:50, 26 фев</To>
        </Time>
        <Slider>
          <Start />
          <Line />
          <Start />
        </Slider>
      </TakeOff>
    </Departure>

    <Departure>
      <Destination>
        Барселона <Plane src={plane} alt="" /> Москва
      </Destination>
      <TakeOff>
        <DeparturePlace>Вылет из Барселоны</DeparturePlace>
        <Time>
          <From>с 06:00, 3 мар</From>
          <To>до 23:45, 3 мар</To>
        </Time>
        <Slider>
          <Start />
          <Line />
          <Start />
        </Slider>
      </TakeOff>
      <TakeOff>
        <DeparturePlace>Прибытие в Москву</DeparturePlace>
        <Time>
          <From>с 15:00, 3 мар</From>
          <To>до 09:55, 5 мар</To>
        </Time>
        <Slider>
          <Start />
          <Line />
          <Start />
        </Slider>
      </TakeOff>
    </Departure>
  </FilterSection>
);

export default DepartArriveFilter;
